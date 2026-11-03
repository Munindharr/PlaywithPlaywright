import {test, expect} from '@playwright/test'
test.beforeEach(async({page})=>{
    await page.goto('https://playground.bondaracademy.com/')
})
test.describe.only('Form Layouts Page',()=>{
    test.beforeEach(async({page})=>{
        await page.getByText('Forms').click()
        await page.getByText('Form Layouts').click()
    })
    test('Input fields',async({page})=>{
        const usingTheGridEmailInput = page.locator('nb-card',{hasText:'Using the Grid'}).getByRole('textbox', {name: 'Email'})
        await usingTheGridEmailInput.fill('munindhat@test.com') //clear and enters the vaule in it
        await usingTheGridEmailInput.clear()
        await usingTheGridEmailInput.pressSequentially('munindhar@gmail.com', {delay:500})

        //extract the value
        const inputValue = await usingTheGridEmailInput.inputValue();

        //assertions - exact match
        await expect(usingTheGridEmailInput).toHaveValue('munindhar@gmail.com')
        
        //assertions - partial match
        await expect(usingTheGridEmailInput).toHaveValue(/gmail.com/)
    })
    test('radio buttons',async({page})=>{
        const usingTheGridForm = page.locator('nb-card',{hasText:'Using the Grid'})
        //using getByLabel
        await usingTheGridForm.getByLabel('Option 1').click({force: true})
        //using getByRole
        await usingTheGridForm.getByRole('radio',{name:'Option 2'}).click({force: true})

        const radioStatus = await usingTheGridForm.getByRole('radio',{name:'Option 2'}).isChecked()
        expect(radioStatus).toBeTruthy()

        await expect(usingTheGridForm.getByRole('radio',{name:'Option 2'})).toBeChecked();
        await expect(usingTheGridForm.getByRole('radio',{name:'Option 1'})).not.toBeChecked();
    })   
})
test('check boxes',async({page})=>{
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Toastr').click()

    await page.getByRole('checkbox',{name: 'Hide on click'}).check({force: true})
    await page.getByRole('checkbox',{name: 'Hide on click'}).uncheck({force: true})
})
test('List and drop downs',async({page})=>{
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Toastr').click()
    //standard drop down
    await page.locator('.form-group',{hasText:'Toast type:'}).getByRole('combobox').selectOption('info')

    //custom dropdown
    await page.locator('.form-group',{hasText:'Position:'}).locator('nb-select').click()

    //Option-1
    await page.getByRole('list').getByText('bottom-end').click()

    //looping the entire list
    const positionDropDownField = page.locator('.form-group',{hasText:'Position:'}).locator('nb-select')
    await positionDropDownField.click()

    const allValuesList = await page.locator('nb-option').allTextContents()
    for(let listValues of allValuesList){
        await page.locator('nb-option',{hasText:listValues}).click()
        await expect(positionDropDownField).toHaveText(listValues)
        await positionDropDownField.click()
    }
})
test('tool tips',async({page})=>{
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Tooltip').click() 

    await page.getByRole('button',{name: 'Top'}).hover()
    const toolTipText = await page.getByRole('tooltip').textContent()
    console.log(toolTipText)
    await expect(page.getByRole('tooltip')).toHaveText('This is a tooltip')
})
test('dialog boxes',async({page})=>{
    await page.getByText('Tables & Data').click()
    await page.getByText('Smart Table').click()

    page.on('dialog', dialog=>{
        expect(dialog.message()).toEqual('Are you sure you want to delete?')
        dialog.accept()
    })
    await page.locator('tr', {hasText:'mdo@gmail.com'}).locator('.nb-trash').click()
    await expect(page.locator('tr',{hasText:'mdo@gmail.com'})).not.toBeVisible()
})
test('Sliders test',async({page})=>{
    const tempGauge = page.locator('[tabtitle="Temperature"] ngx-temperature-dragger circle')
    await tempGauge.evaluate(element=>{
        element.setAttribute('cx','232.630')
        element.setAttribute('cy','232.630')
    })
    await tempGauge.click()
})
test('iFrams',async({page})=>{
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Dialog').click()
    const frameLocator = page.frameLocator('[data-cy="esc-close-iframe"]')
    await frameLocator.getByRole('button',{name:'Open Dialog with esc close'}).click()
})
test('drag and drop',async({page})=>{
await page.getByText('Extra Components').click()
    await page.getByText('Drag & Drop').click()
    await page.getByText(' Feed the dog ').dragTo(page.locator('#drop-list'))
})