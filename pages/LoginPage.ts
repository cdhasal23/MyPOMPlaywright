import {Page, Locator} from '@playwright/test'
import { TEST_DATA } from '../data/testData';

export class LoginPage
{

    //data elements
    page: Page;
    usernameField: Locator;
    passwordField: Locator;
    loginBtn: Locator

    //initializing elements using constructor
    //page fixture will initialise the elements
    constructor(page: Page)
    {
        this.page = page;
        this.usernameField = page.locator('#user-name');
        this.passwordField = page.locator('#password');
        this.loginBtn = page.locator('#login-button')
    }

    async openApp()
    {
        await this.page.goto('/');
    }

    //page actions using async function
    async doLogin()
    {
        await this.usernameField.fill(TEST_DATA.user.username);
        await this.passwordField.fill(TEST_DATA.user.password);
        await this.loginBtn.click();
    }


    
}