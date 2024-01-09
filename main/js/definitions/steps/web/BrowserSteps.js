const { Given, Then, When, setWorldConstructor} = require('@cucumber/cucumber');
const BrowserStepsImpl = require('../../stepsImpl/webImpl/BrowserStepsImpl')
const BaseStepsImpl = require("../../stepsImpl/baseImpl/BaseStepsImpl");

setWorldConstructor(BaseStepsImpl)

Given('I open {string} browser', async function (browser) {
    let browserStepsImpl = new BrowserStepsImpl(this.driver)
    await browserStepsImpl.iOpenTheBrowser(browser)
});

Then('I close the browser', async function (browser) {
    let browserStepsImpl = new BrowserStepsImpl(this.driver)
    await browserStepsImpl.iCloseTheBrowser()
});

