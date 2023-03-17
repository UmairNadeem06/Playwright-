
import selector from '../allivet_locators.json';
import { test, request , expect , chromium} from '@playwright/test';
import {credentials}  from '../testData/creds';
const loginPayLoad = { loginEmail: "automation-01@example.com", loginPassword: "Admin@321" }
test.setTimeout(50000);
test.describe('Accessing Token', async ()=> {
  
// test( 'Api', async ({browser})=>
// {
// const baseUrl =  `https://api-dev.allivet.io/api/Auth`                
// const headers = {
//   "Content-Type": "application/json-patch+json",
//   "accept": "application/json"
// }
// const apiContext = await request.newContext({
//   extraHTTPHeaders: headers,
//  });
// const response = await apiContext.post(baseUrl, {
//   data: {
//     clientID: "AllivetDev",
//     clientSecretKey: "3M@i3#vpGxC6FYYYVn#6",
//     apiScope:"api:salesforce",
//     storeKey: "FleetAndFarmRx"
//   }
// });
// expect(response.status()).toBe(200);
// const respBody = await response.json();
//  token = respBody.value
//   console.log(token) 
// });


test( 'ByPass testLogin', async ({})=>
{
    const browser = await chromium.launch();
      const context = await browser.newContext({
        httpCredentials: {
          username: "storefront",
          password: "sfccView2021"
        }
      });
      const page = await context.newPage();
      const response = await page.goto('https://sfcc.fleetrxtest.com/signin');
      const htmlBody = await response.text();
  
  // Extract the CSRF token from the HTML body
      const csrfTokenRegex = /name="csrf_token" value="([^"]*)"/;
      const matches = htmlBody.match(csrfTokenRegex);
      const csrfToken = matches ? matches[1] : null;
      console.log(csrfToken);

    const response1 = await page.goto("https://sfcc.fleetrxtest.com/on/demandware.store/Sites-BlainsFarmFleet-Site/en_US/Account-Login?rurl=1", {
    method: 'POST',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "accept": "application/json, text/javascript, */*; q=0.01",
      "authorization": "Basic c3RvcmVmcm9udDpzZmNjVmlldzIwMjE="
    },
    body: {
      loginEmail: "automation-01@example.com",
      loginPassword: "Admin@321",
      csrf_token: csrfToken
    }
  });
  expect(response.status()).toBe(200);
  await page.goto('https://sfcc.fleetrxtest.com/my-pets', {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "accept": "application/json, text/javascript, */*; q=0.01",
      "authorization": "Basic c3RvcmVmcm9udDpzZmNjVmlldzIwMjE="
    },
    body: {
      csrf_token: csrfToken
    }
  })
})
});
