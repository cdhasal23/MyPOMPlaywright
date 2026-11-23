import { Page, Locator } from "@playwright/test";

export class ProductPage
{
    page: Page;
    addToCartBtn: Locator;
    cartBadgeIcon: Locator;
    cartIcon: Locator;

    constructor(page: Page)
    {
        this.page = page;
        this.addToCartBtn = page.locator('#add-to-cart-sauce-labs-backpack');
        this.cartBadgeIcon = page.locator('.shopping_cart_badge');
        this.cartIcon = page.locator('.shopping_cart_link')
    }

    async clickAddToCart()
    {
        await this.addToCartBtn.click();
    }

    async clickCartIcon()
    {
        await this.cartIcon.click();
    }
}