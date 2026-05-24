import { expect, Locator, Page } from '@playwright/test';



export class LoginPage {
    readonly page: Page;



    // Login
    readonly loginTitle: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;
    readonly errorMessage: Locator;



    // Registration
    readonly switchToRegisterButton: Locator;
    readonly registerTitle: Locator;
    readonly registerNameInput: Locator;
    readonly registerEmailInput: Locator;
    readonly registerPasswordInput: Locator;
    readonly registerConfirmPasswordInput: Locator;
    readonly registerSubmitButton: Locator;



    // Dashboard
    readonly dashboardTitle: Locator;



    constructor(page: Page) {
        this.page = page;



        // Login locators
        this.loginTitle = page.getByTestId('login-title');
        this.emailInput = page.getByTestId('login-email-input');
        this.passwordInput = page.getByTestId('login-password-input');
        this.submitButton = page.getByTestId('login-submit-button');
        this.errorMessage = page.getByTestId('login-error');



        // Registration locators
        this.switchToRegisterButton = page.getByTestId('switch-to-register-button');
        this.registerTitle = page.getByTestId('register-title');
        this.registerNameInput = page.getByTestId('register-name-input');
        this.registerEmailInput = page.getByTestId('register-email-input');
        this.registerPasswordInput = page.getByTestId('register-password-input');
        this.registerConfirmPasswordInput = page.getByTestId('register-confirm-password-input');
        this.registerSubmitButton = page.getByTestId('register-submit-button');



        // Dashboard
        this.dashboardTitle = page.getByTestId('dashboard-title');
    }



    async goto() {
        await this.page.goto('/');
    }



    async fillEmail(email: string) {
        await this.emailInput.fill(email);
    }



    async fillPassword(password: string) {
        await this.passwordInput.fill(password);
    }



    async clickSubmit() {
        await this.submitButton.click();
    }



    async login(email: string, password: string) {
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.clickSubmit();
    }



    async openRegistration() {
        await this.switchToRegisterButton.click();
    }



    async register(
        name: string,
        email: string,
        password: string,
        confirmPassword: string
    ) {
        await this.registerNameInput.fill(name);
        await this.registerEmailInput.fill(email);
        await this.registerPasswordInput.fill(password);
        await this.registerConfirmPasswordInput.fill(confirmPassword);



        await this.registerSubmitButton.click();
    }



    async expectLoginPage() {
        await expect(this.loginTitle).toBeVisible();
    }



    async expectErrorMessage() {
        await expect(this.errorMessage).toBeVisible();
    }



    async expectDashboard() {
        await expect(this.dashboardTitle).toBeVisible();
    }
}
