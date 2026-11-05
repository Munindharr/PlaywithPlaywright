import { test, expect } from "@playwright/test";
test.beforeEach(async({page})=>{
    await page.goto("https://playground.bondaracademy.com/")
    await page.getByText('Forms').click();   
})
test('this is a first test',async({page})=>{
    await page.getByText('Form Layouts').click();
})
test('this is a first test to date picker',async({page})=>{
    await page.getByText('Datepicker').click();
})
