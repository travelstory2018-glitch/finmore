import { th } from '@faker-js/faker';
import { expect, Locator, Page } from '@playwright/test';
import * as GeneralMethods from '../helper/GeneralMethods'
export class RegistrationPage {
    readonly page: Page;

    // Registration
    readonly switchToRegisterButton: Locator;
    readonly registerTitle: Locator;
    readonly registerNameInput: Locator;
    readonly registerEmailInput: Locator;
    readonly registerPasswordInput: Locator;
    readonly registerConfirmPasswordInput: Locator;
    readonly registerSubmitButton: Locator;
    readonly nameError: Locator;
    readonly emailError: Locator;
    readonly passwordError: Locator;
    readonly confirmPasswordError: Locator;
    readonly registerCurrencySelect: Locator;




    // Dashboard
    readonly dashboardTitle: Locator;




    constructor(page: Page) {
        this.page = page;
        // Registration locators
        this.switchToRegisterButton = page.getByTestId('switch-to-register-button');
        this.registerTitle = page.getByTestId('register-title');
        this.registerNameInput = page.getByTestId('register-name-input');
        this.registerEmailInput = page.getByTestId('register-email-input');
        this.registerPasswordInput = page.getByTestId('register-password-input');
        this.registerConfirmPasswordInput = page.getByTestId('register-confirm-password-input');
        this.registerSubmitButton = page.getByTestId('register-submit-button');
        this.nameError = page.getByTestId('name-error');
        this.emailError = page.getByTestId('email-error');
        this.passwordError = page.getByTestId('password-error');
        this.confirmPasswordError = page.getByTestId('confirm-password-error');
        this.registerCurrencySelect = page.getByTestId('register-currency-select');






        // Dashboard
        this.dashboardTitle = page.getByTestId('dashboard-title');
    }
    async goto() {
        await this.page.goto('/');
    }
    async openRegistration() {
        // await this.switchToRegisterButton.click();
        await GeneralMethods.click(this.switchToRegisterButton, "Registration open")
    }



    async register(
        name: string,
        email: string,
        password: string,
        confirmPassword: string,
        currency?: string
    ) {
       
        const currencies = ['UAH', 'USD', 'EUR', 'GBP'];

    const randomCurrency =
     currency??
        currencies[Math.floor(Math.random() * currencies.length)];
        await GeneralMethods.fill(this.registerNameInput, name);
        await GeneralMethods.fill(this.registerEmailInput, email);
        await GeneralMethods.fill(this.registerPasswordInput, password);
        await GeneralMethods.fill(this.registerConfirmPasswordInput, confirmPassword);
        await this.registerCurrencySelect.selectOption(randomCurrency);
        await this.registerSubmitButton.click();
        console.log (randomCurrency)
    }
    async expectRegistrationPage() {
        await expect(this.registerTitle).toBeVisible();
    }



    async expectDashboard() {
        await expect(this.dashboardTitle).toBeVisible();

    }
    async expectNameError() {
        expect(this.nameError).toBeVisible();
    }
    async expectEmailError() {
        expect(this.emailError).toBeVisible();
    }
    async expectPasswordError() {
        expect(this.passwordError).toBeVisible;
    }
    async expectConfirmPasswordError() {
        expect(this.confirmPasswordError).toBeVisible;
    }
    
    }
