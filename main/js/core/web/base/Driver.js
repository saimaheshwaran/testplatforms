const {Builder} = require ('selenium-webdriver')

class Driver {

    #driver = null

    constructor() {
    }

    async open(browser) {
        this.#driver = await new Builder().forBrowser(browser).build()
    }

    get() {
        return this.#driver;
    }

    set(driver) {
        this.#driver = driver;
    }

    async close() {
        this.#driver.quit()
    }

}

module.exports = Driver

