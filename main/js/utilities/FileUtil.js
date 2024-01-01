const path = require('path')
const fs = require('fs')

filenames = []

async function readAllFileNames (startPath, filter) {
    await recurseThruFiles(startPath, filter)
    return filenames
}

async function recurseThruFiles (startPath, filter) {
    //console.log('Starting from dir '+startPath+'/');
    if (!fs.existsSync(startPath)) {
        console.log("no dir ", startPath)
        return
    }
    var files = await fs.readdirSync(startPath)
    for (let i = 0; i < files.length; i++) {
        let filename = path.join(startPath, files[i])
        let stat = fs.lstatSync(filename)
        if (stat.isDirectory()) {
            await recurseThruFiles(filename, filter) //recurse
        } else if (filename.endsWith(filter)) {
            filenames.push(filename)
            //console.log(filenames)
        }
    }
}

module.exports = { readAllFileNames }