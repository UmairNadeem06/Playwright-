

import { chromium, test, expect } from '@playwright/test';
import dotenv from "dotenv";
test.setTimeout(12000);
test('Access Landing Page', async ({page}) => {
  await page.goto(process.env.BASE_URL);

});