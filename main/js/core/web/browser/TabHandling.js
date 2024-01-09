
class TabHandling {

    #driver = null

    constructor(driver) {
        this.#driver = driver
    }

    async createNew(url) {
        await this.#driver.get().executeScript("window.open('about:blank','_blank');")
        for(let winHandle in this.#driver.get().getAllWindowHandles()) {
            await this.#driver.get().switchTo().window(winHandle)
        }
        await this.#driver.get().get(url)
    }

    async switchTo(tabTitle) {
        for(let winHandle in this.#driver.get().getAllWindowHandles()) {
            await this.#driver.get().switchTo().window(winHandle)
            if(this.#driver.getTitle() === tabTitle) break
        }
    }

    async switchToFirstTab() {
        let handles = this.#driver.get().getAllWindowHandles()
        for(let handle in handles) {
            await this.#driver.switchTo().window(handle)
            break
        }
    }

}

module.exports = TabHandling