import { Locator, Page, expect } from '@playwright/test';

export class PracticeFormPage {
  readonly page: Page;

  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly genderMale: Locator;
  readonly mobile: Locator;
  readonly dateOfBirthInput: Locator;
  readonly subjectsInput: Locator;
  readonly hobbiesSports: Locator;
  readonly uploadPicture: Locator;
  readonly currentAddress: Locator;
  readonly state: Locator;
  readonly city: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstName = page.locator('#firstName');
    this.lastName = page.locator('#lastName');
    this.email = page.locator('#userEmail');
    this.genderMale = page.locator('label[for="gender-radio-1"]');
    this.mobile = page.locator('#userNumber');
    this.dateOfBirthInput = page.locator('#dateOfBirthInput');
    this.subjectsInput = page.locator('#subjectsInput');
    this.hobbiesSports = page.locator('label[for="hobbies-checkbox-1"]');
    this.uploadPicture = page.locator('#uploadPicture');
    this.currentAddress = page.locator('#currentAddress');
    this.state = page.locator('#state');
    this.city = page.locator('#city');
    this.submitButton = page.locator('#submit');
  }

  async open() {
    await this.page.goto('https://demoqa.com/automation-practice-form');
  }

  async fillForm() {
    await this.firstName.fill('John');
    await this.lastName.fill('Doe');
    await this.email.fill('john.doe@test.com');

    await this.genderMale.click();

    await this.mobile.fill('1234567890');

    // Date of Birth
    await this.dateOfBirthInput.click();
    await this.page.selectOption('.react-datepicker__month-select', '4'); // May
    await this.page.selectOption('.react-datepicker__year-select', '1995');
    await this.page.locator('.react-datepicker__day--015:not(.react-datepicker__day--outside-month)').click();

    // Subject
    await this.subjectsInput.fill('Math');
    await this.subjectsInput.press('Enter');

    // Hobby
    await this.hobbiesSports.click();

    await this.currentAddress.fill('New York street');

    // State
    await this.state.click();
    await this.page.locator('div[id^="react-select-3-option"]').filter({ hasText: 'NCR' }).click();

    // City
    await this.city.click();
    await this.page.locator('div[id^="react-select-4-option"]').filter({ hasText: 'Delhi' }).click();
  }

  async submit() {
    await this.submitButton.click();
  }

  async verifySuccessfulSubmit() {
    await expect(this.page.locator('#example-modal-sizes-title-lg'))
      .toHaveText('Thanks for submitting the form');

    await expect(this.page.locator('.table-responsive')).toContainText('John Doe');
    await expect(this.page.locator('.table-responsive')).toContainText('john.doe@test.com');
    await expect(this.page.locator('.table-responsive')).toContainText('Male');
    await expect(this.page.locator('.table-responsive')).toContainText('1234567890');
    await expect(this.page.locator('.table-responsive')).toContainText('Maths');
    await expect(this.page.locator('.table-responsive')).toContainText('Sports');
    await expect(this.page.locator('.table-responsive')).toContainText('New York street');
    await expect(this.page.locator('.table-responsive')).toContainText('NCR Delhi');
  }
}
