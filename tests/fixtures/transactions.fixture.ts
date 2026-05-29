import { test as base } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { TransactionModal } from '../../pages/TransactionModal';

type TransactionsFixture = {
    seededTransactions: void;
};

export const test = base.extend<TransactionsFixture>({
    seededTransactions: async ({ page }, use) => {

        const loginPage = new LoginPage(page);
        const transactions = new TransactionModal(page);

        // login
        await loginPage.goto();

        await loginPage.login(
            'admin@demo.com',
            'admin123'
        );

        await page.waitForLoadState('networkidle');

        // create 5 transactions
        for (let i = 1; i <= 5; i++) {

            await transactions.openModal();

            await transactions.amountInput.fill(`${100 * i}`);

            await transactions.categorySelect.selectOption('Продукти');

            await transactions.descriptionInput.fill(
                `test transaction ${i}`
            );

            await transactions.dateInput.fill(
                '2026-05-27'
            );

            await transactions.accountSelect.selectOption(
                'Готівка'
            );

            await transactions.createTransactionButton.click();

            // optional wait
            await page.waitForLoadState('networkidle');
        }

        // open transactions page
        await transactions.openTransactionsPage();

        await use();
    }
});

export { expect } from '@playwright/test';