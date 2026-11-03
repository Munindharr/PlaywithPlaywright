import {test, expect} from '@playwright/test'
test.beforeEach(async({page})=>{
    await page.goto("https://playground.bondaracademy.com/")
    await page.getByText('Modal & Overlays').click();   
    await page.getByText('Dialog').click();
})
test('Auto waiting test',async({page})=>{
    const dialogWithDelayForm = page.locator('nb-card',{hasText:'Open Dialog With Delay'})
    await dialogWithDelayForm.getByRole('button', {name:'Open with delay 3 seconds'}).click()

    const dialogContainer = page.locator('nb-dialog-container')
    // see the milliseconds in the below step - it will take more than 3 sec but it will wait
    // reason as per playwright document click() method is auto waiting
    await dialogContainer.getByRole('button',{name: 'OK'}).click(); //3852 ms

    //alltextContent() method does not wait - no autowait - see the playwright documentation
    const dialogHeaderText = await dialogContainer.locator('nb-card-header').textContent() //no autowaiting 
    //const dialogHeaderText = await dialogContainer.locator('nb-card-header').allTextContents()//no autowaiting 
    expect(dialogHeaderText).toEqual('Friendly reminder')
})
test('Alternative Waits',async({page})=>{
    const dialogWithDelayForm = page.locator('nb-card',{hasText:'Open Dialog With Delay'})
    await dialogWithDelayForm.getByRole('button', {name:'Open with delay 3 seconds'}).click()
    const dialogContainer = page.locator('nb-dialog-container')

    await expect(dialogContainer.locator('nb-card-header')).toHaveText('Friendly reminder')
})