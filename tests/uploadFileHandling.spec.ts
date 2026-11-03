import { expect, test } from '@playwright/test';

test('File Upload Handling - 1', async ({ page }) => {
  await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
  const uploadFile = await Promise.all([
    page.waitForEvent('filechooser'),
    page.locator('input[name="files[]"]').click()
  ])
  await uploadFile[0].setFiles(['tests/filestoUpload/test_1.png','tests/filestoUpload/test_2.png'])
  await page.waitForTimeout(5000);
  await page.close()
});

test.only('File Upload Handling - 2', async ({ page }) => {
  await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
  await page.setInputFiles('input[name="files[]"]', ['tests/filestoUpload/test_1.png', 'tests/filestoUpload/test_2.png']);
  await page.waitForTimeout(5000);
});