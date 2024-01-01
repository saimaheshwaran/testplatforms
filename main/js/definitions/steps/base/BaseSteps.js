const { Given, Then, When } = require('@cucumber/cucumber');
let BaseStepsImpl = require('../../stepsImpl/baseImpl/BaseStepsImpl')

let baseStepsImpl = new BaseStepsImpl()

Then('I wait for {int} seconds', async function (seconds) {
    await baseStepsImpl.waits.forSecond(seconds).then()
});