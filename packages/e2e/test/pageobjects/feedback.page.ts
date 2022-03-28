import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FeedbackPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get title () {
        return $('[data-test-id="feedback-title"]')
    }

    public get subtitle () {
        return $('[data-test-id="feedback-subtitle"]');
    }
    
    public get link () {
        return $('[data-test-id="feedback-link"]');
    }
     /**
     * overwrite specific options to adapt it to page object
     */
      public open () {
        return super.open('feedback');
    }
}

export default new FeedbackPage();
