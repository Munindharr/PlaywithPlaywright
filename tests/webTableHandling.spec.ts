import {test, expect, type Locator, type Page} from '@playwright/test';
test('Handling Web Table', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('table[name="BookTable"]');

    //Find the total number of columns in the table
    const totalColumns = await table.locator('th').count();
    console.log("Total number of columns in the table: " + totalColumns);

    //find the total number of rows in the table
    const totalRows = await table.locator('tr').count();
    console.log("Total number of rows in the table: " + totalRows);

    expect(totalColumns).toEqual(4);
    expect(totalRows).toEqual(7); 

    await page.close()
})
test('Selecting the single check box in Web Table', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('table[id="productTable"]');
    const columns = await table.locator('thead tr th').count();
    const rows = table.locator('tbody tr');

    const matchingRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch'
    })
    await matchingRow.locator('input').check();
    await page.pause();
    await page.close();
})
test('Selecting Multiple Check Boxes in Web Table using function', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('table[id="productTable"]');
    const columns = await table.locator('thead tr th').count();
    const rows = table.locator('tbody tr');
    await selectCheckBoxesInTable(rows, page, 'Smartwatch');
    await selectCheckBoxesInTable(rows, page, 'Smartphone');
    await selectCheckBoxesInTable(rows, page, 'Laptop');
    
    await page.pause();
    await page.close();
})
async function selectCheckBoxesInTable(rows: Locator, page: Page, productName: string) {
    const matchingRow = rows.filter({
        has: page.locator('td'),
        hasText: productName
    });
    await matchingRow.locator('input').check();
}


