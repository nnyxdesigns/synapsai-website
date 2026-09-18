import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { publicPaths, published } from '../src/lib/site';
import { englishOnlyPaths } from '../src/lib/ecosystem';
import { insightPaths } from '../src/lib/insights';
import { team, socialProfiles } from '../src/lib/company';

const priority = [
  '/',
  '/products',
  '/products/imaginai',
  '/products/imaginai-prof',
  '/work/imaginai',
  '/company/impact',
  '/solutions',
  '/solutions/digital-transformation',
  '/company/team',
  '/company',
];
test('all English V1 routes have coherent metadata and internal destinations', async ({ page }) => {
  const titles = new Set<string>();
  const allowed = [...publicPaths, ...englishOnlyPaths, ...insightPaths(false)];
  for (const path of [...publicPaths, ...englishOnlyPaths]) {
    expect((await page.goto(path))?.status(), path).toBe(200);
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      `https://synapsai.co${path === '/' ? '' : path}`,
    );
    const title = await page.title();
    expect(titles.has(title), `duplicate title: ${title}`).toBe(false);
    titles.add(title);
    for (const href of await page
      .locator('a[href^="/"]')
      .evaluateAll((links) => links.map((a) => a.getAttribute('href')!))) {
      if (!href.startsWith('/fr'))
        expect(allowed, `missing destination ${href} on ${path}`).toContain(href.split('#')[0]);
    }
    if (englishOnlyPaths.includes(path))
      await expect(page.locator('link[hreflang="fr"], a[href^="/fr"]')).toHaveCount(0);
  }
});

test('Home connects two products, evidence and three real Insights', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.ecosystem-product-grid article')).toHaveCount(2);
  await expect(page.locator('.home-insights .insight-card')).toHaveCount(3);
  await expect(page.locator('.home-insights .insight-preview-author')).toHaveCount(3);
  await page.getByRole('link', { name: 'Explore ImaginAi Prof', exact: true }).click();
  await expect(page).toHaveURL('/products/imaginai-prof');
  await expect(page.locator('main')).toContainText('Teachers & instructors');
  await expect(page.locator('main .prof-visual')).toHaveCount(1);
  await expect(page.locator('main img[src*="imaginai-mobile"]')).toHaveCount(0);
  await page.getByRole('link', { name: 'Discover ImaginAi', exact: true }).click();
  await expect(page).toHaveURL('/products/imaginai');
  await expect(page.locator('main')).toContainText('Secondary & higher-education learners');
  await page.getByRole('link', { name: 'Read the case study', exact: true }).click();
  await expect(page).toHaveURL('/work/imaginai');
  await expect(page.locator('.stakeholder-needs > div')).toHaveCount(3);
  await page.getByRole('link', { name: 'Explore the documented milestones' }).click();
  await expect(page).toHaveURL('/company/impact');
  await expect(page.locator('.impact-history li')).toHaveCount(5);
});

test('ImaginAi Study Tools changes visual by hover, click, touch and keyboard', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/products/imaginai');
  const tabs = page.getByRole('tab');
  const panel = page.locator('.imaginai-study-stage');
  await expect(tabs).toHaveCount(4);
  await expect(tabs.first()).toHaveAttribute('aria-selected', 'true');
  await expect(panel.locator('img.is-active')).toHaveAttribute('alt', /document analysis/i);

  const practice = page.getByRole('tab', { name: /Practise and revisit/ });
  await practice.hover();
  await expect(practice).toHaveAttribute('aria-selected', 'true');
  await expect(panel.locator('img.is-active')).toHaveAttribute('alt', /practice question/i);

  const voice = page.getByRole('tab', { name: /Use voice when it helps/ });
  await voice.click();
  await expect(panel.locator('img.is-active')).toHaveAttribute('alt', /voice-learning/i);
  await voice.press('ArrowRight');
  const translation = page.getByRole('tab', { name: /Move across languages/ });
  await expect(translation).toBeFocused();
  await expect(translation).toHaveAttribute('aria-selected', 'true');
  await expect(panel.locator('img.is-active')).toHaveAttribute('alt', /translation interface/i);
  await expect
    .poll(() =>
      panel
        .locator('img.is-active')
        .evaluate(
          (image) =>
            (image as HTMLImageElement).complete &&
            (image as HTMLImageElement).naturalWidth > 0,
        ),
    )
    .toBe(true);
  await panel.scrollIntoViewIfNeeded();
  await page.screenshot({ path: '.qa/imaginai-study-tools-interaction.png' });

  await page.setViewportSize({ width: 390, height: 900 });
  await page.goto('/products/imaginai');
  // A mobile tap activates the same button click handler; the shared test context has no touch device.
  await page.getByRole('tab', { name: /Use voice when it helps/ }).click();
  await expect(page.locator('.imaginai-study-stage img.is-active')).toHaveAttribute(
    'alt',
    /voice-learning/i,
  );
});

test('validated social and team links; pending routes remain unavailable', async ({
  page,
  request,
}) => {
  await page.goto('/company/team');
  for (const person of team)
    await expect(
      page.getByRole('link', { name: `${person.name} on LinkedIn (opens in a new tab)` }),
    ).toHaveAttribute('href', person.linkedin);
  for (const social of socialProfiles) {
    const link = page.getByRole('link', {
      name: `SynapsAi on ${social.label} (opens in a new tab)`,
    });
    await expect(link).toHaveAttribute('href', social.url);
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  }
  for (const path of ['/privacy', '/terms', '/fr/products/imaginai-prof', '/fr/company/impact'])
    expect((await request.get(path)).status()).toBe(404);
  const sitemap = await (await request.get('/sitemap.xml')).text();
  for (const path of englishOnlyPaths) {
    if (published) expect(sitemap).toContain(`<loc>https://synapsai.co${path}</loc>`);
    else expect(sitemap).not.toContain(`<loc>https://synapsai.co${path}</loc>`);
    expect(sitemap).not.toContain(`https://synapsai.co/fr${path}`);
  }
  await page.goto('/company/impact');
  for (const unsupported of [
    'Microsoft',
    'GHSS',
    'Mastercard',
    'Orange Digital',
    'Friends of Figma',
  ])
    await expect(page.locator('main')).not.toContainText(unsupported);
});

for (const path of priority)
  test(`English V2 responsive and accessibility: ${path}`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await page.emulateMedia({ reducedMotion: 'reduce' });
    for (const width of [320, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      await page.goto(path);
      await page.evaluate(() => document.fonts.ready);
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
        `${path} at ${width}`,
      ).toBe(true);
      if (width === 390 || width === 1440) {
        const audit = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
          .analyze();
        expect(audit.violations).toEqual([]);
        for (const img of await page.locator('main img').all()) {
          await img.scrollIntoViewIfNeeded();
          await expect
            .poll(() =>
              img.evaluate(
                (el) =>
                  (el as HTMLImageElement).complete && (el as HTMLImageElement).naturalWidth > 0,
              ),
            )
            .toBe(true);
        }
        await page.evaluate(() => scrollTo(0, 0));
        const name = path === '/' ? 'home' : path.slice(1).replaceAll('/', '-');
        await page.screenshot({ path: `.qa/ia-v2-${name}-${width}.png`, fullPage: true });
        await page.screenshot({ path: `.qa/ia-v2-${name}-${width}-viewport.png` });
      }
    }
    expect(errors).toEqual([]);
  });
