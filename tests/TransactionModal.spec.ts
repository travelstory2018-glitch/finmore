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

    test('User can add expense', async ({ page }) => {

        const transactionModal = new TransactionModal(page);

        const description = 'Тестова транзакція';
        const amount = '-700.00 UAH';

        await transactionModal.openModal();

        await expect(transactionModal.transactionFormTitle)
            .toHaveText('Нова транзакція');

        const transactionId =
            await transactionModal.createExpenseTransaction();

        const item =
            transactionModal.getRecentTransactionById(transactionId);

        await expect(item).toBeVisible();
        await expect(item).toContainText(description);
        await expect(item).toContainText(amount);
    });
});

test.describe('Transactions filters', () => {

    test.beforeEach(async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.login(
            'admin@demo.com',
            'admin123'
        );

        await page.waitForLoadState('networkidle');

        const transactions =
            new TransactionModal(page);

        await transactions.openTransactionsPage();
    });
    test('Filter by type - expense', async ({ page }) => {

        const transactions = new TransactionModal(page);

        await transactions.setType('expense');

        await expect(
            transactions.items.first()
        ).toBeVisible();
    });

    test('Search filter', async ({ page }) => {

        const transactions = new TransactionModal(page);

        await transactions.setSearch('test');

        const descriptions = page.locator(
            '[data-testid^="transaction-description-"]'
        );

        const count = await descriptions.count();

        for (let i = 0; i < count; i++) {

            await expect(
                descriptions.nth(i)
            ).toContainText('test');
        }
    });
})