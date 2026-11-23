import { test as base}  from '@playwright/test'

import { LoginPage } from '../pages/LoginPage'
import { ProductPage } from '../pages/ProductPage'
import { CartPage } from '../pages/CartPage'

type myFixture =
{
    loginPage: LoginPage;
    productListPage: ProductPage;
    cartPage: CartPage
}

export const test = base.extend<myFixture>({
  
    loginPage: async({page}, use)=>{

        //return object of loginPage class
        await use(new LoginPage(page));

    },

    productListPage: async({page}, use)=>{

        await use(new ProductPage(page));

    },

    cartPage: async({page}, use)=>{

        await use(new CartPage(page));

    },

})

export { expect } from '@playwright/test'