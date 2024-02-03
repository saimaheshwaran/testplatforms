const { Given, Then, When, setWorldConstructor} = require('@cucumber/cucumber')
const StepsBase = require("../base/StepsBase")

setWorldConstructor(StepsBase)

Given(/I open ([^"]*) browser/, async function (browser) {
    if(browser === 'default')
        await this.driver.open(this.constants.BROWSER_TYPE)
    else
        await this.driver.open(browser)
});

Then(/I close the browser/, async function (browser) {
    await this.driver.close()
});

