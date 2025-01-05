import {test, expect} from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage';
import {email, password} from '../helpers/userData';

let loginPage;

test.describe('Login Tests', () => {
test.beforeEach('Initial set up', async({page}) => {
    await page.goto('./');
    loginPage = new LoginPage(page);
});
test('Should login successfully with valid credentials', {tag:['@sanity']}, async() => {
    await loginPage.login(email, password);    
});

test('Should display error message when trying to login with wrong credentials', async() => {
    await loginPage.checkErrMsg(email);
});
})