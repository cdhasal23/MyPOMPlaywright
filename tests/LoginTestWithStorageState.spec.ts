import { TEST_DATA } from '../data/testData';
import { test, expect } from '../fixture/pageObjectFixture'

test('ValidateLogin', async({page, loginPage, productListPage, cartPage})=>{

    await page.goto(TEST_DATA.urls.inventory);
    expect(await page).toHaveURL(TEST_DATA.urls.inventory);
     await page.waitForTimeout(2000);

})

test('Validate Add To Cart', async({page, loginPage, productListPage, cartPage})=>{

    await page.goto(TEST_DATA.urls.inventory);
     expect(await page).toHaveURL(TEST_DATA.urls.inventory);
     
     await productListPage.clickAddToCart();

    //Checks if card bage is updated with 1
    expect(await productListPage.cartBadgeIcon).toHaveText('1');

    await productListPage.clickCartIcon();
    //check if url changes
    expect(await page).toHaveURL(TEST_DATA.urls.cart); 

    await page.waitForTimeout(3000);

})


test('Validate Cart Item', async({page, loginPage, productListPage, cartPage})=>{

     await page.goto(TEST_DATA.urls.inventory);
     expect(await page).toHaveURL(TEST_DATA.urls.inventory);
     
     await productListPage.clickAddToCart();

    //Checks if card bage is updated with 1
    expect(await productListPage.cartBadgeIcon).toHaveText('1');

    await productListPage.clickCartIcon();
    //check if url changes
    expect(await page).toHaveURL(TEST_DATA.urls.cart);

    //Validations on Cart Page
    expect(await cartPage.cartProduct).toHaveText('Sauce Labs Backpack');
    

    await page.waitForTimeout(3000);

})

