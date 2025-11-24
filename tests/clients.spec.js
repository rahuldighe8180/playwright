import { test, expect } from '@playwright/test';

test('Simplify Test With Custom Call', async ({ page }) => {

  // 1️⃣ Login page
  await page.goto('https://qa-account.simplifysandbox.net/');

  await page.getByRole('textbox', { name: 'Enter Your Email Address Or' }).fill('admin');
  await page.getByRole('textbox', { name: 'Enter Your Password' }).fill('Admin@Simplify');

  await page.getByRole('button', { name: 'Sign In', exact: true }).click();

  // Wait for dashboard
  await page.waitForLoadState('networkidle');

  // 2️⃣ Custom API Call (Example)
  const response = await page.request.get('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();
  console.log('Custom API Response:', data);

  // 3️⃣ Clients page
  await page.getByText('pin_dropClients').click();

  await page.getByRole('button', { name: 'add Create New' }).click();

  // Checkbox clicks (stable)
  await page.locator('.checkbox_wrapper_17 label').first().scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.locator('.checkbox_wrapper_17 label').first().click({ force: true });
  await page.locator('.checkbox_wrapper_17 label').first().click({ force: true });

  await page.locator('app-organization-create').getByText('close').click();

  // Click Softtech
  await page.getByText('Softtech Client View Enabled/').click();

  // Toggle checkbox safely
  const toggle = page.locator('.checkbox_wrapper_17 > .cursor_default');
  await toggle.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await toggle.click({ force: true });

  // NO button fix (partial match + force click)
//   await page.getByRole('button', { name: /no/i }).click({ force: true });

  // Upload Image
// Click button if needed
await page.getByText('Upload an Image Or').click();
  // Upload the actual file
  await page.locator('input[type="file"]').setInputFiles('C:/Users/admin/Desktop/playwrite/simplify.png');


  // Final checkbox clicks
  await page.locator('.checkbox_wrapper_17 label').first().scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.locator('.checkbox_wrapper_17 label').first().click({ force: true });
  await page.locator('.checkbox_wrapper_17 label').first().click({ force: true });

  await page.locator('app-organization-create').getByText('close').click();

});
