import {test, expect} from '@playwright/test';
test('Single Tab Handling', async ({page}) => {
    await page.goto('https://demo.automationtesting.in/Windows.html');
    const [newTabButton] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('button:has-text("click")') 
    ])
    await newTabButton.waitForLoadState();
    await newTabButton.locator('.DocSearch-Button-Placeholder').click();
    await newTabButton.locator('#docsearch-input').fill('Locator Strategies' );
    //await newTabButton.waitForTimeout(5000);
    await newTabButton.close();
})
test('Single Window Handling', async ({page}) => {
    await page.goto('https://demo.automationtesting.in/Windows.html');
    await page.locator('.analystic[href="#Seperate"]').click();

    const [newWindow] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('button[onclick="newwindow()"]').click()
    ])
    await newWindow.waitForLoadState();
    await newWindow.locator('.DocSearch-Button-Placeholder').click();
    await newWindow.locator('#docsearch-input').fill('Locator Strategies' );
    //await newWindow.waitForTimeout(5000);
    await newWindow.close();
})
test('Multiple Tab Handling', async ({page}) => {
    await page.goto('https://demo.automationtesting.in/Windows.html');

    await page.locator('.analystic[href="#Multiple"]').click();
    const [multiTab] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('button[onclick="multiwindow()"]') 
    ])
    await multiTab.waitForLoadState();
    const pages = multiTab.context().pages();
    await pages[1].locator('#email').fill('rag.muni@gmail.com');
    await multiTab.waitForTimeout(5000);

    
    await pages[2].locator('.DocSearch-Button-Placeholder').click();
    await pages[2].locator('#docsearch-input').fill('Locator Strategies' );
    //await pages[2].waitForTimeout(5000);
    await pages[2].close();

})