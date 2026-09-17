import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('French Careers keeps the honest opportunity flow', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/fr/company/careers');
  await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
  await expect(page.locator('h1')).toContainText('Construire quelque chose');
  await expect(page.locator('main')).toContainText('Aucune candidature n’est envoyée');
  await expect(page.locator('a[href^="mailto:contact@synapsai.co"]')).toHaveCount(3);
  await expect(page.locator('a[href="/fr/products/imaginai-prof"]')).toHaveCount(0);
  expect(await page.locator('main img').count()).toBeGreaterThanOrEqual(5);

  const widthCheck = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  expect(widthCheck.scrollWidth).toBeLessThanOrEqual(widthCheck.clientWidth);
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
});
