export class LoginPage extends BasePage{
    constructor(page) {
        super(page);
        loginForm = {
        email: '#email',
        password: '#password',
        btnLogin: 'input[type="Submit"]',
        errorMsg: 'span b'
        }
    }

    async login(email, pass) {
        await this.fill(this.email, email);
        await this.fill(this.password, pass);
        await this.click(this.btnLogin);
    }

    async checkErrMsg(email) {
        await this.fill(this.email, email);
        await this.fill(this.password, '');
        await this.click(this.btnLogin);
        await this.verifyText(this.errorMsg, 'Enter your Email address and password correct');
    }
}