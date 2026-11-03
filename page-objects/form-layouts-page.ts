import {Page} from "@playwright/test";
export class FormLayoutsPage{
    public readonly page: Page
    constructor(page: Page){
        this.page = page
    }
    async submitUsingTheGridForm(email: string, password: string, optionText: string){
        const usingtheGridForm = this.page.locator('nb-card:has-text("Using the Grid")')
        await usingtheGridForm.getByPlaceholder('Email').fill(email)
        await usingtheGridForm.getByPlaceholder('Password').fill(password)
        await usingtheGridForm.getByLabel(optionText, {exact: true}).check({force: true})
        await usingtheGridForm.getByRole('button', {name: 'Sign in'}).click()     
    }
    /**
     * This method submits the inline form with the provided full name, email, and remember me checkbox option.
     * @param fullName - valid test data for the full name field
     * @param email - valid test data for the email field
     * @param rememberMeCheckBox - pass true to check the "Remember me" checkbox, false to leave it unchecked
     */
    async submitInlineForm(fullName: string, email: string, rememberMeCheckBox: boolean){   
        const inlineForm = this.page.locator('nb-card:has-text("Inline form")')
        await inlineForm.getByRole('textbox',{name: 'Jane Doe'}).fill(fullName)
        await inlineForm.getByRole('textbox',{name: 'Email'}).fill(email)
        if (rememberMeCheckBox) {
            await inlineForm.getByLabel('Remember me').check({force: true})
        }
        await inlineForm.getByRole('button', {name: 'Submit'}).click()
    } 
}