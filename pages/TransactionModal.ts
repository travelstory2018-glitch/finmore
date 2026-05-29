import { th } from '@faker-js/faker';
import { expect, Locator, Page } from '@playwright/test';
import * as GeneralMethods from '../helper/GeneralMethods';

export class TransactionModal {

    readonly page: Page;

    // navigation
    readonly navTransactionsButton: Locator;

    // Add transactions
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
    

    // filters
    readonly openFiltersButton: Locator;
    readonly typeFilter: Locator;
    readonly categoryFilter: Locator;
    readonly dateFrom: Locator;
    readonly dateTo: Locator;
    readonly searchFilter: Locator;
    

    // items
    readonly items: Locator;

    constructor(page: Page) {

        this.page = page;

        // navigation
        this.navTransactionsButton =
            page.getByTestId('nav-transactions');

        // buttons
        this.addTransactionButton =
            page.getByTestId('add-transaction-button');

        this.createTransactionButton =
            page.getByTestId('transaction-form-submit');

        // modal
        this.transactionModal =
            page.getByTestId('transaction-modal');

        this.transactionFormTitle =
            page.getByTestId('transaction-form-title');

        this.amountInput =
            page.getByTestId('transaction-amount-input');

        this.categorySelect =
            page.getByTestId('transaction-category-select');

        this.descriptionInput =
            page.getByTestId('transaction-description-input');

        this.dateInput =
            page.getByTestId('transaction-date-input');

        this.accountSelect =
            page.getByTestId('transaction-account-select');

        // filters
        this.openFiltersButton = 
        page.getByTestId('toggle-filters-button');
        this.typeFilter =
            page.getByTestId('type-filter');

        this.categoryFilter =
            page.getByTestId('category-filter');

        this.dateFrom =
            page.getByTestId('date-from-filter');

        this.dateTo =
            page.getByTestId('date-to-filter');

        this.searchFilter =
            page.getByTestId('search-filter');

        // items
        this.items =
            page.locator('[data-testid^="transaction-item-"]');

        // transactions
        this.recentTransactionItem =
            page.locator('[data-testid^="recent-transaction-"]')
                .first();
    }

    async openTransactionsPage() {

        await GeneralMethods.click(
            this.navTransactionsButton,
            'Open transactions page'
        );
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
            '700'
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

        return transactionId.replace(
            'recent-transaction-',
            ''
        );
    }

    getRecentTransactionById(id: string) {

        return this.page.getByTestId(
            `recent-transaction-${id}`
        );
    }

    async open() {

        await this.page.goto('/transactions');
    }

    async setType(value: string) {

        await this.typeFilter.selectOption(value);
    }

    async setCategory(value: string) {

        await this.categoryFilter.selectOption(value);
    }

    async setSearch(text: string) {

        await this.searchFilter.fill(text);
    }

    async setDateFrom(date: string) {

        await this.dateFrom.fill(date);
    }

    async setDateTo(date: string) {

        await this.dateTo.fill(date);
    }

    async expectItemsCount(count: number) {

        await expect(this.items).toHaveCount(count);
    }
    async openFilters() {
        await this.openFiltersButton.click();
    }
}