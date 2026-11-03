import {test, expect, type Page} from '@playwright/test'
test.describe('Suite',()=>{
    test.beforeAll(async()=>{
        console.log('Database connection setup')
    })
    test.beforeEach(async()=>{
        console.log('Clearing cookies')
    })
    test.afterEach(async()=>{
        console.log('Cache removal')
    })
    test.afterAll(async()=>{
        console.log('Database Disconnect')
    })
    test('Demo  in side grouping',async({page})=>{
    console.log('I AM INSIDE GROUPING')
})
})
test('Demo',async({page})=>{
    console.log('DEMO OF GROUPING')
})
