const {Builder, WebDriver, By, until} = require('selenium-webdriver')
const Element = require('Element')

class Waits {

    #driver = null
    #element = null

    constructor(driver) {
        this.#driver = driver
        this.#element = new Element(driver)
    }

    async waitForAjaxCall(locator) {
        let by = await this.#element.getBy(locator)
        let elements = await this.#driver.get().findElements(by)
        let size = await elements.size()
        if (size > 0)
            await this.#driver.get().wait(until.elementLocated(by), 10000)
    }

    async waitForJSandJQueryToLoad() {
        let jQueryLoad = await this.#driver.get().executeScript("return jQuery.active").equals(0)
        let jsLoad = await this.#driver.get().executeScript("return document.readyState").equals('complete')
        return jQueryLoad && jsLoad
    }

}

module.exports = Waits