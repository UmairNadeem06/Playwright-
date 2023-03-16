import { Given, When, Then } from '@cucumber/cucumber';


Given('user access the landing page', async function (this) {
    const page = this.page!;
    await page.goto(process.env.BASE_URL);

    await page.locator('').waitFor();
  });

  When('user scrolls down the page', async function (this) {
    const page = this.page!;
    await page.waitForSelector(``);
  });

  Then('the footer element is visible', async function (this) {
    const page = this.page!;
    await page.waitForSelector(``);
  });
