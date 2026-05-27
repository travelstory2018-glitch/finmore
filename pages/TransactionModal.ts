import { th } from '@faker-js/faker';
import { expect, Locator, Page } from '@playwright/test';
import * as GeneralMethods from '../helper/GeneralMethods'
export class TransactionModal {
    readonly page: Page;
   //Add transactions
    readonly addTransactionButton: Locator;
    readonly transactionModal: Locator;
    readonly transactionFormTitle: Locator;
    readonly createTransactionButton: Locator;
    readonly amountInput: Locator;
    readonly categorySelect: Locator;
    readonly descriptionInput: Locator;
    readonly dateInput: Locator;
    readonly accountSelect: Locator;
    readonly recentTransactionItem: Locator;
    




    constructor(page: Page) {
 this.page = page;

        // buttons
        this.addTransactionButton = page.getByTestId('add-transaction-button');
        this.createTransactionButton = page.getByTestId('transaction-form-submit');

        // modal
        this.transactionModal = page.getByTestId('transaction-modal');
        this.transactionFormTitle = page.getByTestId('transaction-form-title');
        this.amountInput = page.getByTestId('transaction-amount-input');
        this.categorySelect = page.getByTestId('transaction-category-select');
        this.descriptionInput = page.getByTestId('transaction-description-input');
        this.dateInput = page.getByTestId('transaction-date-input');
        this.accountSelect = page.getByTestId('transaction-account-select')

        //transactions
        this.recentTransactionItem = page.locator('[data-testid^="recent-transaction-"]'
).first();


    }

    async openModal() {

        await GeneralMethods.click(
            this.addTransactionButton,
            'Open transaction modal'
        );
    }

async createExpenseTransaction() {

        await GeneralMethods.fill(
            this.amountInput,
            '500'
        );

        await GeneralMethods.select(
            this.categorySelect,
            'Продукти'
        );

        await GeneralMethods.fill(
            this.descriptionInput,
            'Тестова транзакція'
        );

        // дата
        await GeneralMethods.fill(
            this.dateInput,
            '2026-05-27'
        );

        // рахунок
        await GeneralMethods.select(
            this.accountSelect,
            'Готівка'
        );

        await GeneralMethods.click(
            this.createTransactionButton,
            'Create transaction'
        );
        const transactionId = await this.page
            .locator('[data-testid^="recent-transaction-"]')
            .first()
            .getAttribute('data-testid');

        if (!transactionId) {
            throw new Error('Transaction ID not found');
        }

        return transactionId.replace('recent-transaction-', '');
    }

    getRecentTransactionById(id: string) {
        return this.page.getByTestId(`recent-transaction-${id}`);
    }
}



