import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const p0Routes = [
  '/fr',
  '/fr/solutions',
  '/fr/solutions/ai-automation',
  '/fr/solutions/custom-software',
  '/fr/solutions/web-mobile-development',
  '/fr/solutions/digital-transformation',
];

test.describe('French P0 rollout', () => {
  for (const route of p0Routes) {
    test(`${route} keeps the French structure usable`, async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      const response = await page.goto(route);
      expect(response?.status(), route).toBe(200);
      await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
      await expect(page.locator('h1')).toHaveCount(1);
      const widthCheck = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }));
      expect(widthCheck.scrollWidth, `${route} overflows horizontally`).toBeLessThanOrEqual(
        widthCheck.clientWidth,
      );
      await expect(page.locator('a[href^="/fr"]').first()).toBeVisible();

      const results = await new AxeBuilder({ page }).include('main').analyze();
      expect(results.violations, JSON.stringify(results.violations)).toEqual([]);
    });
  }

  test('solution pages expose the four approved French offers', async ({ page }) => {
    for (const [route, title] of [
      ['/fr/solutions/ai-automation', 'IA & Automatisation'],
      ['/fr/solutions/custom-software', 'Logiciels sur mesure'],
      ['/fr/solutions/web-mobile-development', 'Produits web & mobile'],
      ['/fr/solutions/digital-transformation', 'Transformation digitale'],
    ]) {
      await page.goto(route);
      await expect(page.locator('h1')).toContainText(title);
    }
  });
});
