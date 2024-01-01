const Waits = require('../../../core/web/base/Waits')
const Driver = require("../../../core/web/base/Driver");
const Objects = require("../../../core/data/Objects");
const BrowserHandling = require('../../../core/web/browser/BrowserHandling')
const Constants = require('../../../utilities/Constants')

class BaseStepsImpl {

    waits = null
    driver = null
    objects = null
    constants = null
    browserhandling = null


    constructor() {
        this.#initializeDriver()
    }

    #initializeDriver(driver) {
        this.waits = new Waits()
        this.driver = new Driver()
        this.objects = new Objects()
        this.constants = new Constants()
        this.browserhandling = new BrowserHandling(this.driver)
    }

}

module.exports = BaseStepsImpl