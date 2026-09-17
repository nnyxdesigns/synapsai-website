import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { insights } from '../src/lib/insights';
const article = insights[0];
const path = `/insights/${article.slug}`;
const url = `https://synapsai.co${path}`;
test('desktop copy falls back to browser copy when Clipboard API rejects', async ({
  page,
  context,
}) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.addInitScript(() => {
    navigator.clipboard.writeText = async () => {
      throw new Error('blocked');
    };
  });
  await page.goto(path);
  await page.getByRole('button', { name: 'Copy link', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Link copied!', exact: true })).toBeVisible();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(url);
});
test('unresponsive clipboard does not leave the reader without feedback', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText: () => new Promise(() => {}) },
    });
    document.execCommand = () => false;
  });
  await page.goto(path);
  await page.getByRole('button', { name: 'Copy link', exact: true }).click();
  await expect(page.getByRole('status')).toContainText('Ctrl+C');
  await expect(page.getByLabel('Article link', { exact: true })).toHaveValue(url);
});
test('copy uses canonical URL; fallback sharing links and keyboard controls work', async ({
  page,
  context,
}) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.addInitScript(() =>
    Object.defineProperty(navigator, 'share', { value: undefined, configurable: true }),
  );
  await page.goto(`${path}?source=local#intro`);
  await page.getByRole('button', { name: 'Copy link', exact: true }).click();
  await expect(page.getByRole('status')).toHaveText('Link copied.');
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(url);
  await page.getByRole('button', { name: 'Share article', exact: true }).click();
  await expect(page.getByRole('navigation', { name: 'Article sharing options' })).toBeVisible();
  const link = page.getByRole('link', { name: 'LinkedIn (opens in a new tab)', exact: true });
  expect(new URL((await link.getAttribute('href'))!).searchParams.get('url')).toBe(url);
  expect(
    new URL(
      (await page
        .getByRole('link', { name: 'WhatsApp (opens in a new tab)', exact: true })
        .getAttribute('href'))!,
    ).searchParams.get('text'),
  ).toBe(`${article.title}\n${url}`);
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Share article', exact: true })).toBeFocused();
  await expect(page.getByRole('navigation', { name: 'Article sharing options' })).toBeHidden();
});
test('denied clipboard exposes selectable link; sharing remains accessible on small screens', async ({
  page,
}) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: () => Promise.reject(new Error('denied')) },
      configurable: true,
    });
    Object.defineProperty(navigator, 'share', { value: undefined, configurable: true });
    document.execCommand = () => false;
  });
  await page.setViewportSize({ width: 320, height: 850 });
  await page.goto(path);
  await page.getByRole('button', { name: 'Copy link', exact: true }).click();
  await expect(page.getByLabel('Article link', { exact: true })).toHaveValue(url);
  await expect(page.getByLabel('Article link', { exact: true })).toBeFocused();
  await expect(page.getByRole('status')).not.toHaveText('Link copied.');
  await page.getByRole('button', { name: 'Share article', exact: true }).click();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  expect(
    (
      await new AxeBuilder({ page })
        .include('.article-sharing')
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze()
    ).violations,
  ).toEqual([]);
  await page.screenshot({ path: '.qa/article-share-mobile.png' });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.screenshot({ path: '.qa/article-share-desktop.png' });
});
test('share opens options even when native sharing exists; native cancellation keeps them usable', async ({
  page,
}) => {
  await page.addInitScript(() =>
    Object.defineProperty(navigator, 'share', {
      configurable: true,
      value: async (data: ShareData) => {
        sessionStorage.setItem('shared', JSON.stringify(data));
        throw new DOMException('cancelled', 'AbortError');
      },
    }),
  );
  await page.goto(path);
  await page.getByRole('button', { name: 'Share article', exact: true }).click();
  await expect(page.getByRole('navigation', { name: 'Article sharing options' })).toBeVisible();
  expect(await page.evaluate(() => sessionStorage.getItem('shared'))).toBeNull();
  await page.getByRole('button', { name: 'More sharing options', exact: true }).click();
  expect(JSON.parse((await page.evaluate(() => sessionStorage.getItem('shared')))!)).toEqual({
    title: article.title,
    url,
  });
  await expect(page.getByRole('navigation', { name: 'Article sharing options' })).toBeVisible();
});
