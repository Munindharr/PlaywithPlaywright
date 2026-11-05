import { test, expect } from "@playwright/test";

test("Simple Alert Handling", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    
    page.on("dialog", async (alert) => {
        const alertText = alert.message();
        expect(alertText).toEqual("I am a JS Alert");
        await alert.accept();
        await expect(page.locator("#result")).toHaveText("You successfully clicked an alert");
    });
    await page.locator('button[onclick="jsAlert()"]').click();
    await page.close()
});
test("Confirmation Alert with Ok button ", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    
    page.on("dialog", async (alert) => {
        const alertText = alert.message();
        expect(alertText).toEqual("I am a JS Confirm");
        await alert.accept();
        await expect(page.locator("#result")).toHaveText("You clicked: Ok");
    });
    await page.locator('button[onclick="jsConfirm()"]').click();
    await page.close()
});
test("Confirmation Alert with Cancel button ", async ({ page }) => {
await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    
    page.on("dialog", async (alert) => {
        const alertText = alert.message();
        expect(alertText).toEqual("I am a JS Confirm");
        await alert.dismiss();
        await expect(page.locator("#result")).toHaveText("You clicked: Cancel");
    });
    await page.locator('button[onclick="jsConfirm()"]').click();
    await page.close()
});
test("PromptAlert with Text Input - Ok button ", async ({ page }) => {
await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
        page.on("dialog", async (alert) => {
        const alertText = alert.message();
        expect(alertText).toEqual("I am a JS Prompt");
        await alert.accept("playwright");
        await expect(page.locator("#result")).toHaveText("You entered: playwright");
    });
    await page.locator('button[onclick="jsPrompt()"]').click();
    await page.close()
});
test("PromptAlert with Text Input - Cancel button ", async ({ page }) => {
await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
        page.on("dialog", async (alert) => {
        const alertText = alert.message();
        expect(alertText).toEqual("I am a JS Prompt");
        await alert.dismiss();
        await expect(page.locator("#result")).toHaveText("You entered: null");
    });
    await page.locator('button[onclick="jsPrompt()"]').click();
    await page.close()
});

