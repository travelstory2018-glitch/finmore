import { test, expect } from '@playwright/test';
import { Registrationpage } from '../pages/Registrationpage';

test.describe('Registration', () => {
    let registrationPage: Registrationpage;
    test.beforeEach(async ({ page }) => {
        registrationPage = new Registrationpage(page);

        await registrationPage.goto();

        await registrationPage.openRegistration();
        await expect(registrationPage.registerTitle).toBeVisible();
    });
    test('registration success', async () => {
        await test.step('Fill registration form', async () => {
            await registrationPage.register(
                'Ivan',
                'test1@mail.com',
                '1123456',
                '1123456'
            );
        });

        await test.step('Verify dashboard is opened', async () => {
            await registrationPage.expectDashboard();
        });
    });
    test('registration with empty name field', async () => {
        await test.step('Fill registration form', async () => {
            await registrationPage.register(
                '',
                'test1@mail.com',
                '1123456',
                '1123456'
            );
        });

        await test.step('Verify name error', async () => {
            await registrationPage.expecNameError();
        });
    });
    test('registration with empty email field', async () => {
        await test.step('Fill registration form', async () => {
            await registrationPage.register(
                'Ivan',
                '',
                '1123456',
                '1123456'
            );
        });

        await test.step('Verify email error', async () => {
            await registrationPage.expectEmailError();
        });
    });

    test('registration with empty password field', async () => {
        await test.step('Fill registration form', async () => {
            await registrationPage.register(
                'Ivan',
                'test@mail.com',
                '',
                '1123456'
            );
        });

        await test.step('Verify password error', async () => {
            await registrationPage.expectPasswordError();
        });
    });
})