const {Builder, Browser, By, Key, WebElement} = require ('selenium-webdriver');

class Driver {

    constructor() {
    }

    async open (browser) {
        this.driver = await new Builder()
        .forBrowser(browser)
        //.usingServer('http://localhost:4444/wd/hub')
        .build();
    }

    async close () {
        await this.driver.quit();
    }

    async sleep (sec) {
         await new Promise(resolve => setTimeout(resolve, sec * 1000));
    }

}

module.exports = Driver;

