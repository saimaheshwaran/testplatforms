const BaseStepsImpl = require('../baseImpl/BaseStepsImpl')

class BrowserStepsImpl extends BaseStepsImpl {

    constructor() {
        super();
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