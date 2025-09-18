class MainPage {

  get salariesBtn() { return $('a[href="https://jobs.dou.ua/salaries/"]') }
  get workBtn() { return $('a[href="https://jobs.dou.ua/"]') }
  get defTechBtn() { return $('.menu-site__deftech') }

  async clickOnSalariesBtn() {
    await this.salariesBtn.click()
  }
  async clickOnWorkBtn() {
    await this.workBtn.click()
  }
  async clickOnDefTechBtn() {
    await this.defTechBtn.click()
  }
}

export default new MainPage()