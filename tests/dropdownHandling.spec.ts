import { test, expect } from "@playwright/test"
test("Single static dropdown Handling", async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.selectOption("#Skills", {
        value: "Android"
    })
        await page.pause()
        await page.selectOption("#Skills", {
        value: "Art Design"
    })
        await page.pause()
        await page.selectOption("#Skills", {
        index: 7
    })
    page.close()
})

test("Multi static dropdown Handling", async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.selectOption("#multi-select", [
        {value: "California"},
        {label: "Florida"},
        {index: 3}
    ])
    await page.pause()
    await page.close()
})
test("Searchable dynamic dropdown", async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.locator('span[role="combobox"]').click();
    await page.locator('input[role="textbox"]').fill("India");
    await page.locator('ul#select2-country-results>li').click();
    await page.waitForTimeout(7000)
    await page.close()
})
test("Non Searchable dynamic dropdown", async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.locator('span[role="combobox"]').click();
    await page.locator('ul#select2-country-results')
    .locator('li', { hasText: 'India' }).click();
    await page.waitForTimeout(7000)
    await page.close()
    await page.close()
})