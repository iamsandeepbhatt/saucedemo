    import { Locator, Page} from "@playwright/test";
import { BasePage } from "./BasePage";

    export class LoginPage extends BasePage{
        private username : Locator;
        private password : Locator;
        private loginButton : Locator;
        constructor(page: Page){
            super(page);
            this.username = page.getByPlaceholder('Username');
            this.password = page.getByPlaceholder('Password');
            this.loginButton = page.getByRole('button', {name:'Login'});
        }

        async goto(){
            await this.page.goto('/');
        }

        async login(username: string, password: string){
            await this.username.fill(username);
            await this.password.fill(password);
            await this.loginButton.click(); 
        }

    }