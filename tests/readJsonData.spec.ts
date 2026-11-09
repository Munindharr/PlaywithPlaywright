import  {test, expect} from '@playwright/test'
import credentials  from './testData/credentialsForLogin.json'

test('Read data from JSON file for valid and Invalid credentials',async({page})=>{
    for (const data of credentials) {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByPlaceholder('Username').fill(data.username)
    await page.getByPlaceholder('Password').fill(data.password)
    await page.getByRole('button', { name: ' Login ' }).click()
    if (data.expectedResult === "valid") {
            await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
            console.log(`Login successful for user: ${data.username}`)
            // Logout after successful login
            await page.locator('.oxd-userdropdown-tab').click()
            await page.getByRole('menuitem', { name: 'Logout' }).click()
    }else {
        await expect(page.getByText('Invalid credentials')).toBeVisible()
        console.log(`Login failed for user: ${data.username}`)
    }
}
})
