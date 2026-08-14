import { LoginPage } from "../pages/loginPage";
import { InventoryPage } from "../pages/inventoryPage";
import { test, expect } from "@playwright/test"; 

test('Checking Inventory', async({page})=> {
    const myLogin=new LoginPage(page);
    await myLogin.goto();
    await myLogin.login('standard_user' , 'secret_sauce');
    const myInventory = new InventoryPage(page);
    const count = await myInventory.getProductCount(); 
    expect(count).toBe(6); 
    await myInventory.addFirstProductToCart();
    
})