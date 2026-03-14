const { test, expect } = require('@playwright/test');

const TEST_USER = {
  firstName: 'Test',
  lastName: 'User',
  email: `testuser_${Date.now()}@mailinator.com`,
  password: 'SecurePass123!',
};

test.describe('FashionStack Sign Up', () => {
  test('should register a new account successfully', async ({ page }) => {
    await page.goto('https://ecommercebs.vercel.app/');

    await page.getByRole('button', { name: 'Login' }).click();

    await page.getByRole('button', { name: 'Sign up here' }).click();

    await expect(page.getByRole('heading', { name: 'Sign Up' })).toBeVisible();

    await page.getByPlaceholder('First name').fill(TEST_USER.firstName);
    await page.getByPlaceholder('Last name').fill(TEST_USER.lastName);
    await page.getByPlaceholder('Enter your email').fill(TEST_USER.email);
    await page.getByPlaceholder('Create a password').fill(TEST_USER.password);
    await page.getByPlaceholder('Confirm your password').fill(TEST_USER.password);

    await page.getByRole('checkbox', { name: /Terms of Service/ }).check();

    const createBtn = page.getByRole('button', { name: 'Create Account' });
    await expect(createBtn).toBeEnabled();
    await createBtn.click();

    await expect(
      page.getByRole('heading', { name: 'My Account' })
    ).toBeVisible({ timeout: 15000 });
  });
});
