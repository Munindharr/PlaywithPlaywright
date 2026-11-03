import test, { expect } from "@playwright/test";
test.beforeEach(async({page})=>{
    await page.goto("https://playground.bondaracademy.com/")
    await page.getByText('Forms').click();   
    await page.getByText('Form Layouts').click();
})
test('User Visible Locators',async({page})=>{
    await page.getByRole('button', {name: 'Sign in' }).first().click()
    await page.getByRole('textbox',{name:"Email"}).first().fill('test@12345.com')
    await page.getByLabel('Email').first().fill('test@abcde.com')
    await page.getByPlaceholder('Jane Doe').fill('Playwright testing')
    await page.getByText('Submit').first().click()
    await page.getByTestId('inputEmail').fill('test@test.com')
    await page.getByTitle('IoT Dashboard').click()
})
test('Locating Child Elements',async({page})=>{
    await page.locator('nb-card').locator('nb-radio-group').locator(':text-is("Option 1")').click()  
    await page.locator('nb-card nb-radio-group :text-is("Option 2")').click()  
    await page.locator('nb-card').getByRole('button', {name: 'Sign in' }).first().click()
})
test('Locating Parent Elements',async({page})=>{
    await page.locator('nb-card', {hasText: 'Using the Grid'}).getByRole('button').click();
    await page.locator('nb-card', {has: page.locator('#inputEmail1')}).getByRole('button').click();
    await page.locator('nb-card').filter({hasText: 'Using the Grid'}).getByRole('button').click();
})
test('Reusing the Locaters',async({page})=>{
    const basicFormSelection = page.locator('nb-card', { hasText: 'Basic form' })

    await basicFormSelection.getByLabel('Email').fill('test@test.com')
    await basicFormSelection.getByLabel('password').fill('testting12345')
    await basicFormSelection.locator('nb-checkbox').click()
    await basicFormSelection.getByRole('button').click()
})
test('Extracting Values',async({page})=>{
    const basicFormSelection = page.locator('nb-card', { hasText: 'Basic form' })
    const submitButtonText = await basicFormSelection.getByRole('button').textContent()
    console.log(submitButtonText)
    expect(submitButtonText).toEqual('Submit')
})
