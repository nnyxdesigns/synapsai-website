import { test, expect } from '@playwright/test';
import { published } from '../src/lib/site';
import { buildSitemap } from '../src/lib/sitemap';

test('Hosting serves index policy, cache headers, real 404s and existing French HTML', async ({
  request,
  page,
}) => {
  const home = await request.get('/');
  expect(home.status()).toBe(200);
  expect(home.headers()['x-content-type-options']).toBe('nosniff');
  expect(home.headers()['x-frame-options']).toBe('DENY');
  expect(home.headers()['cache-control']).toContain('max-age=0');
  const html = await home.text();
  expect(html).toContain(published ? 'content="index, follow"' : 'content="noindex, nofollow"');
  const js = html.match(/src="([^" ]+\.js)"/)![1];
  expect((await request.get(js)).headers()['cache-control']).toContain('immutable');
  const robots = await (await request.get('/robots.txt')).text();
  expect(robots).toContain(published ? 'Allow: /' : 'Disallow: /');
  const sitemap = await (await request.get('/sitemap.xml')).text();
  expect((sitemap.match(/<loc>/g) || []).length).toBe(buildSitemap(published).length);
  for (const path of ['/fr', '/fr/contact']) {
    const res = await request.get(path);
    expect(res.status()).toBe(200);
    expect(await res.text()).toContain('<html lang="fr">');
  }
  expect((await request.get('/fr/not-a-real-page')).status()).toBe(404);
  await page.goto('/not-a-real-page');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('This page doesn’t exist.');
  await page.getByRole('link', { name: 'Back to home' }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('.brand img').first()).toBeVisible();
  await page.screenshot({ path: '.qa/hosting-home-desktop.png' });
});
