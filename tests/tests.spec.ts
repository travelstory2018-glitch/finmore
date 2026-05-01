import { expect, test } from '@playwright/test';
test.describe('login form', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    })
    test('open login page', async ({ page }) => {
        await expect(page).toHaveURL('/');
    })
    test('to have title', async ({ page }) => {
        await expect(page).toHaveTitle('Повнофункціональний фінансовий менеджер');
    })
    test('logo', async ({ page }) => {
        const logoImage = page.locator('div').nth(4);
        await expect(logoImage).toBeVisible({ timeout: 5000 })
    })
    test('to have h1', async ({ page }) => {
        const h1 = page.getByTestId('login-title');
        await expect(h1).toBeVisible()
    })
    test('email field', async ({ page }) => {
        const email = page.getByTestId('login-email-input');
        await expect(email).toBeVisible();
        await email.fill('test@mail.com')
    })
    test('password field', async ({ page }) => {
        const password = page.getByTestId('login-password-input');
        await expect(password).toBeVisible();
        await password.fill('12345')
    })
    test('submit button', async ({ page }) => {
        const submit = page.getByTestId('login-submit-button');
        await expect(submit).toBeVisible()
    })
    test('login for non registered user', async ({ page }) => {
        const email = page.getByTestId('login-email-input');
        const password = page.getByTestId('login-password-input');
        const submit = page.getByTestId('login-submit-button');
        const error = page.getByTestId('login-error');
        await (email).fill('test@mail.com');
        await (password).fill('12345');
        await (submit).click();
        await expect(error).toBeVisible()
    })
    test('login with steps', async ({ page }) => {
        const email = page.getByTestId('login-email-input');
        const password = page.getByTestId('login-password-input');
        const submit = page.getByTestId('login-submit-button');
        const error = page.getByTestId('login-error');
        await test.step('заповнити поле email', async () => {
            // заповнити поле email
            await (email).fill('test@mail.com')
        });
        await test.step('заповнити поле паролю', async () => {
            // заповнити поле паролю
            await (password).fill('12345');
            await test.step('натиснути кнопку', async () => {
                //натиснути кнопку
                await (submit).click();
                await test.step('error message', async () => {
                    //еррор повідомлення
                    await expect(error).toBeVisible();
                })
            })
        })
    })
})