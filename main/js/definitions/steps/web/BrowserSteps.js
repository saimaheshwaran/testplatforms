const { Given, Then, When } = require('@cucumber/cucumber');
const BrowserStepsImpl = require('../../stepsImpl/webImpl/BrowserStepsImpl')

let browserStepsImpl = new BrowserStepsImpl()

Given('I open {string} browser', async function (browser) {
    await browserStepsImpl.iOpenTheBrowser(browser)
});

Then('I close the browser', async function (browser) {
    await browserStepsImpl.iCloseTheBrowser()
});

