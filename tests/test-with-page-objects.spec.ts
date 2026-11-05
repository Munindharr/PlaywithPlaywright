import {test} from '../fixture_1'
import {faker} from '@faker-js/faker'

/*test.beforeEach(async({page})=>{
    await page.goto('https://playground.bondaracademy.com/')
})*/
test('Navigate to form layouts page',{tag: '@smoke'},async({pom})=>{
    await pom.navigationPage.formLayoutsPage()
    await pom.navigationPage.datepickerPage()
    await pom.navigationPage.toasterPage()
    await pom.navigationPage.tooltipPage()
    await pom.navigationPage.smartTablePage()
})
test('Parameterized Page Object Methods',async({pom})=>{
    
    const randomFullName = faker.person.fullName()
    const randomEmail = faker.internet.email({provider: 'example.com'})

    await pom.navigationPage.formLayoutsPage()
    //await formLayoutsPage.submitUsingTheGridForm('test@example.com', 'password123', 'Option 1')
    await pom.formLayoutsPage.submitUsingTheGridForm(randomEmail, 'password123', 'Option 2')

    //await page.waitForTimeout(2000) // Wait for 2 seconds to observe the result
    //await page.screenshot({path: 'screenshot/formLayoutsPage.png', fullPage: true}) //screenshot of the page after form submission

    await pom.formLayoutsPage.submitInlineForm(randomFullName, randomEmail, true)
    //await page.locator('nb-card:has-text("Inline form")').screenshot({path: 'screenshot/inlineForm.png'})//screen of specific element after form submission
})