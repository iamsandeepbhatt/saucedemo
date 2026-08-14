import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage{
    private cartTitle : Locator;
    private item : Locator;
    private removeButton : Locator;
    private continueButton : Locator;
    private checkoutButton : Locator;


    constructor(page: Page){
        super(page);
        this.cartTitle=page.getByText('Your Cart');
        this.item=page.locator('.cart_item');
        this.removeButton=page.getByRole('button', {name : 'Remove'});
        this.continueButton=page.getByRole('button', {name : 'Continue Shopping'});
        this.checkoutButton=page.getByRole('button', {name : 'Checkout'});
    }

    async goto() {
        await this.page.goto('/cart.html');
      }

    async removeProduct(){
        await this.removeButton.click();
    }

    async itemCount(): Promise<number>{
        return await this.item.count();
    }

    async continueShopping(){
        await this.continueButton.click();
    }

    async checkout(){
        await this.checkoutButton.click();
    }
}
