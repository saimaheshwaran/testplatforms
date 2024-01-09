const { Then, When, setWorldConstructor} = require('@cucumber/cucumber');
const NavigationStepsImpl = require('../../stepsImpl/webImpl/NavigationStepsImpl')
const BaseStepsImpl = require("../../stepsImpl/baseImpl/BaseStepsImpl");

setWorldConstructor(BaseStepsImpl)

Then('I navigate to {string} page', async function (url) {
    let navigationStepsImpl = new NavigationStepsImpl(this.browserhandling)
    await navigationStepsImpl.iNavigateTo(url)
});