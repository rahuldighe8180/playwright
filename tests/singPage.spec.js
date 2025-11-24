import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Open URL
  await page.goto('https://qa-account.simplifysandbox.net/');
  await page.waitForLoadState('networkidle'); // Wait page load fully

  // Wrong login attemp
  await page.getByRole('textbox', { name: 'Enter Your Email Address Or' }).click();
  await page.getByRole('textbox', { name: 'Enter Your Email Address Or' }).fill('rahul');

  await page.getByRole('textbox', { name: 'Enter Your Password' }).click();
  await page.getByRole('textbox', { name: 'Enter Your Password' }).fill('12345678');

  await page.waitForTimeout(2000);   // 1 sec wait
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();

  await page.waitForTimeout(2000);   // 2 sec wait

  // Correct login attempt
  await page.getByRole('textbox', { name: 'Enter Your Email Address Or' }).click();
  await page.getByRole('textbox', { name: 'Enter Your Email Address Or' }).fill('admin');

  await page.getByRole('textbox', { name: 'Enter Your Password' }).click();
  await page.getByRole('textbox', { name: 'Enter Your Password' }).fill('Admin@Simplify');

  await page.waitForTimeout(1000);   // 1 sec wait
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();

  // Wait dashboard load
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

});
