const { Then, When } = require('@cucumber/cucumber');
const NavigationStepsImpl = require('../../stepsImpl/webImpl/NavigationStepsImpl')

let navigationStepsImpl = new NavigationStepsImpl()

Then(   'I navigate to {string} page', async function (url) {
    await navigationStepsImpl.iNavigateTo(url)
});