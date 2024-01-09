const BaseStepsImpl = require('../baseImpl/BaseStepsImpl')

class BrowserStepsImpl {

    driver = null

    constructor(drivers) {
        this.driver = drivers
    }

    async iOpenTheBrowser(browser) {

        if(browser === 'default')
            await this.driver.open(this.constants.BROWSER_TYPE)
        else
            await this.driver.open(browser)
    }

    async iCloseTheBrowser() {
        await this.driver.close()
    }

}

module.exports = BrowserStepsImpl