import feedbackPage from "../pageobjects/feedback.page"

describe('Feedback Page', () => {
    it('should open Feedback page', async () => {
        await feedbackPage.open();
    })

    it('Should display title', async () => {
        await expect(feedbackPage.title).toBeDisplayed();
    })


    it('Should display subtitle', async () => {
        await expect(feedbackPage.subtitle).toBeDisplayed();
    })


    it('Should display link', async () => {
        await expect(feedbackPage.link).toBeDisplayed();
    })
})