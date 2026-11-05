import {test as base} from '@playwright/test'

type MyFixtures = {
    helloWorld: any
    greatDay: any
}
export const test = base.extend<MyFixtures>({
    helloWorld: async ({}, use) => {
        console.log('Hello, World!')
        await use()
    },
    greatDay: async ({}, use) => {
        console.log('Good Bye, World!')
        await use()
    }
})