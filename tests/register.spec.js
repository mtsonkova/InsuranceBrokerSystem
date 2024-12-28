import {test, expect} from '@playwright/test';
import { RegisterPage } from '../pageObjects/RegisterPage';

let registerPage;
test.describe('Registration tests', () => {
    test.beforeEach('Initial setup', async({page}) => {
        await page.goto('./register.php')
        registerPage = new RegisterPage(page);
    })
    test('Create new user', async() => {
       await registerPage.createNewUser(); 
    });

    test('Clear create new user form', async() => {
        await registerPage.clearCreateNewUserForm();
    })
})