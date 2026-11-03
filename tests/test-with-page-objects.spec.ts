import {test} from '@playwright/test'
import {PageManager} from '../page-objects/page-manager'
import {faker} from '@faker-js/faker'

test.beforeEach(async({page})=>{
    await page.goto('https://playground.bondaracademy.com/')
})
test('Navigate to form layouts page',async({page})=>{
    const pom = new PageManager(page)
    await pom.navigationPage.formLayoutsPage()
    await pom.navigationPage.datepickerPage()
    await pom.navigationPage.toasterPage()
    await pom.navigationPage.tooltipPage()
    await pom.navigationPage.smartTablePage()
})
test('Parameterized Page Object Methods',async({page})=>{
    const pom = new PageManager(page)
    
    const randomFullName = faker.person.fullName()
    const randomEmail = faker.internet.email({provider: 'example.com'})

    await pom.navigationPage.formLayoutsPage()
    //await formLayoutsPage.submitUsingTheGridForm('test@example.com', 'password123', 'Option 1')
    await pom.formLayoutsPage.submitUsingTheGridForm(randomEmail, 'password123', 'Option 2')
    await pom.formLayoutsPage.submitInlineForm(randomFullName, randomEmail, true)
})
