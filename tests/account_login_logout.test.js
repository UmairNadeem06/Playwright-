
import selector from '../allivet_locators.json';
import { test, request , expect , chromium} from '@playwright/test';
import {credentials}  from '../testData/creds';
const loginPayLoad = { loginEmail: "automation-01@example.com", loginPassword: "Admin@321" }
test.setTimeout(50000);
// let csrfToken;
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
      // await page.goto(process.env.BASE_URL, {timeout: 50000});
      // console.log (await page.title());
      const response = await page.goto('https://sfcc.fleetrxtest.com/signin');
      const htmlBody = await response.text();
  
  // Extract the CSRF token from the HTML body
      const csrfTokenRegex = /name="csrf_token" value="([^"]*)"/;
      const matches = htmlBody.match(csrfTokenRegex);
      const csrfToken = matches ? matches[1] : null;
      console.log(csrfToken);

    //   page.goto("https://sfcc.fleetrxtest.com/signin");
    //   await page.waitForLoadState('networkidle')
    // // Wait for the HTML form to appear on the page.
    // await page.waitForSelector('form[name= "login-form"]');
    // // Extract the CSRF token from the HTML form using a JavaScript function.
    // const csrfToken = await page.evaluate(() => {
    //   const form = document.querySelector('form[name= "login-form"]');
    //   return form.querySelector('form[name= "login-form"] input[type="hidden"][name="csrf_token"]').value;
    // });
  
    // console.log(`CSRF token: ${csrfToken}`);

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
    // const headers = {
    //     "Content-Type": "application/json-patch+json",
    //     "accept": "application/json"
    //   }
    //   const apiContext = await request.newContext({
    //     extraHTTPHeaders: headers,
    //    });
    //   const response = await apiContext.post("https://sfcc.fleetrxtest.com/on/demandware.store/Sites-BlainsFarmFleet-Site/en_US/Account-Login?rurl=1", {
    //     headers,
    //     body: {
    //       loginEmail: "automation-01@example.com",
    //       loginPassword: "Admin@321",
    //       csrf_token: csrfToken
    //     }
    //   });
    //   expect(response.status()).toBe(200);


    
// });
// test(' fetch api' , async () => {
//   // const headers = {
//   //   "Content-Type": "application/json-patch+json",
//   //   "accept": "application/json"
//   // }
//   // const apiContext = await request.newContext({
//   //   extraHTTPHeaders: headers,
//   //  });
//   const response = await page.goto("https://sfcc.fleetrxtest.com/on/demandware.store/Sites-BlainsFarmFleet-Site/en_US/Account-Login?rurl=1", {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
//       "accept": "application/json, text/javascript, */*; q=0.01",
//       "authorization": "Basic c3RvcmVmcm9udDpzZmNjVmlldzIwMjE="
//     },
//     body: {
//       loginEmail: "automation-01@example.com",
//       loginPassword: "Admin@321",
//       csrf_token: csrfToken
//     }
//   });
//   expect(response.status()).toBe(200);
// })
});
