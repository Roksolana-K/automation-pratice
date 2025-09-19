class SubscribePage {

  get pageTitle() { return $('.Primer_Brand__Grid-module__Grid__column___HTpsw h1')}
  get emailInput() { return $('input[type="email"]')}
  get countryField() { return $('#country')}
  get selectCountry() { return $('option[value="UA"]')}
  get checkbox() { return $('input[type="checkbox"]')}
  get subscribeBtn() {return $('button=Subscribe')}
  get thankYouText() {return $('.Primer_Brand__Stack-module__Stack___tASKe h1')}

  async setEmailValue(value) {
    await this.emailInput.scrollIntoView()
    await this.emailInput.addValue(value)
  }
  async clickOnCountryField() {
    await this.countryField.scrollIntoView()
    await this.countryField.click()
  }
  async clickOnSpecificCountry() {
    await this.selectCountry.click()
  }
  async clickOnCheckbox() {
    await this.checkbox.click()
  }
  async clickOnSubscribeBtn() {
    await this.subscribeBtn.scrollIntoView()
    await this.subscribeBtn.click()
  }
}

export default new SubscribePage()