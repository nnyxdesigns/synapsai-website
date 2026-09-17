import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('French Insights index exposes the adapted article and Press tabs', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/fr/insights');
  await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
  await expect(page.locator('h1')).toHaveText('Insights.');
  await expect(page.getByRole('tab', { name: 'Tout' })).toHaveAttribute('aria-selected', 'true');
  await expect(page.getByRole('tab', { name: 'Presse' })).toBeVisible();
  await expect(page.locator('.locale-switch')).toContainText('FR');
  await expect(page.locator('main')).toContainText('L’IA pour l’Afrique');
  await expect(page.locator('main')).toContainText('Interviews et apparitions');
  expect(await new AxeBuilder({ page }).include('main').analyze()).toMatchObject({
    violations: [],
  });
});

test('French context article keeps source links and localized sharing', async ({ page }) => {
  await page.goto('/fr/insights/ai-for-africa-designed-for-context-not-just-translated');
  await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
  await expect(page.locator('h1')).toContainText('L’IA pour l’Afrique');
  await expect(page.locator('main')).toContainText('À retenir');
  await expect(page.locator('main')).toContainText('Communauté de recherche Masakhane');
  await expect(page.locator('a[href="/fr/products/imaginai"]')).toBeVisible();
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    /\/fr\/insights\/ai-for-africa-designed-for-context-not-just-translated$/,
  );
});

test('English Insights exposes the French switch where the translation exists', async ({
  page,
}) => {
  await page.goto('/insights');
  await expect(page.locator('.locale-switch')).toContainText('FR');
  await page.goto('/insights/ai-for-africa-designed-for-context-not-just-translated');
  await expect(page.locator('.locale-switch')).toContainText('FR');
});
