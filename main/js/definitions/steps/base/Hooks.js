let { setWorldConstructor, Before } = require('@cucumber/cucumber');
let { BaseStepsImpl } = require('../../stepsImpl/baseImpl/BaseStepsImpl');

setWorldConstructor(BaseStepsImpl)

Before(async function (scenario) {
    await this.initializeDriver(scenario)
})