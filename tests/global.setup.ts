import { TEST_DATA } from "../data/testData";
import { test, expect } from "../fixture/pageObjectFixture"
import { LoginPage } from "../pages/LoginPage";

test('Authenticate Users', async({page, loginPage})=>{

    await loginPage.openApp();
    await loginPage.doLogin();
    await expect(page).toHaveURL(TEST_DATA.urls.inventory);
    
    await page.context().storageState({path: 'auth.user.json'});
})