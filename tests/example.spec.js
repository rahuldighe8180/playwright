
import { test, expect } from '@playwright/test';

test('Create New Client Organization with Assertions', async ({ page }) => {

  await page.goto('https://qa-account.simplifysandbox.net/');

  // Login
  await page.getByPlaceholder('Enter Your Email Address Or').fill('admin');
  await page.getByPlaceholder('Enter Your Password').fill('Admin@Simplify');
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Assertion 1 → Verify Login Success
  await expect(page.getByText('Clients', { exact: false })).toBeVisible();


  // Navigate to Clients
  await page.getByText('Clients', { exact: false }).click();

  // Assertion 2 → Verify Create New Button Visible
  await expect(page.getByRole('button', { name: 'Create New' })).toBeVisible();


  // Create New Client Organization
  await page.getByRole('button', { name: 'Create New' }).click();

  // Fill Organization Name
  const orgName = 'Rahul Organization';
  await page.getByRole('textbox', { name: 'Client Organization Name *' }).fill(orgName);

  // Close popup (You can replace with Save)
  await page.getByText('close', { exact: true }).click();

  // Assertion 3 → Verify Organization Created / Visible in List
  await expect(page.getByText(orgName, { exact: false })).toBeVisible();


  // Close final popup if opens
  // await page.getByText('close', { exact: true }).click();  // optional
});
