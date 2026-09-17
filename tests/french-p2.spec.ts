import { test, expect } from '@playwright/test';

test.describe('French P2 conversion routes', () => {
  test('Impact keeps sourced milestones in French', async ({ page }) => {
    await page.goto('/fr/company/impact');
    await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
    await expect(page.locator('h1')).toContainText('Construire');
    await expect(page.locator('.impact-history li')).toHaveCount(5);
    await expect(page.locator('main')).toContainText('PROMEX');
    await expect(page.locator('main')).toContainText('CONIA');
    await expect(page.locator('a[href="/fr/work/imaginai"]')).toBeVisible();
  });

  test('FAQ keeps the localized questions and contact path', async ({ page }) => {
    await page.goto('/fr/faq');
    await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
    await expect(page.locator('h1')).toContainText('réponses');
    await expect(page.locator('details')).toHaveCount(5);
    await expect(page.locator('main a[href="/fr/contact"]')).toHaveCount(2);
  });

  test('contact prepares email without claiming delivery', async ({ page }) => {
    await page.goto('/fr/contact');
    await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
    await expect(page.locator('h1')).toContainText('construire');
    await expect(page.locator('main a[href^="mailto:"]')).toHaveAttribute(
      'href',
      'mailto:contact@synapsai.co',
    );
    await expect(page.locator('form')).toBeVisible();
    await expect(page.getByText(/message envoyé|bien reçu|merci pour votre message/i)).toHaveCount(
      0,
    );
  });
});
