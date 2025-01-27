import { RequestQuotationPage } from "../pageObjects/RequestQuotationPage";
import { LoginPage } from '../pageObjects/LoginPage';
import { HomePage } from '../pageObjects/HomePage';
import {email, password} from '../helpers/userData';
import {test, expect} from '@playwright/test';

let loginPage;
let homePage;
let requestQuotationPage;

test.describe('Request quatations tests', () => {
    test.beforeEach('Initial setup', async ({page}) => {

        await page.goto('./');
            loginPage = new LoginPage(page);
            homePage = new HomePage(page);
            requestQuotationPage = new RequestQuotationPage(page);

            await loginPage.login(email, password);
            await homePage.goToRequestQuotation();
    });

    test('Should create quatatui')

});
