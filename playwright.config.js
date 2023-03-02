
import { defineConfig, devices } from '@playwright/test';
export const projects = [
	{
		name: `Chrome`,
		use: {
			browserName: `chromium`,
			channel: `chrome`,
			headless: false,
			viewport: { width: 1720, height: 850 },
			screenshot: `only-on-failure`,
			video: `retain-on-failure`,
			trace: `retain-on-failure`
		}
	},
	{
		name: `Firefox`,
		use: {
			browserName: `firefox`,
			viewport: { width: 1720, height: 850 },
			ignoreHTTPSErrors: true,
			headless: false,
			screenshot: `only-on-failure`,
			video: `retain-on-failure`,
			trace: `retain-on-failure`,
			launchOptions: {
			slowMo: 200
			}
		}
	},
	{
		name: `Safari`,
		use: {
			browserName: `webkit`,
			viewport: { width: 1720, height: 850 },
			ignoreHTTPSErrors: true,
			screenshot: `only-on-failure`,
			video: `retain-on-failure`,
			trace: `retain-on-failure`
		}
	},
]

export default defineConfig({
    testMatch: ['tests/account_login_logout.test.js'], 
    
    use:{
        headless: false,
		trace: 'on'
      },
      reporter: [
        [
          'html',
          {
            open: 'always'
          },
        ],
      ],

      globalSetup: "globalSetup.ts"

});