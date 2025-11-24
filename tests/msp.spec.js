import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://qa-account.simplifysandbox.net/');

  // Click text
  await page.getByText('NextWave Managed Tech View').click();

  // Checkbox load झालंय का check करा
  const toggle = page.locator('.checkbox_wrapper_17 > .cursor_default');
  await expect(toggle).toBeVisible();   // Assertion
  await toggle.click();

  // Close button
  const closeBtn = page.locator('app-organization-create').getByText('close');
  await expect(closeBtn).toBeVisible();  // Assertion
  await closeBtn.click();

});
