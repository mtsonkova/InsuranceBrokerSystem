import { BasePage } from "./BasePage";
import { expect } from "@playwright/test";

export class LoginPage extends BasePage{
    constructor(page) {
        super(page);
        this.loginForm = {
        email: '#email',
        password: '#password',
        btnLogin: 'input[type="Submit"]',
        errorMsg: 'span b'
        },
        this.btnRegister = 'a.btn';
    }

    async login(email, pass) {
        await this.fill(this.loginForm.email, email);
        await this.fill(this.loginForm.password, pass);
        await this.click(this.loginForm.btnLogin);
        await expect(this.page.url()).toBe('https://demo.guru99.com/insurance/v3/header.php');
    }

    async checkErrMsg(email) {
        await this.fill(this.loginForm.email, email);
        await this.fill(this.loginForm.password, '');
        await this.click(this.loginForm.btnLogin);
        await this.verifyText(this.loginForm.errorMsg, 'Enter your Email address and password correct');
    }

    async clickOnRegister() {
        await this.click(this.btnRegister);
    }
}