import { th } from '@faker-js/faker';
import { expect, Locator, Page } from '@playwright/test';
import * as GeneralMethods from '../helper/GeneralMethods'
export class TransactionModal {
    readonly page: Page;
   //Add transactions
    readonly addTransactionButton: Locator;
    readonly transactionModal: Locator;
    readonly transactionFormTitle: Locator;

    constructor(page: Page) {
 this.page = page;

        // button
        this.addTransactionButton = page.getByTestId('add-transaction-button');

        // modal
        this.transactionModal = page.getByTestId('transaction-modal');
        this.transactionFormTitle = page.getByTestId('transaction-form-title');
    }

    async openModal() {

        await GeneralMethods.click(
            this.addTransactionButton,
            'Open transaction modal'
        );
    }
}



