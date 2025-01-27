import {expect} from '@playwright/test';

export class BasePage{
    constructor(page) {
        this.page = page;
    }

    async click(selector, page = this.page) {
        await page.click(selector);
    }

    async check(selector, page = this.page) {
        await page.check(selector);
    }
    async fill(selector, text, page = this.page) {
        await page.fill(selector, text);
    }

    async check(selector, page = this.page) {
        await page.locator(selector).check();
    }

    async selectOptionInDropdown(selector, value, page= this.page) {
        let element = page.locator(selector);
        await element.selectOption(value);
    }

    async verifyText(selector, text, page=this.page) {
        await expect(page.locator(selector)).toHaveText(text);
    }
}