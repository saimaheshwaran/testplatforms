const mergeYaml = require('merge-yaml')
const fileUtil = require('../../utilities/FileUtil')
const findRoot = require('find-root')
const Constants = require('../../utilities/Constants')

class Objects {

    fields = null

    constructor() {
        this.#initialize().then(() => {})
    }

    async #initialize() {
        let constants = new Constants()
        let filePath = constants.APPL_DATA_INPUT_PATH
        let fileExtension = '.' + constants.APPL_DATA_FILE_EXT
        this.fields = await mergeYaml(await fileUtil.readAllFileNames(filePath, fileExtension))
    }

    async get(objName) {
        let splits = objName.split('.')
        let keyValuePair = {};
        for (let locator in this.fields[splits[0]][splits[1]])
            if (!(locator === 'value') || (locator === ''))
                switch (locator.toLowerCase()) {
                    case 'id':
                    case 'css':
                    case 'name':
                    case 'xpath':
                    case 'tagname':
                    case 'linktext':
                    case 'classname':
                    case 'partiallinktext':
                        keyValuePair[locator.toLowerCase()] = this.fields[splits[0]][splits[1]][locator]
                        return keyValuePair;
                }
    }

    async getValue(objName) {
        let splits = objName.split('.')
        let keyValue = {};
        for (let locator in this.fields[splits[0]][splits[1]])
            if (!(locator === ''))
                switch (locator.toLowerCase()) {
                    case 'value':
                        return this.fields[splits[0]][splits[1]][locator]
                }
    }
}

module.exports = Objects