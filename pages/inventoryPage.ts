import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class InventoryPage extends BasePage{
    private pageTitle : Locator;
    private products : Locator;
    private addToCartButtons : Locator;

    constructor(page:Page){
        super(page);
        this.pageTitle = page.getByText('Products');
        this.products = page.locator('.inventory_item');
        this.addToCartButtons = page.getByRole('button', {name : 'Add to cart'});
    }

    async getProductCount(): Promise<number>{
        return await this.products.count();
    }

    async addFirstProductToCart(){
        await this.addToCartButtons.first().click();
    }

}