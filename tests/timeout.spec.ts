import {test, expect} from '@playwright/test'
test.beforeEach(async({page},testInfo)=>{
    await page.goto("https://playground.bondaracademy.com/")
    await page.getByText('Modal & Overlays').click();   
    await page.getByText('Dialog').click();
    testInfo.setTimeout(testInfo.timeout+3000)
})
test('Alternative Waits',async({page})=>{
    
    const dialogWithDelayForm = page.locator('nb-card',{hasText:'Open Dialog With Delay'})
    await dialogWithDelayForm.getByRole('button', {name:'Open with delay 3 seconds'}).click()
    const dialogContainer = page.locator('nb-dialog-container')

    await dialogContainer.getByRole('button',{name: 'OK'}).click()
})