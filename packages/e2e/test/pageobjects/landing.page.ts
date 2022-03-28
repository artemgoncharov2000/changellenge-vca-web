import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get headingTitle () {
        return $('[data-test-id="landing-heading-title"]');
    }

    public get title () {
        return $('[data-test-id="landing-title"]')
    }

    public get subtitle () {
        return $('[data-test-id="landing-subtitle"]');
    }
    
    public get button () {
        return $('[data-test-id="landing-button"]');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
     public open () {
        return super.open('');
    }
}

export default new LandingPage();