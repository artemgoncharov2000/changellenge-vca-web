import SuggestPage from  '../pageobjects/suggest.page';
import FeedbackPage from '../pageobjects/feedback.page';

describe('Suggest page', () => {
    it('should open suggest page', async () => {
        await SuggestPage.open();
    });

    it('should contain nav bar', async () => {
        await expect(SuggestPage.navBar).toBeDisplayed();
    })

    it('should display vacancy card', async () => {
        await (await SuggestPage.getNavBarBtn("Вакансии")).click();
        // await browser.pause(2000);
    });

    it('should display event card', async () => {
        await (await SuggestPage.getNavBarBtn("Мероприятия")).click();
        // await browser.pause(2000);
    });

    it('should display course card', async () => {
        await (await SuggestPage.getNavBarBtn("Курсы")).click();
        // await browser.pause(2000);
    });

    it('should display article card', async () => {
        await (await SuggestPage.getNavBarBtn("Полезные статьи")).click();
        // await browser.pause(2000);
    });

    it('should contain "Расскажи о своих впечатлениях" link', async () => {
        await expect(SuggestPage.feedBackLink).toBeDisplayed();
        await expect(SuggestPage.feedBackLink).toBeClickable();
        await expect(SuggestPage.feedBackLink).toHaveText("Расскажите о своих впечатлениях");
    })
});


