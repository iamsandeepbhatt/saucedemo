import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.describe('Saucedemo login', ()=> {
  
  test('login with valid credentails', async ({page})=> {
    const myLogin = new LoginPage(page);
    await myLogin.goto();
    await myLogin.login('standard_user' , 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);
    await expect(page.getByTestId('title')).toContainText('Products');
  }
  )
}
);
