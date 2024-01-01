const Driver = require('../../../main/js/core/web/base/Driver')
const Browsing = require('../../../main/js/core/web/browser/BrowserHandling')
const Objects = require("../../../main/js/core/data/Objects")
const Element = require("../../../main/js/core/web/base/Element")
const Waits = require("../../../main/js/core/web/base/Waits")

test1()

async function test1() {

    driver = new Driver()
    browsing = new Browsing(driver)
    element = new Element(driver)
    object = new Objects()
    wait = new Waits()

    await driver.open('chrome').then(()=> {
        browsing.toUrl('http://www.google.com')
    })

    object.get('home.searchbox').then((o)=> {
        element.get(o).then((op)=> {
        op.sendKeys('Sathya Sai Baba')
        })
    }).then(wait.forSecond(5))

}



