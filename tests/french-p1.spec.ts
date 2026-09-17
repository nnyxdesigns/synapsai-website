import { test, expect } from '@playwright/test';

const p1Routes = [
  '/fr/products',
  '/fr/products/imaginai',
  '/fr/work',
  '/fr/work/imaginai',
  '/fr/company',
  '/fr/company/about',
  '/fr/company/team',
];

test.describe('French P1 rollout', () => {
  for (const route of p1Routes) {
    test(`${route} renders a usable localized page`, async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      const response = await page.goto(route);
      expect(response?.status(), route).toBe(200);
      await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('main')).toBeVisible();

      const widthCheck = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }));
      expect(widthCheck.scrollWidth, `${route} overflows horizontally`).toBeLessThanOrEqual(
        widthCheck.clientWidth,
      );
    });
  }

  test('French product and work pages explain the connected ImaginAi ecosystem', async ({
    page,
  }) => {
    await page.goto('/fr/products');
    await expect(page.locator('main')).toContainText('apprenants');
    await expect(page.locator('main')).toContainText('enseignants');
    await page.goto('/fr/work/imaginai');
    await expect(page.locator('main')).toContainText('ImaginAi');
    await expect(page.locator('main')).toContainText('intelligence artificielle');
  });
});
