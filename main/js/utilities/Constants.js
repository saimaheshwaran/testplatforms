const PropertiesReader = require('properties-reader');
const findRoot = require('find-root')
const path = require('path')

class Constants {

    ROOT_PATH = null
    MAIN_PATH = null
    TEST_PATH = null
    MAIN_RESOURCE_PATH = null
    TEST_RESOURCE_PATH = null

    #properties = null
    BROWSER_TYPE = null
    APPL_PATH = null
    APPL_DATA_PATH = null
    APPL_DATA_FILE_EXT = null
    APPL_DATA_INPUT_PATH = null
    APPL_DATA_OUTPUT_PATH = null

    constructor() {
        this.ROOT_PATH = findRoot(__dirname) + path.sep
        this.MAIN_PATH = this.ROOT_PATH + 'main' + path.sep
        this.TEST_PATH = this.ROOT_PATH + 'test' + path.sep
        this.MAIN_RESOURCE_PATH = this.MAIN_PATH + 'resources' + path.sep
        this.TEST_RESOURCE_PATH = this.TEST_PATH + 'resources' + path.sep

        this.#properties = PropertiesReader(this.MAIN_RESOURCE_PATH + 'cucumber.properties')
        this.BROWSER_TYPE = this.#properties.get('browser')
        this.APPL_PATH = this.TEST_RESOURCE_PATH + this.#properties.get('application') + path.sep
        this.APPL_DATA_PATH = this.APPL_PATH + 'data' + path.sep
        this.APPL_DATA_FILE_EXT = this.#properties.get('page.object.type')
        this.APPL_DATA_INPUT_PATH = this.APPL_DATA_PATH + 'input' + path.sep
        this.APPL_DATA_OUTPUT_PATH = this.APPL_DATA_PATH + 'output' + path.sep
    }

}

module.exports = Constants