import { BasePage } from './BasePage';
import {email, password} from '../helpers/userData';
import {expect} from '@playwright/test';

export class RegisterPage extends BasePage{
    constructor(page) {
        super(page);
        this.SignUpForm = {
            titleDropdown: '#user_title',
            firstName: '#user_firstname',
            surName: '#user_surname',
            phone: '#user_phone',
            dateOfBirth: {
            yearDropdown: '#user_dateofbirth_1i',
            monthDropdown: '#user_dateofbirth_2i',
            dayDropdown: '#user_dateofbirth_3i',
            },
            license : {
            full: '#licencetype_t',
            provisional: '#licencetype_f',
            },
            licencePeriodDropdown: '#user_licenceperiod',
            occupationDropdown: '#user_occupation_id',
            address: {
                street: '#user_address_attributes_street',
                city: '#user_address_attributes_city',
                county: '#user_address_attributes_county',
                postCode: '#user_address_attributes_postcode',                
            },
            email: '#user_user_detail_attributes_email',
            password: '#user_user_detail_attributes_password',
            confirmPassword: '#user_user_detail_attributes_password_confirmation',
            btnReset: '#resetform',
            btnCreate: 'input[type="submit"]',
        }        
}

    async createNewUser() {
        await this.selectOptionInDropdown(this.SignUpForm.titleDropdown, 'Ms');
        await this.fill(this.SignUpForm.firstName, 'Daniela');
        await this.fill(this.SignUpForm.surName, 'Ivanova');
        await this.fill(this.SignUpForm.phone, '1234321');
        await this.selectOptionInDropdown(this.SignUpForm.dateOfBirth.yearDropdown, '1975');
        await this.selectOptionInDropdown(this.SignUpForm.dateOfBirth.monthDropdown, 'June');
        await this.selectOptionInDropdown(this.SignUpForm.dateOfBirth.dayDropdown, '16');
        await this.check(this.SignUpForm.license.provisional);
        await this.selectOptionInDropdown(this.SignUpForm.licencePeriodDropdown, '5');
        await this.selectOptionInDropdown(this.SignUpForm.occupationDropdown, 'Scientist');
        await this.fill(this.SignUpForm.address.street, '21 Oak Avenue');
        await this.fill(this.SignUpForm.address.city, 'Dalas');
        await this.fill(this.SignUpForm.address.county, 'Omaha');
        await this.fill(this.SignUpForm.address.postCode, '34323');
        await this.fill(this.SignUpForm.email, 'usermail123@test.qa')
        await this.fill(this.SignUpForm.password, password);
        await this.fill(this.SignUpForm.confirmPassword, password);
        await this.click(this.SignUpForm.btnCreate);
        await expect(this.page.url()).toBe('https://demo.guru99.com/insurance/v3/index.php');
    }

    async clearCreateNewUserForm() {
        await this.selectOptionInDropdown(this.SignUpForm.titleDropdown, 'Ms');
        await this.fill(this.SignUpForm.firstName, 'Daniela');
        await this.fill(this.SignUpForm.surName, 'Ivanova');
        await this.fill(this.SignUpForm.phone, '1234321');
        await this.selectOptionInDropdown(this.SignUpForm.dateOfBirth.yearDropdown, '1975');
        await this.selectOptionInDropdown(this.SignUpForm.dateOfBirth.monthDropdown, 'June');
        await this.selectOptionInDropdown(this.SignUpForm.dateOfBirth.dayDropdown, '16');
        await this.check(this.SignUpForm.license.provisional);
        await this.selectOptionInDropdown(this.SignUpForm.licencePeriodDropdown, '5');
        await this.selectOptionInDropdown(this.SignUpForm.occupationDropdown, 'Scientist');
        await this.fill(this.SignUpForm.address.street, '21 Oak Avenue');
        await this.fill(this.SignUpForm.address.city, 'Dalas');
        await this.fill(this.SignUpForm.address.county, 'Omaha');
        await this.fill(this.SignUpForm.address.postCode, '34323');
        await this.fill(this.SignUpForm.email, email)
        await this.fill(this.SignUpForm.password, password);
        await this.fill(this.SignUpForm.confirmPassword, password);
        await this.click(this.SignUpForm.btnReset);
        await expect(this.page.url()).not.toBe('https://demo.guru99.com/insurance/v3/index.php');
    }

}