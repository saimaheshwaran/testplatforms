const { Then, When, setWorldConstructor} = require('@cucumber/cucumber')
const StepsBase = require("../base/StepsBase")

setWorldConstructor(StepsBase)

Then(/I navigate to "([^"]*)"$/, async function (url) {
    await this.browserHandling.toUrl(url)
});

Then(/I navigate to ([^"]*)$/, async function (url) {
    await this.browserHandling.toUrl(this.objects.getValue(url))
});

Then(/I navigate forward$/, async function () {
    await this.browserHandling.forward()
});

Then(/I navigate back$/, async function () {
    await this.browserHandling.back()
});

Then(/I refresh page$/, async function () {
    await this.browserHandling.refresh()
});

Then(/I switch to new window$/, async function () {
    await this.windowHandling.switchToNewWindow()
});

Then(/I switch to previous window$/, async function () {
    await this.windowHandling.switchToPreviousWindow()
});

Then(/I switch to new tab$/, async function () {

});

Then(/I switch to previous tab$/, async function () {

});

Then(/I switch to window with title (.+)$/, async function (title) {
    this.windowHandling.switchToWindowByTitle(title)
});

Then(/I close new window$/, async function () {

});