const {Action} = require("selenium-webdriver/lib/input");

class WindowManipulation {

    #driver = null

    constructor(driver) {
        this.#driver = driver
    }

    async zoomInOutTillElementDisplay(locator) {
        let action = new Action(this.#driver)
    }

}