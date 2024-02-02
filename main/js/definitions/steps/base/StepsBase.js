const {World} = require("@cucumber/cucumber");
const Waits = require("../../../utilities/Waits");
const Driver = require("../../../core/web/base/Driver");
const Objects = require("../../../core/data/Objects");
const Constants = require("../../../utilities/Constants");
const BrowserHandling = require("../../../core/web/browser/BrowserHandling");

class StepsBase extends World {

    waits = null
    driver = null
    objects = null
    constants = null
    browserhandling = null

    constructor(options) {
        super(options)
    }

    async initialize() {
        this.driver = new Driver()
        this.objects = new Objects()
        this.constants = new Constants()
        this.waits = new Waits(this.driver)
        this.browserhandling = new BrowserHandling(this.driver)
    }

}

module.exports = StepsBase