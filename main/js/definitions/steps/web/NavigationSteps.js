const { Then, When, setWorldConstructor} = require('@cucumber/cucumber');
const StepsBase = require("../base/StepsBase");

setWorldConstructor(StepsBase)

Then('I navigate to {string} page', async function (url) {
    await this.browserhandling.toUrl(url)
});