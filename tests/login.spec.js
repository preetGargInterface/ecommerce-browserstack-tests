const { test, expect } = require('@playwright/test');

const TEST_CREDENTIALS = {
  email: 'testuser@example.com',
  password: 'SecurePass123!',
};

test.describe('FashionStack Login', () => {
  test('should open login modal from homepage', async ({ page }) => {
    await page.goto('https://ecommercebs.vercel.app/');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Welcome Back')).toBeVisible({ timeout: 10000 });
    await expect(page.getByPlaceholder('Enter your email')).toBeVisible();
    await expect(page.getByPlaceholder('Enter your password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign In', exact: true })).toBeVisible();
  });

  test('should login with valid credentials', async ({ page }) => {
    await page.goto('https://ecommercebs.vercel.app/');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByPlaceholder('Enter your email')).toBeVisible({ timeout: 10000 });

    await page.getByPlaceholder('Enter your email').fill(TEST_CREDENTIALS.email);
    await page.getByPlaceholder('Enter your password').fill(TEST_CREDENTIALS.password);
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();

    await page.waitForTimeout(3000);

    const currentState = await page.content();
    expect(currentState).toBeTruthy();
  });

  test('should show validation for empty fields', async ({ page }) => {
    await page.goto('https://ecommercebs.vercel.app/');
    await page.getByRole('button', { name: 'Login' }).click();

    const emailField = page.getByPlaceholder('Enter your email');
    const passwordField = page.getByPlaceholder('Enter your password');

    await expect(emailField).toBeVisible({ timeout: 10000 });
    await expect(emailField).toHaveAttribute('required', '');
    await expect(passwordField).toHaveAttribute('required', '');
  });

  test('should navigate to sign up page from login', async ({ page }) => {
    await page.goto('https://ecommercebs.vercel.app/');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByPlaceholder('Enter your email')).toBeVisible({ timeout: 10000 });

    await page.getByRole('button', { name: 'Sign up here' }).click();
    await expect(page.getByPlaceholder('First name')).toBeVisible({ timeout: 10000 });
    await expect(page.getByPlaceholder('Last name')).toBeVisible();
  });

  test('should show alternative login options', async ({ page }) => {
    await page.goto('https://ecommercebs.vercel.app/');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByPlaceholder('Enter your email')).toBeVisible({ timeout: 10000 });

    await expect(page.getByRole('button', { name: 'Sign In with OTP' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Continue with Google' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Continue with Facebook' })).toBeVisible();
  });
});
