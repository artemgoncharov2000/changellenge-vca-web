import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SuggestPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get navBar () {
        return $('[data-test-id="nav-bar"]');
    }

    public get feedBackLink () {
        return $('[data-test-id="feedback-link"]');
    }    

    async getNavBarBtn(name: string) {
        return await $(`[data-test-id="nav-bar-button_${name}"]`);
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('suggest/224');
    }
}

export default new SuggestPage();
