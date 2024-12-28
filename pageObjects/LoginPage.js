export class LoginPage extends BasePage{
    constructor(page) {
        super(page);
        loginForm = {
        email: '#email',
        password: '#password',
        btnLogin: 'input[type="Submit"]',
        errorMsg: 'span b'
        },
        btnRegister = 'a.btn';
    }

    async login(email, pass) {
        await this.fill(this.loginForm.email, email);
        await this.fill(this.loginForm.password, pass);
        await this.click(this.loginForm.btnLogin);
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