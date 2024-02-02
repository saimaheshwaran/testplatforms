const {error} = require("selenium-webdriver");

class WindowHandling {

    #driver = null
    #previous_handle = null
    #last_handle = null

    constructor(driver) {
        this.#driver = driver;
    }

    async handleAlert(decision) {
        if(decision.equals("accept"))
            await this.#driver.get().switchTo().alert().accept()
        else
            await this.#driver.get().switchTo().alert().dismiss()
    }

    async alertText() {
        return await this.#driver.get().switchTo().alert().getText()
    }

    async switchToNewWindow() {
        this.#previous_handle = await this.#driver.get().getWindowHandle()
        for(let winHandle in await this.#driver.get().getAllWindowHandles())
            this.#last_handle = winHandle
        await this.#driver.get().switchTo().window(this.#last_handle)
    }

    async switchToPreviousWindow() {
        await this.#driver.get().switchTo().window(this.#previous_handle)
    }

    async switchToWindowByTitle(title) {
        this.#previous_handle = await this.#driver.get().getWindowHandle()
        let winFound = false
        for(let winHandle in await this.#driver.get().getAllWindowHandles()) {
            let str = await this.#driver.get().switchTo().window(winHandle).getTitle()
            if(str.equals(title)) {
                winFound = true
                break
            }
        }
        if(!winFound)
            await new Error('Window having title ' + title + ' not found')
        else
            await this.#driver.get().switchTo().window(title)
    }

}