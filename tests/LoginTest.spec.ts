import { test, expect } from '@playwright/test'

import { LoginPage } from '../pages/LoginPage'
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';

test('ValidateLogin', async({page})=>{

    let loginpage = new LoginPage(page);

    await loginpage.openApp();
    await loginpage.doLogin();

    //assertions
    expect(await page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await page.waitForTimeout(2000);

})

test('Validate Add To Cart', async({page})=>{

    let loginpage = new LoginPage(page);

    await loginpage.openApp();
    await loginpage.doLogin();
    expect(await page).toHaveURL('https://www.saucedemo.com/inventory.html');


    let productPage = new ProductPage(page);
    await productPage.clickAddToCart();

    //Checks if card bage is updated with 1
    expect(await productPage.cartBadgeIcon).toHaveText('1');

    await productPage.clickCartIcon();
    //check if url changes
    expect(await page).toHaveURL('https://www.saucedemo.com/cart.html'); 


    await page.waitForTimeout(3000);

})


test('Validate Cart Item', async({page})=>{

    let loginpage = new LoginPage(page);

    await loginpage.openApp();
    await loginpage.doLogin();
    expect(await page).toHaveURL('https://www.saucedemo.com/inventory.html');


    let productPage = new ProductPage(page);
    await productPage.clickAddToCart();

    //Checks if card bage is updated with 1
    expect(await productPage.cartBadgeIcon).toHaveText('1');

    await productPage.clickCartIcon();
    //check if url changes
    expect(await page).toHaveURL('https://www.saucedemo.com/cart.html');


    //Validations on Cart Page

    let cartPage = new CartPage(page);
    expect(await cartPage.cartProduct).toHaveText('Sauce Labs Backpack');
    

    await page.waitForTimeout(3000);

})

