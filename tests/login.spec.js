import {test, expect} from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage';
import { HomePage } from '../pageObjects/HomePage';
import {email, password} from '../helpers/userData';

let loginPage;
let homePage;

test.describe('Login Tests', () => {
test.beforeEach('Initial set up', async({page}) => {
    await page.goto('./');
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);

});
test('Should login successfully with valid credentials', {tag:['@sanity']}, async() => {
    await loginPage.login(email, password);    
});

test('Should logout successfully after login', {tag: ['@sanity']}, async() => {
    await loginPage.login(email, password);    
    await homePage.logout();
});

test('Should display error message when trying to login with wrong credentials', async() => {
    await loginPage.checkErrMsg(email);
});
})