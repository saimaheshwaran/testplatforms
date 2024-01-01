const {Builder, WebDriver} = require('selenium-webdriver');

class Waits {

    constructor() {
    }

    async forSecond(sec) {
        await new Promise(resolve => setTimeout(resolve, sec * 1000))
    }

    async forMinute(min) {
        await new Promise(resolve => setTimeout(resolve, min * 60 * 1000))
    }

    async forMilliSecond(milli) {
        await new Promise(resolve => setTimeout(resolve, milli))
    }
}

module.exports = Waits