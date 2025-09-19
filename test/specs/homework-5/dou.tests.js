import MainPage from "./pages/dou.main.page"
import WorkPage from "./pages/dou.work.page"
import DefTechPage from "./pages/dou.deftech.page"

describe("Dou website", () => {
  it("should pass all", async () => {
    // open main page
    await browser.url(`https://dou.ua/`)

    //go to 'Salaries' page
    await MainPage.clickOnSalariesBtn()

    //check the word 'квартиль'
    const keyword = await $('#q1 .dws-block-header')
    await expect(keyword).toHaveText('I КВАРТИЛЬ')

    //go to 'Work' page
    await MainPage.clickOnWorkBtn()

    //check 'Search' btn is visible, click on it
    await expect(WorkPage.searchBtn).toBeDisplayed()
    await WorkPage.clickOnSearchBtn()

    //'Швидкий перехід:' is written
    const jobSearchForm = await $('.example')
    const formText = await jobSearchForm.getText()
    await expect(formText).toContain('Швидкий перехід:')

    // go to 'DefTech'
    await browser.waitUntil(
      async () => await MainPage.defTechBtn.isDisplayed(),
      { timeout: 10000, timeoutMsg: 'DefTech btn never became displayed' }
    )
    await MainPage.clickOnDefTechBtn()

    //check that "Новини", "Блоги", "Популярне на форумі" sections exist
    await expect(DefTechPage.newsSection).toHaveText('Новини')
    await expect(DefTechPage.blogSection).toHaveText('Блоги')
    await expect(DefTechPage.popularSection).toHaveText('Популярне на форумі')

  });
})
