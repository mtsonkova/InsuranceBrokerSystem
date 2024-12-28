import {expect} from '@playwright/test';

export class BasePage{
    constructor(page) {
        this.page = page;
    }

    async click(locator, page = this.page) {
        await page.click(locator);
    }

    async fill(locator, page = this.page, text) {
        await page.fill(locator, text);
    }

    async check(locator, page = this.page) {
        await page.locator(locator).check();
    }

    async selectOptionInDropdown(locator, page= this.page, value) {
        let element = page.locator(locator);
        await element.selectOption(value);
    }

    async verifyText(locator, page=this.page, text) {
        await expect(page.locator(locator)).toHaveText(text);
    }
}