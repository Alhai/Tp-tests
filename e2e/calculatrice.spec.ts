import test, { expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto('https://http://localhost:5173/');
});

test('test puissance', async ({ page }) => {
  await page.locator('#1').click();
  await page.locator("#soustraction").click();
  await page.locator('#2').click();
  await page.getByLabel('0').click();
  await expect(page.locator('0')).toHaveText('count is 1');
  
});