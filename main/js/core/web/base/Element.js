const {By} = require('selenium-webdriver')
const Waits = require('./Waits')

class Element {

    #driver = null
    #element = null
    #wait = null

    constructor(driver) {
        this.#driver = driver
        this.#wait = new Waits()
    }

    async get(locator) {
        this.#element = this.#driver.get().findElement(locator)
        await this.scrollTo(this.#element)
        return this.#element
    }

    async scrollTo(element) {
        this.#element = element
        await this.#driver.get().executeScript("arguments[0].scrollIntoView(true);", this.#element)
        await this.#driver.get().executeScript("arguments[0].setAttribute('style','background:GreenYellow; border: 0px solid blue;')", this.#element)
        await this.#wait.forMilliSecond(100)
        await this.#driver.get().executeScript("arguments[0].setAttribute('style','background:; border: 0px solid blue;')", this.#element)
    }
}

module.exports = Element