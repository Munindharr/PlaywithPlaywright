import {test, expect} from '@playwright/test'
test.beforeEach(async({page})=>{
    await page.goto("https://playground.bondaracademy.com/")
    await page.getByText('Modal & Overlays').click();   
    await page.getByText('Dialog').click();
})

test('Auto waiting test - chat gpt corrected code', async ({ page }) => {

    const dialogWithDelayForm = page.locator('nb-card', {
        hasText: 'Open Dialog With Delay'
    });

    await dialogWithDelayForm
        .getByRole('button', { name: 'Open with delay 3 seconds' })
        .click();

    const dialogContainer = page.locator('nb-dialog-container');

    // Wait for dialog header and verify it
    const dialogHeader = dialogContainer.locator('nb-card-header');

    await expect(dialogHeader).toHaveText('Friendly reminder');

    // Now click OK
    await dialogContainer.getByRole('button', { name: 'OK' }).click();

});

test('Alternative Waits',async({page})=>{
    const dialogWithDelayForm = page.locator('nb-card',{hasText:'Open Dialog With Delay'})
    await dialogWithDelayForm.getByRole('button', {name:'Open with delay 3 seconds'}).click()
    const dialogContainer = page.locator('nb-dialog-container')

    await expect(dialogContainer.locator('nb-card-header')).toHaveText('Friendly reminder')
})