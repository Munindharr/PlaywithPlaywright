import test from "@playwright/test";
test.beforeEach(async({page})=>{
    await page.goto("https://playground.bondaracademy.com/")
    await page.getByText('Forms').click();   
})
test('Locator syntax rules',async({page})=>{
    //find by tag
    page.locator('input')

    //find by id
    page.locator('#inputEmail1')

    //find by class value
    page.locator('.shape-rectangle')
    
    //find by attribute
    page.locator('[placeholder="Email"]')

    //find by full class value
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

    //find by several selectors
    page.locator('input[placeholder="Email"][nbinput]')

    //find by X path
    page.locator('//*[@id="inputAEmail1"]')

    //find by partial match
    page.locator(':text("Using")')

    //find by partial match
    page.locator(':text-is("Using the Grid")')
})