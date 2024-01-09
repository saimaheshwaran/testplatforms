const { Given, Then, When, setWorldConstructor} = require('@cucumber/cucumber');
let BaseStepsImpl = require('../../stepsImpl/baseImpl/BaseStepsImpl')

setWorldConstructor(BaseStepsImpl)

Then('I wait for {int} seconds', async function (seconds) {
    await this.waits.forSecond(seconds).then()
});