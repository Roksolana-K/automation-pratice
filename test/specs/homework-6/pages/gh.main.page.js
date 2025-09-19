class MainPage {

  get pricingBtn() { return $('a[href="https://github.com/pricing"]')}
  get searchFieldBtn() { return $('.search-input-container')}
  get searchInput() { return $('#query-builder-test')}
  get signUpBtn () { return $('.HeaderMenu-link--sign-up') }
  get brandH2 () { return $('.Primer_Brand__Heading-module__Heading--1___Ufc7G') }
  get tryGithubCopilotLink () { return $('.Primer_Brand__Section-module__Section___wNnZR a[href="/github-copilot/pro"]')}
  get subscribeBtn () { return $('.btn-mktg')}

  async clickOnPricingBtn() {
    await this.pricingBtn.click()
  }
  async clickOnSearchField() {
    await this.searchFieldBtn.click()
  }
  async setSearchValue(value) {
    await this.searchInput.addValue(value)
  }
  async clickOnSignUpBtn() {
    await this.signUpBtn.click()
  }
  async clickOnTryCopilotBtn() {
    await this.tryGithubCopilotLink.click()
  }
  async clickOnSubscribeBtn() {
    await this.subscribeBtn.click()
  }
}

export default new MainPage()