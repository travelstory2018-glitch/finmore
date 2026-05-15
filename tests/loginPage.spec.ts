import { expect, test } from '@playwright/test';
import { LoginPage } from '../Pages/Loginpage';

test.describe('Login form', () => {
    let loginPage: LoginPage;



    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });



    test('open login page', async ({ page }) => {
        await expect(page).toHaveURL('/');
    });



    test('to have title', async ({ page }) => {
        await expect(page).toHaveTitle(
            'Повнофункціональний фінансовий менеджер'
        );
    });



    test('to have h1', async () => {
        await loginPage.expectLoginPage();
    });



    test('login for non registered user', async () => {
        await test.step('Fill login form', async () => {
            await loginPage.login('test@mail.com', '12345');
        });



        await test.step('Verify error message', async () => {
            await loginPage.expectErrorMessage();
        });
    });



    test('registration', async () => {
        await test.step('Open registration page', async () => {
            await loginPage.openRegistration();
            await expect(loginPage.registerTitle).toBeVisible();
        }):



        await test.step('Fill registration form', async () => {
            await loginPage.register(
                'Ivan',
                'test1@mail.com',
                '1123456',
                '1123456'
            );
        });



        await test.step('Verify dashboard', async () => {
            await loginPage.expectDashboard();
        });
    });
});