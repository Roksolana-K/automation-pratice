class PricingPage {

  get pageTitle() { return $('h1[class="h2-mktg"]')}
  get compareFeaturesBtn() { return $('a[href="#compare-features"]')}
  get compareFeaturesTitle() { return $('h1[class="h1"]')}

  async clickOnCompareFeaturesBtn () {
    await this.compareFeaturesBtn.scrollIntoView()
    await this.compareFeaturesBtn.click()
  }
}

export default new PricingPage()