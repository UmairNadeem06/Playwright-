
import selector from '../allivet_locators.json';
import { test } from '@playwright/test';
import {credentials}  from '../testData/creds';
test.setTimeout(50000);
test.describe('Landing Page', async ()=> {

//   test.beforeEach('provide credentials', async () => {

//   const context = await browser.newContext({
//     httpCredentials: {
//       username: "storefront",
//       password: "sfccView2021"
//     }
//   });
//   const page = await context.newPage();
//   await page.goto(process.env.BASE_URL, {timeout: 50000});
//   console.log (await page.title());
// });  

test('User Login with Valid credentials', async ({browser}) => {

  const context = await browser.newContext({
    httpCredentials: {
      username: "storefront",
      password: "sfccView2021"
    }
  });

  const page = await context.newPage();
  await page.goto(process.env.BASE_URL, {timeout: 50000});
  console.log (await page.title());
  const account_dropdown = page.locator(selector.landingPage.account_dropdown);

  

  const email = page.locator(selector.loginPage.signinEmail);
  await email.type(credentials.allivet.valid_user_email);
  const password = page.locator(selector.loginPage.signinPassword);
  await password.type(credentials.allivet.valid_user_password);
  await page.locator(selector.loginPage.loginBtn).click();

});
});

