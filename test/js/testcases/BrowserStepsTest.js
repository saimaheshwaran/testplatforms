const Driver = require('../../../main/js/core/web/base/Driver')
const Browsing = require('../../../main/js/core/web/browser/BrowserHandling')
const Waits = require("../../../main/js/core/web/base/Waits")
const test = require('node:test')

test('Driver chrome open/close test', async (t) => {
    driver = new Driver()
    wait = new Waits()

    await driver.open('chrome')
    await wait.forSecond(2)
    await driver.close()
});

test('Driver firefox open/close test', async (t) => {
    driver = new Driver()
    wait = new Waits()

    await driver.open('firefox')
    await wait.forSecond(2)
    await driver.close()
});

test('Browser Navigation test', async (t) => {
    driver = new Driver()
    wait = new Waits()
    browsing = new Browsing(driver)

    await driver.open('chrome')
    await browsing.toUrl('http://www.google.com/')
    await wait.forSecond(2)
    await browsing.toUrl('http://www.youtube.com/')
    await wait.forSecond(2)
    await browsing.back()
    await wait.forSecond(2)
    await browsing.forward()
    await wait.forSecond(2)
    await browsing.refresh()
    await wait.forSecond(2)
    await driver.close()
});




