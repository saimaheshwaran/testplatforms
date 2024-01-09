const Driver = require("../base/Driver");

class BrowserHandling {

    #driver = null

    constructor(driver) {
        this.#driver = driver
    }

    async toUrl(url) {
        await this.#driver.get().navigate().to(url)
    }

    async back() {
        await this.#driver.get().navigate().back()
    }

    async forward() {
        await this.#driver.get().navigate().forward()
    }

    async refresh() {
        await this.#driver.get().navigate().refresh()
    }

}

module.exports = BrowserHandling
