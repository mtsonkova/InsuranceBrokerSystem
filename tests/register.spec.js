import {test, expect} from '@playwright/test';
import { RegisterPage } from '../pageObjects/RegisterPage';

let registerPage;
test.describe('Registration tests', () => {
    test.beforeEach('Initial setup', ({page}) => {
        registerPage = new RegisterPage(page);
    })
    test('Create new user', async() => {
       await registerPage.createNewUser(); 
    });
})