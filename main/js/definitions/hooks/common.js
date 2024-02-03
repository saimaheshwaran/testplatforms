const { setWorldConstructor, Before } = require('@cucumber/cucumber')
const StepsBase = require("../steps/base/StepsBase")

setWorldConstructor(StepsBase)

Before(async function (scenario) {
    await this.initialize()
})