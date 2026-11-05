import {test, expect, type Locator, type Page} from '@playwright/test';
test('Printing all items from page 1 from pagination', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    //find number of rows in the table
    const table = page.locator('table[id="productTable"]');
    
    const rows = table.locator('tbody tr');
    const totalRows = await rows.count();
    console.log("Total number of rows in the table: " + totalRows);

    //find number of columns in the table
    const columns = await table.locator('thead tr th').count();
    console.log("Total number of columns in the table: " + columns);

    for (let i = 0; i < totalRows; i++) {
        const row = rows.nth(i);
        const rowData = row.locator('td');
        for (let j = 0; j < await rowData.count(); j++) {
            const cellData = await rowData.nth(j).textContent();    
            console.log(cellData);
        }
    }
    await page.close()
})
test('Printing all items from all pages from pagination', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    //find number of rows in the table
    const table = page.locator('table[id="productTable"]');
    
    const rows = table.locator('tbody tr');
    const totalRows = await rows.count();
    console.log("Total number of rows in the table: " + totalRows);

    //find number of columns in the table
    const columns = await table.locator('thead tr th').count();
    console.log("Total number of columns in the table: " + columns);

    const pages = page.locator('#pagination li a');
    const totalPages = await pages.count();
    console.log("Total number of pages in the table: " + totalPages);

    for (let p = 0; p < totalPages; p++) 
    {
        if (p > 0) {
            await pages.nth(p).click();
        }
        for (let i = 0; i < totalRows; i++) 
        {
        const row = rows.nth(i);
        const rowData = row.locator('td');
            for (let j = 0; j < await rowData.count(); j++) 
            {
            const cellData = await rowData.nth(j).textContent();    
            console.log(cellData);
            }
        }
    }
await page.close();
})