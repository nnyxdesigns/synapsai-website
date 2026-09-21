import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { pressEntries } from '../src/lib/press';
import { published } from '../src/lib/site';
import {
  availableInsights,
  insightsNavigationVisible,
  insightPaths,
  insights,
  insightAuthors,
  insightsDisplayLimit,
  splitInsightsForIndex,
} from '../src/lib/insights';

const visibleInsights = availableInsights(published);

async function loadVisibleMedia(page: import('@playwright/test').Page) {
  for (const img of await page.locator('main img').all()) {
    await img.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        img.evaluate(
          (el) => (el as HTMLImageElement).complete && (el as HTMLImageElement).naturalWidth > 0,
        ),
      )
      .toBe(true);
  }
  await page.evaluate(() => scrollTo(0, 0));
}

test('curated index, navigation and previous article URL', async ({ page, request }) => {
  await page.goto('/');
  await page
    .getByRole('navigation', { name: 'Main navigation' })
    .getByRole('link', { name: 'Insights', exact: true })
    .click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Insights.');
  await expect(page.locator('.insight-feature')).toHaveCount(1);
  const { current, archive } = splitInsightsForIndex(visibleInsights);
  await expect(page.locator('.insights-library .insight-card')).toHaveCount(current.length - 1);
  for (const article of visibleInsights)
    await expect(page.getByRole('heading', { name: article.title, exact: true })).toHaveCount(1);
  await expect(page.getByRole('heading', { name: 'Archive', exact: true })).toHaveCount(
    archive.length ? 1 : 0,
  );
  await expect(page.locator('.insights-archive-list li')).toHaveCount(archive.length);
  for (const article of archive)
    await expect(
      page.locator(`.insights-archive-list a[href="/insights/${article.slug}"]`),
    ).toHaveCount(1);
  await page.getByRole('link', { name: 'Read the article', exact: true }).click();
  await expect(page).toHaveURL(`/insights/${insights[0].slug}`);
  const redirect = await request.get('/insights/ai-for-africa-designed-for-context', {
    maxRedirects: 0,
  });
  expect(redirect.status()).toBe(301);
  expect(redirect.headers().location).toContain(insights[0].slug);
  await page.goto('/insights/ai-for-africa-designed-for-context');
  await expect(page).toHaveURL(`/insights/${insights[0].slug}`);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Open menu' }).click();
  await page
    .getByRole('navigation', { name: 'Main navigation' })
    .getByRole('link', { name: 'Insights', exact: true })
    .click();
  await expect(page).toHaveURL('/insights');
});

test('review articles remain staging-only while approved articles are publicly eligible', async ({
  request,
}) => {
  expect(availableInsights(false)).toHaveLength(10);
  expect(insightsNavigationVisible(false)).toBe(true);
  expect(availableInsights(true)).toHaveLength(5);
  expect(insightPaths(true)).toHaveLength(6);
  expect(insightsNavigationVisible(true)).toBe(true);
  const sitemap = await (await request.get('/sitemap.xml')).text();
  for (const article of insights) {
    if (published && article.status === 'published') expect(sitemap).toContain(article.slug);
    else expect(sitemap).not.toContain(article.slug);
  }
  expect((await request.get(`/fr/insights/${insights[0].slug}`)).status()).toBe(200);
  expect((await request.get(`/fr/insights/${insights[1].slug}`)).status()).toBe(404);
});

test('the Insights index keeps no more than seven current entries and preserves older entries in Archive', () => {
  const overflow = [...insights, { ...insights[0], slug: 'archive-test-entry' }];
  const { current, archive } = splitInsightsForIndex(overflow);
  expect(current).toHaveLength(insightsDisplayLimit);
  expect(archive).toHaveLength(4);
  expect(archive.some((entry) => entry.slug === 'archive-test-entry')).toBe(true);
});

for (const [index, article] of visibleInsights.entries()) {
  test(`article ${index + 1}: content, authors, metadata, references and related links`, async ({
    page,
    request,
  }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    const path = `/insights/${article.slug}`;
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(article.title);
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.locator('.article-deck')).toHaveText(article.subtitle);
    await expect(page.locator('.article-body > section[id]')).toHaveCount(
      article.body.sections.length + 1,
    );
    await expect(page.locator('.article-tags li')).toHaveCount(article.tags.length);
    await expect(page.locator('.article-byline .insight-person')).toHaveCount(
      article.authors.length,
    );
    await expect(page.locator('.article-takeaway li')).toHaveCount(article.body.takeaways.length);
    await expect(page.locator('#sources li')).toHaveCount(article.body.sources.length);
    await expect(page.locator('.insight-related .insight-card')).toHaveCount(
      article.relatedInsights.length,
    );
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      `https://synapsai.co${path}`,
    );
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      'content',
      published ? /^index, follow$/ : /noindex/,
    );
    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute('content', 'article');
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
      'content',
      'summary_large_image',
    );
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      'content',
      `https://synapsai.co${article.seo.ogImage}`,
    );
    expect((await request.get(article.seo.ogImage)).headers()['content-type']).toContain(
      'image/png',
    );
    if (index === 0) {
      await expect(page.locator('link[hreflang="fr"]')).toHaveAttribute(
        'href',
        /\/fr\/insights\/ai-for-africa-designed-for-context-not-just-translated$/,
      );
    } else {
      await expect(page.locator('link[hreflang="fr"], a[href^="/fr"]')).toHaveCount(0);
    }
    await expect(page.locator('.review-badge')).toHaveCount(article.status === 'published' ? 0 : 1);
    const schema = JSON.parse(
      (await page.locator('.insight-article script[type="application/ld+json"]').textContent())!,
    );
    expect(schema.headline).toBe(article.title);
    expect(schema.author.map((a: { name: string }) => a.name)).toEqual(
      article.authors.map((id) => insightAuthors[id].name),
    );
    expect(schema.datePublished).toBe(article.publishedAt);
    for (const section of article.body.sections) {
      await expect(page.locator(`#${section.id}`)).toHaveCount(1);
      for (const p of section.paragraphs)
        if (p.source) expect(article.body.sources.some((s) => s.id === p.source)).toBe(true);
    }
    const first = article.body.sections[0];
    await page
      .getByRole('navigation', { name: 'On this page' })
      .getByRole('link', { name: first.title, exact: true })
      .click();
    await expect(page).toHaveURL(`${path}#${first.id}`);
    for (const href of await page
      .locator('main a[href^="/"]')
      .evaluateAll((links) => [...new Set(links.map((a) => a.getAttribute('href')!))])) {
      expect((await request.get(href)).status(), `Internal destination ${href}`).toBe(200);
    }
    await page.locator('.insight-related .insight-card-link').first().click();
    await expect(page).toHaveURL(`/insights/${article.relatedInsights[0]}`);
    expect(errors).toEqual([]);
  });

  test(`article ${index + 1}: responsive, accessible and visually reviewable`, async ({ page }) => {
    for (const width of [320, 390, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      await page.goto(`/insights/${article.slug}`);
      await page.evaluate(() => document.fonts.ready);
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
        `overflow at ${width}px`,
      ).toBe(true);
      if (width === 390 || width === 1440) {
        await page.emulateMedia({ reducedMotion: 'reduce' });
        const audit = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
          .analyze();
        expect(audit.violations).toEqual([]);
        await loadVisibleMedia(page);
        await page.screenshot({
          path: `.qa/insights-v1-${index + 1}-${width}.png`,
          fullPage: true,
        });
        await page.screenshot({ path: `.qa/insights-v1-${index + 1}-${width}-viewport.png` });
        await page
          .locator('.article-diagram')
          .first()
          .screenshot({ path: `.qa/insights-v1-${index + 1}-${width}-diagram.png` });
        if (article.body.sections.some((s) => s.table))
          await page
            .locator('.article-table-wrap')
            .screenshot({ path: `.qa/insights-v1-${index + 1}-${width}-table.png` });
        if (article.body.sections.some((s) => s.image)) {
          await page.locator('.article-product-figure img').scrollIntoViewIfNeeded();
          await expect(page.locator('.article-product-figure img')).toHaveJSProperty(
            'complete',
            true,
          );
          await page
            .locator('.article-product-figure')
            .screenshot({ path: `.qa/insights-v1-product-${width}.png` });
        }
      }
    }
  });
}

test('index responsive layout, accessible cards and keyboard navigation', async ({ page }) => {
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto('/insights');
    await page.evaluate(() => document.fonts.ready);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
      true,
    );
    if (width === 390 || width === 1440) {
      await page.emulateMedia({ reducedMotion: 'reduce' });
      const audit = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();
      expect(audit.violations).toEqual([]);
      await loadVisibleMedia(page);
      await page.screenshot({ path: `.qa/insights-v1-index-${width}.png`, fullPage: true });
      await page.screenshot({ path: `.qa/insights-v1-index-${width}-viewport.png` });
    }
  }
  await page.reload();
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await page.keyboard.press('Enter');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('tab', { name: 'All', exact: true })).toBeFocused();
});

test('Insights categories, search and Press work with keyboard and on mobile', async ({ page }) => {
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto('/insights');
    const engineering = page.getByRole('tab', { name: 'Product & Engineering', exact: true });
    await engineering.click();
    await expect(engineering).toHaveAttribute('aria-selected', 'true');
    await expect(page.locator('.insight-feature')).toHaveCount(0);
    await expect(page.locator('.insights-library .insight-card')).toHaveCount(1);
    const search = page.getByRole('searchbox', { name: 'Search insights and press' });
    await search.fill('connectivity');
    await expect(page.locator('.insights-library .insight-card')).toHaveCount(1);
    await search.fill('no-such-story');
    await expect(page.getByRole('heading', { name: 'No matching stories.' })).toBeVisible();
    await page.getByRole('button', { name: 'View all insights' }).click();
    await expect(page.locator('.insight-feature')).toHaveCount(1);
    await expect(search).toHaveValue('');
    await page.getByRole('tab', { name: 'All', exact: true }).focus();
    await page.keyboard.press('End');
    const press = page.getByRole('tab', { name: 'Press', exact: true });
    await expect(press).toBeFocused();
    await expect(press).toHaveAttribute('aria-selected', 'true');
    await expect(page.locator('.press-link')).toHaveCount(8);
    await expect(page.locator('.insight-card')).toHaveCount(0);
    expect(
      (await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze())
        .violations,
    ).toEqual([]);
    await loadVisibleMedia(page);
    await page.screenshot({ path: `.qa/insights-press-${width}.png`, fullPage: true });
    await press.focus();
    await page.keyboard.press('Home');
    await page.keyboard.press('ArrowRight');
    await expect(page.getByRole('tab', { name: 'Perspectives', exact: true })).toHaveAttribute(
      'aria-selected',
      'true',
    );
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
      true,
    );
  }
});

test('three article columns and four Press columns link to all eight verified videos', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/insights');
  expect(
    await page
      .locator('.insights-library .insight-grid')
      .evaluate((el) => getComputedStyle(el).gridTemplateColumns.split(' ').length),
  ).toBe(3);
  expect(
    await page
      .locator('.press-list')
      .evaluate((el) => getComputedStyle(el).gridTemplateColumns.split(' ').length),
  ).toBe(4);
  await expect(page.locator('.insight-feature')).toHaveCount(1);
  await expect(page.locator('.press-link')).toHaveCount(4);
  await page.getByRole('button', { name: 'View all', exact: true }).click();
  await expect(page.getByRole('tab', { name: 'Press', exact: true })).toHaveAttribute(
    'aria-selected',
    'true',
  );
  await expect(page.locator('.press-link')).toHaveCount(8);
  for (const entry of pressEntries) {
    const card = page.locator('.press-link').filter({ hasText: entry.title });
    await expect(card).toHaveAttribute('href', entry.url);
    await expect(card).toHaveAttribute('rel', 'noopener noreferrer');
    await expect(card.locator('time')).toHaveAttribute('datetime', entry.publishedAt);
  }
  await expect(page.locator('iframe')).toHaveCount(0);
  await page.getByRole('searchbox').fill('SAGO');
  await expect(page.locator('.press-link')).toHaveCount(2);
  await page.getByRole('searchbox').fill('no-such-video');
  await expect(page.getByRole('heading', { name: 'No matching stories.' })).toBeVisible();
});
