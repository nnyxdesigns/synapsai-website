import { test, expect } from '@playwright/test';
import { publicPaths, published } from '../src/lib/site';
import { englishOnlyPaths } from '../src/lib/ecosystem';
import { insightPaths } from '../src/lib/insights';
import { buildSitemap } from '../src/lib/sitemap';

test('publication policy excludes staging and review routes from the sitemap', () => {
  expect(buildSitemap(false)).toEqual([]);
  const urls = buildSitemap(true).map((entry) => entry.url);
  expect(urls.length).toBe(new Set(urls).size);
  expect(urls).toContain('https://synapsai.co/products/imaginai-prof');
  expect(urls).not.toContain('https://synapsai.co/fr/products/imaginai-prof');
  expect(urls.filter((url) => url.startsWith('https://synapsai.co/insights/'))).toHaveLength(5);
  expect(urls.every((url) => url.startsWith('https://synapsai.co'))).toBe(true);
});

test('English SEO is complete in server HTML and social images resolve', async ({ request }) => {
  const titles = new Set<string>();
  const descriptions = new Set<string>();
  for (const path of [...publicPaths, ...englishOnlyPaths, ...insightPaths(false)]) {
    const response = await request.get(path, {
      headers: { 'user-agent': 'facebookexternalhit/1.1' },
    });
    expect(response.status(), path).toBe(200);
    const html = await response.text();
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
    expect(titles.has(title!), path).toBe(false);
    titles.add(title!);
    expect(descriptions.has(description!), path).toBe(false);
    descriptions.add(description!);
    expect((html.match(/<h1(?:\s|>)/g) || []).length, path).toBe(1);
    expect(html).toContain(`rel="canonical" href="https://synapsai.co${path === '/' ? '' : path}"`);
    for (const property of [
      'og:title',
      'og:description',
      'og:url',
      'og:site_name',
      'og:image',
      'og:image:alt',
    ])
      expect(html, `${path} ${property}`).toContain(`property="${property}"`);
    expect(html).toContain('name="twitter:card" content="summary_large_image"');
    const image = html.match(/property="og:image" content="([^"]+)"/)?.[1];
    expect(image).toMatch(/^https:\/\/synapsai.co\/media\//);
    const asset = await request.get(new URL(image!).pathname);
    expect(asset.status(), image).toBe(200);
    expect(asset.headers()['content-type']).toContain('image/png');
    for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g))
      expect(() => JSON.parse(match[1])).not.toThrow();
    if (!published) expect(html).toContain('noindex');
    expect(html).not.toContain('localhost:');
  }
});

test('staging sitemap, official icons, structured identity and redirects', async ({
  request,
  page,
}) => {
  const sitemap = await (await request.get('/sitemap.xml')).text();
  if (!published) expect(sitemap).not.toContain('<loc>');
  await page.goto('/');
  await expect(page.locator('.brand img').first()).toHaveAttribute(
    'src',
    '/media/brand/synapsai-logo.svg',
  );
  await expect(page.locator('link[rel="icon"]')).toHaveAttribute(
    'href',
    '/media/brand/favicon-32.png',
  );
  const schemas = await page
    .locator('script[type="application/ld+json"]')
    .evaluateAll((nodes) => nodes.map((node) => JSON.parse(node.textContent!)));
  expect(schemas.some((s) => s['@type'] === 'WebSite')).toBe(true);
  expect(schemas.find((s) => s['@type'] === 'Organization').logo).toBe(
    'https://synapsai.co/media/brand/synapsai-logo.svg',
  );
  for (const file of [
    '/favicon.ico',
    '/media/brand/favicon-32.png',
    '/media/brand/icon-180.png',
    '/manifest.webmanifest',
  ])
    expect((await request.get(file)).status()).toBe(200);
  const redirect = await request.get('/products.html', { maxRedirects: 0 });
  expect(redirect.status()).toBe(301);
  expect(redirect.headers().location).toBe('/products');
  expect((await request.get('/not-a-real-page')).status()).toBe(404);
  await page.screenshot({ path: '.qa/seo-brand-home-desktop.png' });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: '.qa/seo-brand-home-mobile.png' });
});
