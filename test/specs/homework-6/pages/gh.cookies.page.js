class CookiesPage {

  get acceptCookiesBtn() { return $('button*=Accept')}

  async clickOnAcceptCookies () {
  await this.acceptCookiesBtn.click()
  }
}

export default new CookiesPage()