import {Page, test} from '@playwright/test'
import { NavigationPage } from '../page-objects/navigation-page'
import { FormLayoutsPage } from '../page-objects/form-layouts-page'

export class PageManager{
    public readonly navigationPage: NavigationPage
    public readonly formLayoutsPage: FormLayoutsPage
    constructor(page: Page){
        this.navigationPage = new NavigationPage(page)
        this.formLayoutsPage = new FormLayoutsPage(page)
    }
}