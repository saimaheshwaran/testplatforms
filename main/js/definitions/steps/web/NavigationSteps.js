const { Then, When, setWorldConstructor} = require('@cucumber/cucumber');
const StepsBase = require("../base/StepsBase");

setWorldConstructor(StepsBase)

Then(/I navigate to "([^"]*)"$/, async function (url) {
    await this.browserhandling.toUrl(url)
});

Then(/I navigate to ([^"]*)$/, async function (url) {
    await this.browserhandling.toUrl(this.objects.getValue(url))
});

Then(/I navigate forward$/, async function () {
    await this.browserhandling.forward()
});

Then(/I navigate back$/, async function () {
    await this.browserhandling.back()
});

Then(/I refresh page$/, async function () {
    await this.browserhandling.refresh()
});

Then(/I switch to new window$/, async function () {

});