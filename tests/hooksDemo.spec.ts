import {test, expect} from '@playwright/test'   

test.beforeAll(async()=>{
    console.log('This is Before all Hook')
})
test.beforeEach(async()=>{
    console.log('This is Before each Hook')
})
test.afterEach(async()=>{
    console.log('This is After each Hook')
})
test.afterAll(async()=>{
    console.log('This is After all Hook')
})
test('Demo of Hooks',async()=>{
    console.log('This is a Test block ')
})