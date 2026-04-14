import { test, expect } from '@playwright/test';



test('login the page', async ({ page }) => {
  await page.goto('https://qa.psi-crm.com/account/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('zaid');
  await page.getByRole('textbox', { name: 'Password' }).fill('P@ssw0rdP@ssw0rd');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Verify & Login' }).click();

});
