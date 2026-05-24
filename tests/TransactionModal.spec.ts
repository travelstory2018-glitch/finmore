import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TransactionModal } from '../pages/TransactionModal';

test.describe('Transactions', () => {


    test.beforeEach(async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.login(
            'admin@demo.com',
            'admin123'
        );
    });
    test('User can open transaction modal', async ({ page }) => {

        const transactionModal = new TransactionModal(page);
        await transactionModal.openModal();
        await expect(
            transactionModal.transactionFormTitle
        ).toHaveText('Нова транзакція');
    });
})