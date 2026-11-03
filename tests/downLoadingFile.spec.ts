import {test, expect } from '@playwright/test';
test('File Download Handling', async ({page}) => {
    await page.goto('https://demo.automationtesting.in/FileDownload.html')
    await page.locator('#textbox').pressSequentially('This is a sample text for file download testing');
    await page.locator('#createTxt').click();

    const downloadedFile = await Promise.all([
        page.waitForEvent('download'),
        page.locator('#link-to-download').click()
    ]);
    const path = await downloadedFile[0].path();
    console.log("Downloaded file path: " + path);

    //Way - 1 Using default file name in root folder of playwright with infor.txt -- see left side
    const fileName = downloadedFile[0].suggestedFilename();
    await downloadedFile[0].saveAs(fileName);

    //Way - 2 Customizing the file name in root folder of playwright with Playwright_download_file.txt -- see left side
    const customizedFileName = "Playwright_download_file"
    await downloadedFile[0].saveAs(customizedFileName);
})