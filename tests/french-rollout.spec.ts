import { test, expect } from '@playwright/test';
import { englishOnlyPaths } from '../src/lib/ecosystem';

test('French rollout gate keeps English-only routes unavailable until their copy is approved', async ({
  request,
  page,
}) => {
  const routes = [...englishOnlyPaths];
  for (const route of routes) {
    const response = await request.get(`/fr${route}`);
    expect(response.status(), `/fr${route}`).toBe(404);
  }
  await page.goto('/company/careers');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('link[hreflang="fr"]')).toHaveAttribute(
    'href',
    /\/fr\/company\/careers$/,
  );
  await page.goto('/company/impact');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('link[hreflang="fr"]')).toHaveAttribute(
    'href',
    /\/fr\/company\/impact$/,
  );
  await page.goto('/fr/company/impact');
  await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
  await page.goto('/fr/insights');
  await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
  await page.goto('/fr/insights/ai-for-africa-designed-for-context-not-just-translated');
  await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
});
