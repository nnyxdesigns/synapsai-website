import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { insightPaths } from '../src/lib/insights';
import { englishOnlyPaths } from '../src/lib/ecosystem';
const paths = [
  '/',
  '/solutions',
  '/solutions/ai-automation',
  '/solutions/custom-software',
  '/solutions/web-mobile-development',
  '/solutions/digital-transformation',
  '/products',
  '/products/imaginai',
  '/work',
  '/work/imaginai',
  '/company',
  '/company/about',
  '/company/team',
  '/faq',
  '/contact',
];
test('all public routes render with unique metadata, valid links, and no browser errors', async ({
  page,
  request,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  const titles = new Set<string>();
  for (const prefix of ['', '/fr'])
    for (const path of paths) {
      const url = `${prefix}${path === '/' ? '' : path}` || '/';
      const response = await page.goto(url);
      expect(response?.status(), url).toBe(200);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('html')).toHaveAttribute('lang', prefix ? 'fr' : 'en');
      const title = await page.title();
      expect(titles.has(title), `duplicate title: ${title}`).toBe(false);
      titles.add(title);
      expect(
        new URL((await page.locator('link[rel="canonical"]').getAttribute('href'))!).href,
      ).toBe(new URL(`https://synapsai.co${url}`).href);
      await expect(page.locator('link[hreflang="en"][rel="alternate"]')).toHaveCount(1);
      await expect(page.locator('link[hreflang="fr"][rel="alternate"]')).toHaveCount(1);
      const links = await page
        .locator('a[href^="/"]')
        .evaluateAll((links) => links.map((link) => link.getAttribute('href')!));
      for (const link of links) {
        const normalized = link.replace(/^\/fr(?=\/|$)/, '') || '/';
        expect(
          prefix ? paths : [...paths, ...englishOnlyPaths, ...insightPaths(false)],
          `Unknown destination ${link} on ${url}`,
        ).toContain(normalized);
      }
    }
  const response = await request.get('/fr/page-qui-nexiste-pas');
  expect(response.status()).toBe(404);
  expect(await response.text()).toContain('Cette page n’existe pas');
  expect(errors).toEqual([]);
});
test('navigation, same-page language switch, and keyboard menu work', async ({ page }) => {
  await page.goto('/solutions/custom-software');
  await page.getByRole('link', { name: 'Français', exact: true }).click();
  await expect(page).toHaveURL('/fr/solutions/custom-software');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Logiciels sur mesure');
  const trigger = page.getByRole('button', { name: 'Solutions', exact: true });
  await trigger.focus();
  await page.keyboard.press('Enter');
  await expect(trigger).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Tab');
  await expect(
    page.getByRole('link', { name: 'Explorer nos solutions', exact: true }),
  ).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  await expect(trigger).toBeFocused();
  await trigger.click();
  await page
    .locator('#solutions-menu')
    .getByRole('link', { name: /IA & Automatisation/ })
    .click();
  await expect(page).toHaveURL('/fr/solutions/ai-automation');
});
test('mobile menu, French layout, and media remain usable across screen sizes', async ({
  page,
}) => {
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of [
      '/',
      '/fr',
      '/fr/solutions',
      '/fr/contact',
      '/products/imaginai',
      '/fr/company/team',
    ]) {
      await page.goto(path);
      await page.evaluate(() => document.fonts.ready);
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
        `${width}px ${path} overflows`,
      ).toBe(true);
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/fr');
  const menu = page.getByRole('button', { name: 'Ouvrir le menu' });
  await menu.click();
  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'Réalisations', exact: true })
    .click();
  await expect(page).toHaveURL('/fr/work');
  await expect(page.getByRole('button', { name: 'Ouvrir le menu' })).toHaveAttribute(
    'aria-expanded',
    'false',
  );
  await page.goto('/');
  await page.locator('.ecosystem-product-grid .product-screen').first().scrollIntoViewIfNeeded();
  await expect(page.locator('.ecosystem-product-grid .product-screen').first()).toBeVisible();
  await expect
    .poll(() =>
      page
        .locator('.ecosystem-product-grid .product-screen img')
        .first()
        .evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0),
    )
    .toBe(true);
});
test('English homepage uses alternating surfaces and real product proof', async ({ page }) => {
  for (const width of [390, 751, 800, 849, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    await expect(page.locator('.home-english')).toHaveCount(1);
    await expect(page.locator('.ecosystem-product-grid .product-screen')).toHaveCount(2);
    await expect(page.locator('.ecosystem-feature')).toBeVisible();
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
    ).toBe(true);
    if (width >= 751 && width <= 1024) {
      const cardBounds = await page.locator('.home-problem-card').evaluateAll((cards) =>
        cards.map((card) => {
          const cardRect = card.getBoundingClientRect();
          const copyRect = card.querySelector('.home-problem-copy')!.getBoundingClientRect();
          return {
            cardLeft: cardRect.left,
            cardRight: cardRect.right,
            cardWidth: cardRect.width,
            copyLeft: copyRect.left,
            copyRight: copyRect.right,
            copyWidth: copyRect.width,
          };
        }),
      );
      expect(cardBounds).toHaveLength(3);
      for (const bounds of cardBounds) {
        expect(bounds.copyLeft).toBeGreaterThanOrEqual(bounds.cardLeft);
        expect(bounds.copyRight).toBeLessThanOrEqual(bounds.cardRight);
        expect(Math.abs(bounds.copyLeft - (bounds.cardLeft + 1))).toBeLessThanOrEqual(1);
        expect(Math.abs(bounds.copyWidth - (bounds.cardWidth - 2))).toBeLessThanOrEqual(1);
      }
    }
    expect(
      await page
        .locator('.home-band-light')
        .first()
        .evaluate((el) => getComputedStyle(el).backgroundColor),
    ).toBe('rgb(242, 247, 244)');
    await expect
      .poll(() =>
        page
          .locator('.ecosystem-product-grid .product-screen img')
          .first()
          .evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0),
      )
      .toBe(true);
  }
});
test('contact validates input and prepares a real email without claiming delivery', async ({
  page,
}) => {
  await page.goto('/contact');
  await page.getByRole('button', { name: 'Prepare my email' }).click();
  await expect(page.getByRole('status')).toHaveCount(0);
  await page.getByLabel('Your name').fill('Test Person');
  await page.keyboard.press('Escape');
  await expect(page.getByLabel('Your name')).toBeFocused();
  await page.getByLabel('Work email').fill('person@example.com');
  await page.getByLabel('Organization').fill('Demo & Co');
  await page.getByLabel('What can we help you with?').selectOption('Custom Software');
  await page
    .getByLabel('Tell us about your project')
    .fill('We would like to connect our internal tools.');
  await page.getByRole('button', { name: 'Prepare my email' }).click();
  await expect(page.getByRole('status')).toContainText('It has not been sent yet');
  const href = await page.getByRole('link', { name: 'Open my email app' }).getAttribute('href');
  expect(href).toContain('mailto:contact@synapsai.co?');
  expect(decodeURIComponent(href!)).toContain('Demo & Co');
  expect(decodeURIComponent(href!)).toContain('person@example.com');
  await page.getByLabel('Your name').fill('Updated Name');
  await expect(page.getByRole('status')).toHaveCount(0);
  await page.goto('/fr/contact');
  await expect(page.getByRole('button', { name: 'Préparer mon e-mail' })).toBeVisible();
});
test('key pages meet automated WCAG AA checks', async ({ page }) => {
  for (const path of [
    '/',
    '/fr',
    '/solutions',
    '/fr/solutions/ai-automation',
    '/products/imaginai',
    '/work/imaginai',
    '/faq',
    '/contact',
    '/fr/contact',
    '/company',
    '/company/team',
    '/fr/company/team',
  ]) {
    await page.goto(path);
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(
      results.violations,
      `${path}: ${JSON.stringify(results.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })))}`,
    ).toEqual([]);
  }
});
test('visual review captures and loaded assets', async ({ page }) => {
  const failed: string[] = [];
  page.on('response', (response) => {
    if (response.status() >= 400) failed.push(`${response.status()} ${response.url()}`);
  });
  for (const [name, path, width] of [
    ['home-desktop', '/', 1440],
    ['home-mobile', '/', 390],
    ['home-french-mobile', '/fr', 390],
    ['solutions-desktop', '/solutions', 1440],
    ['contact-mobile', '/fr/contact', 390],
    ['team-desktop', '/company/team', 1440],
    ['team-mobile', '/fr/company/team', 390],
  ] as const) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto(path);
    await page.evaluate(() => document.fonts.ready);
    await page.emulateMedia({ reducedMotion: 'reduce' });
    const images = page.locator('main img');
    for (const img of await images.all()) {
      await img.scrollIntoViewIfNeeded();
      await expect
        .poll(() => img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0))
        .toBe(true);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: `.qa/${name}.png`, fullPage: true });
    await page.screenshot({ path: `.qa/${name}-viewport.png`, fullPage: false });
    if (name === 'home-desktop') {
      await page
        .locator('.ecosystem-product-grid .product-screen')
        .first()
        .screenshot({ path: '.qa/product-frame.png' });
    }
  }
  expect(failed).toEqual([]);
});
test('dark surfaces and verified cofounders remain consistent in both languages', async ({
  page,
}) => {
  for (const path of ['/company/team', '/fr/company/team']) {
    await page.goto(path);
    await expect(page.locator('.team-card')).toHaveCount(3);
    for (const name of ['Frank Arnaud Yap', 'Youssouf Nchetkou Ndam', 'Steve Mekam Kontche'])
      await expect(page.getByRole('heading', { name, exact: true })).toBeVisible();
    expect(await page.evaluate(() => getComputedStyle(document.documentElement).colorScheme)).toBe(
      'dark',
    );
    expect(await page.evaluate(() => getComputedStyle(document.body).backgroundColor)).toBe(
      'rgb(1, 1, 2)',
    );
  }
  await page.goto('/fr/company');
  await page.locator('.company-nav').getByRole('link', { name: 'L’équipe', exact: true }).click();
  await expect(page).toHaveURL('/fr/company/team');
  await page.getByRole('link', { name: 'English', exact: true }).click();
  await expect(page).toHaveURL('/company/team');
});
test('FAQ, reduced motion, sitemap, and staging indexing controls', async ({ page, request }) => {
  await page.goto('/faq');
  const question = page.locator('.faq-list details').nth(1);
  await question.locator('summary').click();
  await expect(question).toHaveAttribute('open', '');
  await question.locator('summary').click();
  await expect(question).not.toHaveAttribute('open', '');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  expect(
    await page.locator('.flow-path').evaluate((el) => getComputedStyle(el).animationName),
  ).toBe('none');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.status()).toBe(200);
  expect(await sitemap.text()).not.toContain('<loc>');
  const robots = await request.get('/robots.txt');
  expect(await robots.text()).toContain('Disallow: /');
});
