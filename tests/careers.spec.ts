import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { buildSitemap } from '../src/lib/sitemap';

test('Careers is reachable in English with honest contact and complete metadata', async ({
  page,
  request,
}) => {
  await page.goto('/company');
  await page
    .getByRole('navigation', { name: 'Explore SynapsAi' })
    .getByRole('link', { name: 'Careers', exact: true })
    .click();
  await expect(page).toHaveURL('/company/careers');
  await expect(page.locator('h1')).toHaveText('Build somethingthat matters to someone.');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('link[hreflang="fr"]')).toHaveAttribute(
    'href',
    /\/fr\/company\/careers$/,
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://synapsai.co/company/careers',
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    'content',
    'https://synapsai.co/media/og/careers.png',
  );
  await page.getByRole('link', { name: 'Let’s talk about your next chapter' }).click();
  await expect(page).toHaveURL('/company/careers#opportunities');
  await expect(page.getByRole('link', { name: 'Contact the team', exact: true })).toHaveAttribute(
    'href',
    /^mailto:contact@synapsai.co\?subject=Careers/,
  );
  await expect(page.locator('.careers-contact-card')).toContainText(
    'No application is submitted through this website.',
  );
  const html = await (await request.get('/company/careers')).text();
  expect(html).not.toContain('JobPosting');
  expect((await request.get('/fr/company/careers')).status()).toBe(200);
  expect(buildSitemap(true).some((p) => p.url === 'https://synapsai.co/company/careers')).toBe(
    true,
  );
});
for (const width of [1440, 390, 320])
  test(`Careers responsive, media and accessibility at ${width}px`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/company/careers');
    for (const img of await page.locator('main img').all()) {
      await img.scrollIntoViewIfNeeded();
      await expect
        .poll(() => img.evaluate((e) => (e as HTMLImageElement).naturalWidth))
        .toBeGreaterThan(0);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
      true,
    );
    expect(
      (await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze())
        .violations,
    ).toEqual([]);
    await page.emulateMedia({ reducedMotion: 'reduce' });
    expect(
      await page.locator('.careers-layer-0').evaluate((e) => getComputedStyle(e).animationName),
    ).toBe('none');
    await page.evaluate(() => scrollTo(0, 0));
    await page.screenshot({ path: `.qa/careers-${width}.png`, fullPage: true });
    expect(errors).toEqual([]);
  });
