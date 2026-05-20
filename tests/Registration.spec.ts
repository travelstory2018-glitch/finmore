import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../pages/RegistrationPage';
import users from '../data/users.json';
import { generateUser } from '../utils/generateUser';

test.describe('Registration', () => {
    let registrationPage: RegistrationPage;

    test.beforeEach(async ({ page }) => {
        registrationPage = new RegistrationPage(page);

        await registrationPage.goto();

        await registrationPage.openRegistration();
        await expect(registrationPage.registerTitle).toBeVisible();
    });
    test('registration success', async () => {
        const user = generateUser()
        await test.step('Fill registration form', async () => {
            await registrationPage.register(

                user.name,
                user.email,
                user.password,
                user.password

            );
            console.log(user.name, user.email, user.password

            )
        });

        await test.step('Verify dashboard is opened', async () => {

        });
    });

    test('registration with empty name field', async () => {
        const user = generateUser();

        user.name = '';

        await test.step('Fill registration form', async () => {
            await registrationPage.register(
                user.name,
                user.email,
                user.password,
                user.password
            );

            console.log(user);
        });

        await test.step('Verify name error', async () => {
            await registrationPage.expectNameError();
        });
    });
    test('registration with empty email field', async () => {
        const user = generateUser();

        user.email = '';

        await test.step('Fill registration form', async () => {
            await registrationPage.register(
                user.name,
                user.email,
                user.password,
                user.password
            );

            console.log(user);
        });

        await test.step('Verify email error', async () => {
            await registrationPage.expectEmailError();
        });
    });

    test('registration with empty password field', async () => {
        const user = generateUser();

        user.password = '';

        await test.step('Fill registration form', async () => {
            await registrationPage.register(
                user.name,
                user.email,
                user.password,
                user.password
            );

            console.log(user);
        });

        await test.step('Verify password error', async () => {
            await registrationPage.expectConfirmPasswordError();
        });
    });
    test('registration with empty password confirmation field', async () => {
        const user = generateUser();

        user.password = '';

        await test.step('Fill registration form', async () => {
            await registrationPage.register(
                user.name,
                user.email,
                user.password,
                user.password
            );

            console.log(user);
        });

        await test.step('Verify password error', async () => {
            await registrationPage.expectPasswordError();
        });
    })
    test('registration with wrong password confirmation field', async () => {
        const user = generateUser();

        await test.step('Fill registration form', async () => {
            await registrationPage.register(
                user.name,
                user.email,
                user.password,
                user.password
            );

            console.log(user);
        });

        await test.step('Verify password error', async () => {
            await registrationPage.expectPasswordError();
        });
    });
    test('Registration with currency dropdown selecting', async () => {
    const user = generateUser();

    await test.step('Fill registration form and select currency', async () => {
        await registrationPage.register(
            user.name,
            user.email,
            user.password,
            user.password
        );
    });

    await test.step('Verify dashboard is opened', async () => {
        await registrationPage.expectDashboard();
    });
   })


})