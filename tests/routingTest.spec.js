// tests/routingTest.spec.js
import { test } from '@playwright/test';

import { singPage } from './singPage.spec';
import { clients } from './clients.spec';

test("Full Routing Test (sing → clients)", async ({ page }) => {

  console.log("\n🚀 Starting Routing Flow...\n");

  await singPage(page);    
  await clients(page);     

  console.log("\n🎉 All pages completed successfully!\n");
});
