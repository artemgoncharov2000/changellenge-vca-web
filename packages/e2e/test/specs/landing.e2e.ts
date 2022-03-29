import landingPage from "../pageobjects/landing.page";

describe('Feedback Page', () => {
    it('Should open landing page', async () => {
        await landingPage.open();
    })

    it('Should display heading title', async () => {
        await expect(landingPage.headingTitle).toBeDisplayed();
    })

    it('Should display title', async () => {
        await expect(landingPage.title).toBeDisplayed();
    })


    it('Should display subtitle', async () => {
        await expect(landingPage.subtitle).toBeDisplayed();
    })


    it('Should display button', async () => {
        await expect(landingPage.button).toBeDisplayed();
        await expect(landingPage.button).toBeClickable();
    })
})