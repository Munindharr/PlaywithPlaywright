import {test, expect} from '@playwright/test';
test('Drag and Drop Handling #1', async ({page}) => {
    await page.goto('https://playground.bondaracademy.com/pages/extra-components/drag-drop');
    await page.getByText('Extra Components').click();
    await page.getByText('Drag & Drop').click();

    await page.getByText(' Clean my room ').dragTo(page.locator('#drop-list'));
    await page.pause();
    await page.close()
})
test('Drag and Drop Handling #2', async ({page}) => {
    await page.goto('https://playground.bondaracademy.com/pages/extra-components/drag-drop');
    await page.getByText('Extra Components').click();
    await page.getByText('Drag & Drop').click();

    await page.getByText(' Clean my room ').dragTo(page.locator('#drop-list'));

    await page.getByText(' Hangout with friends ').hover();
    await page.mouse.down();

    await page.locator('#drop-list').hover();
    await page.mouse.up();  


    await page.pause();
    await page.close()
})
