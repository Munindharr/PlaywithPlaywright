import { test, expect } from "@playwright/test"
test("Check box Handling", async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html");
    const cricketCheckBox = page.locator("input[value='Cricket']");
    const moviesCheckBox = page.locator("input[value='Movies']");
    const hockeyCheckBox = page.locator("input[value='Hockey']");   

    // way 1 Assertion
    await expect(cricketCheckBox).not.toBeChecked();
    await expect(moviesCheckBox).not.toBeChecked();
    await expect(hockeyCheckBox).not.toBeChecked();

    //way 2 Assertion
    expect(await cricketCheckBox.isChecked()).toBeFalsy();
    expect(await moviesCheckBox.isChecked()).toBeFalsy();
    expect(await hockeyCheckBox.isChecked()).toBeFalsy();   

    await cricketCheckBox.check();
    await moviesCheckBox.check();
    await hockeyCheckBox.check();

    page.close()
})