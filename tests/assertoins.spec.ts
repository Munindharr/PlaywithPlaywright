import { test, expect } from "@playwright/test";
test.beforeEach(async({page})=>{
    await page.goto("https://playground.bondaracademy.com/")
    await page.getByText('Forms').click();   
    await page.getByText('Form Layouts').click();
})
test('Assertions demo',async({page})=>{

    // generic assertions
    const value =5
    expect(value).toEqual(5) // hover the mouse on this method to check it is generic assertion

    const basicFormSelection = page.locator('nb-card', { hasText: 'Basic form' }).getByRole('button')
    const submitButtonText = await basicFormSelection.textContent()
    console.log(submitButtonText)
    expect(submitButtonText).toEqual('Submit') // value of the left is checked with right

    //locator assertions
    await expect(basicFormSelection).toHaveText('Submit')//locator is getst checked -  hover the mouse on this method to check it is generic assertion

    //soft assertoins
    await expect.soft(basicFormSelection).toHaveText('Submit')// allows to continue your execution even it fails
    await basicFormSelection.click();
})
