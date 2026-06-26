import { test } from '@playwright/test';
import { PracticeFormPage } from '../pages/practiceFormPage';
test.describe('Automation Practice Form', () => {
  test('should submit form successfully', async ({ page }) => {
    const practiceForm = new PracticeFormPage(page);

    await practiceForm.open();
    await practiceForm.fillForm();
    await practiceForm.submit();
    await practiceForm.verifySuccessfulSubmit();
  });
});