import { th } from '@faker-js/faker';
import { expect, Locator, Page } from '@playwright/test';

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
        await this.switchToRegisterButton.click();
    }



    async register(
        name: string,
        email: string,
        password: string,
        confirmPassword: string
    ) {
        const currencies = ['USD', 'EUR', 'UAH', 'PLN'];

    const randomCurrency =
        currencies[Math.floor(Math.random() * currencies.length)];
        await this.registerNameInput.fill(name);
        await this.registerEmailInput.fill(email);
        await this.registerPasswordInput.fill(password);
        await this.registerConfirmPasswordInput.fill(confirmPassword);
        await this.registerCurrencySelect.selectOption(randomCurrency);
        await this.registerSubmitButton.click();
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
        expect(this.passwordError);
    }
    async expectConfirmPasswordError() {
        expect(this.confirmPasswordError);
    }
    
    }
