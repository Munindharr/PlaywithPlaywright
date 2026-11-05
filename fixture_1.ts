import {test as base} from '@playwright/test'
import { PageManager } from './page-objects/page-manager'

type FixturesTypes = {
    pom: PageManager
}

export const test = base.extend<FixturesTypes>({
    pom: async ({page}, use) => {
        await page.goto('https://playground.bondaracademy.com/')
        const manager = new PageManager(page)
        await use(manager)
    }   
})