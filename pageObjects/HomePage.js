import { BasePage } from "./BasePage";

class HomePage extends BasePage{
    constructor(page) {
        super(page);
        userName = 'h4';
        logoutBtn = 'input[type="submit"]';
        pageTitle = 'h2';
        this.menu = {
            home: '#home',
            requestQuotation: '#newquote',
            retrieveQuotation: '#retrieve',
            profile: '#profile',
            editProfile: '#editprofile',
        }
    }

    async logout() {
        await this.logoutBtn.click();
    }

    async checkPageTitle() {
        await this.verifyText(pageTitle, 'Broker Insurance WebPage');
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
    
}