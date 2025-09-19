import ghCookiesPage from "./pages/gh.cookies.page";
import ghMainPage from "./pages/gh.main.page";
import ghSignupPage from "./pages/gh.signup.page";
import ghCopilotPage from "./pages/gh.copilot.page";
import ghSubscribePage from "./pages/gh.subscribe.page";
import ghPricingPage from "./pages/gh.pricing.page";
import { Key } from 'webdriverio'

describe("Git Hub main page", () => {
  it("TC-001 - should do sign up", async () => {
    await browser.url(`https://github.com/`)

    await ghMainPage.clickOnSignUpBtn()
    await browser.pause(2000)

    if(ghCookiesPage.acceptCookiesBtn.isDisplayed()) {
      ghCookiesPage.clickOnAcceptCookies()
    }

    await expect(ghSignupPage.pageHeading).toBeDisplayed()
    await expect(ghSignupPage.textAfterHeading).toBeDisplayed()

    await ghSignupPage.setEmailInput('mailtestenko@mail.com')
    await ghSignupPage.setPasswordInput('superpuperpassword!')
    await ghSignupPage.setUsernameInput('mynewsuperusername999')

    await ghSignupPage.clickOnCreateAccountBtn()
  });

  it("TC-002 - should try GitHub Copilot", async () => {
    await browser.url(`https://github.com/`)

    await ghMainPage.brandH2.scrollIntoView()
    await expect(ghMainPage.brandH2).toHaveText('Millions of developers and businesses call GitHub home')

    await expect(ghMainPage.tryGithubCopilotLink).toBeDisplayed()
    await ghMainPage.clickOnTryCopilotBtn()

    if(ghCookiesPage.acceptCookiesBtn.isDisplayed()) {
      ghCookiesPage.clickOnAcceptCookies()
    }
    await expect(ghCopilotPage.titlePage).toHaveText('Try Copilot Pro for 30 days free')
    await ghCopilotPage.clickOnTryNowBtn()
  });

  it("TC-003 - should subscribe", async () => {
    await browser.url(`https://github.com/`)

    await ghMainPage.subscribeBtn.scrollIntoView()
    await expect(ghMainPage.subscribeBtn).toExist()
    await expect(ghMainPage.subscribeBtn).toBeClickable()
    await ghMainPage.clickOnSubscribeBtn()

    await expect(browser).toHaveUrl('https://resources.github.com/newsletter/')
    if(ghCookiesPage.acceptCookiesBtn.isDisplayed()) {
      ghCookiesPage.clickOnAcceptCookies()
    }
    await expect(ghSubscribePage.pageTitle).toHaveText('Subscribe to our developer newsletter')
    
    await ghSubscribePage.setEmailValue('testmailworkhard@workenko.com')
    await ghSubscribePage.clickOnCountryField()
    await ghSubscribePage.clickOnSpecificCountry()
    await ghSubscribePage.clickOnCheckbox()
    await ghSubscribePage.clickOnSubscribeBtn()

    await expect(ghSubscribePage.thankYouText).toHaveText('Thanks for subscribing!')
  });

  it("TC-004 - should do correct search", async () => {
    await browser.url(`https://github.com/`)

    await ghMainPage.clickOnSearchField()
    await ghMainPage.setSearchValue('act')
    await browser.keys([Key.Enter])

    const firstResult = await $('.MHoGG a')
    await expect(firstResult).toHaveAttribute('href', expect.stringContaining('act'))
  });

  it("TC-005 - should verify 'Pricing' page", async () => {
    await browser.url(`https://github.com/`)

    await ghMainPage.clickOnPricingBtn()
    await expect(ghPricingPage.pageTitle).toHaveText('Try the Copilot-powered platform')
    await ghPricingPage.clickOnCompareFeaturesBtn()
    await expect(ghPricingPage.compareFeaturesTitle).toHaveText('Compare features')
  });
})
