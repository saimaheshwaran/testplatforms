const {setWorldConstructor, Then} = require("@cucumber/cucumber")
const StepsBase = require("../base/StepsBase")

setWorldConstructor(StepsBase)

Then('I wait for {int} milliseconds', async function (milli) {
    await this.waits.forMilliSecond(milli).then()
});

Then('I wait for {int} seconds', async function (seconds) {
    await this.waits.forSecond(seconds).then()
});

Then('I wait for {int} minutes', async function (minutes) {
    await this.waits.forMinute(minutes).then()
});