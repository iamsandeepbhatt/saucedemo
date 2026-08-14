import { CartPage } from "../pages/cartPage";
import { LoginPage } from "../pages/loginPage";
import { InventoryPage } from "../pages/inventoryPage";
import { expect, test } from "@playwright/test";

test('verify item is in cart after adding', async({page})=>{
    const myLogin = new LoginPage(page);
    await myLogin.goto();
    await myLogin.login('standard_user' , 'secret_sauce');
    const myInventory = new InventoryPage(page);
    await myInventory.addFirstProductToCart();
    const myCartPage = new CartPage(page);
    await myCartPage.goto();
    const count = await myCartPage.itemCount();
    expect(count).toBe(1);
});

test('remove item and verify cart is empty', async({page})=>{
    const myLogin = new LoginPage(page);
    await myLogin.goto();
    await myLogin.login('standard_user' , 'secret_sauce');
    const myInventory = new InventoryPage(page);
    await myInventory.addFirstProductToCart();
    const myCartPage = new CartPage(page);
    await myCartPage.goto();
    await myCartPage.removeProduct();
    const count = await myCartPage.itemCount();
    expect(count).toBe(0);
});


test('proceed to checkout', async({page})=>{
    const myLogin = new LoginPage(page);
    await myLogin.goto();
    await myLogin.login('standard_user' , 'secret_sauce');
    const myInventory = new InventoryPage(page);
    await myInventory.addFirstProductToCart();
    const myCartPage = new CartPage(page);
    await myCartPage.goto();
    await myCartPage.checkout();
    await expect(page).toHaveURL('/checkout-step-one.html');
});

