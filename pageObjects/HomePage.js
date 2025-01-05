import { BasePage } from "./BasePage";

export class HomePage extends BasePage{
    constructor(page) {
        super(page);
        this.homeHeader= {
        userName:'h4',
        logoutBtn:'input[type="submit"]',
        }
        this.homeFooter = {
            pageTitle: 'h2',
        }
       
        this.menu = {
            home: '#home',
            requestQuotation: '#newquote',
            retrieveQuotation: '#retrieve',
            profile: '#profile',
            editProfile: '#editprofile',
        }
    }

    async logout() {
        await this.click(this.homeHeader.logoutBtn);
    }

    async checkPageTitle() {
        await this.verifyText(this.homeFooter.pageTitle, 'Broker Insurance WebPage');
    }

    async goToHome() {
        await this.menu.home.click();
    }

    async goToRequestQuotation() {
        await this.menu.requestQuotation.click();
    }

    async goToRetrieveQuotaion() {
        await this.menu.retrieveQuotation.click();         
    }

    async goToProfile(){
        await this.menu.profile.click();
    }

    async goToEditProfile() {
        await this.menu.editProfile.click();
    }

    async checkUserName() {
        await expect(this.homeHeader.userName.textContent()).not.to.Be(' ');
    }
    
}