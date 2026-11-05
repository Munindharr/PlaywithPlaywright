import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playground.bondaracademy.com/');
  await page.getByRole('link', { name: 'Forms' }).click();
  await page.getByRole('link', { name: 'Form Layouts' }).click();
  await page.getByRole('textbox', { name: 'Jane Doe' }).fill('Munindhar');
  await page.locator('form').filter({ hasText: 'Remember meSubmit' }).getByPlaceholder('Email').fill('Ragilla');
  await page.locator('.custom-checkbox').first().click();
  await page.locator('form').filter({ hasText: 'Remember meSubmit' }).getByLabel('Remember me').check();
  await page.locator('form').filter({ hasText: 'Remember meSubmit' }).getByRole('button').click();
});