const BaseStepsImpl = require('../baseImpl/BaseStepsImpl')

class NavigationStepsImpl extends BaseStepsImpl {

    constructor() {
        super();
    }

    async iNavigateTo(url) {
        await this.browserhandling.toUrl(url)
    }

    async iNavigateBack() {
        await this.browserhandling.back()
    }

    async iNavigateForward() {
        await this.browserhandling.forward()
    }

    async iNavigateRefresh() {
        await this.browserhandling.refresh()
    }

}

module.exports = NavigationStepsImpl