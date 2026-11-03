import { expect, test } from '@playwright/test';

test('TextBox Handling', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  //await page.locator('input[placeholder="Username"]').pressSequentially('admin');
  await page.locator('input[placeholder="Username"]').pressSequentially('admin',{delay: 200});
  //await page.locator('input[placeholder="Password"]').pressSequentially('admin123');
  await page.locator('input[placeholder="Password"]').pressSequentially('admin123',{delay: 200});
  await page.locator('button[type="submit"]').click();
  await page.locator('.oxd-userdropdown-tab').click();
  await page.locator('text=Logout').click();
  await page.close();
});