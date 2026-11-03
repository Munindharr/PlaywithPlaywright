    import { Page } from "@playwright/test";
    export class NavigationPage{
        public page: Page
        constructor(page: Page){
            this.page = page
        }
        async formLayoutsPage(){
            await this.selectGroupMenuItem('Forms')
            await this.page.getByText('Form Layouts').click()
        }
        async datepickerPage(){
            await this.selectGroupMenuItem('Forms')
            await this.page.waitForTimeout(3000)
            await this.page.getByText('Datepicker').click()
        }
        async toasterPage(){
            await this.page.getByText('Modal & Overlays').click()
            await this.page.getByText('Toastr').click()
        }
        async tooltipPage(){
            await this.page.getByText('Modal & Overlays').click()
            await this.page.getByText('Tooltip').click()
        }   
        async smartTablePage(){
            await this.page.getByText('Tables & Data').click()
            await this.page.getByText('Smart Table').click()
        }
        public async selectGroupMenuItem(groupMenuTitle: string){
            const groupMenuItem = this.page.getByTitle(groupMenuTitle)
            const expandedState = await groupMenuItem.getAttribute('aria-expanded')
            if(expandedState === 'false'){
                await groupMenuItem.click()
            }
        }
    }