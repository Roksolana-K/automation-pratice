class SignUpPage {

  get pageHeading() { return $('.signups-rebrand__container-h1')}
  get textAfterHeading() { return $('.signups-rebrand__container-content .mt-2')}
  get email() { return $('#email')}
  get password() { return $('#password')}
  get username() { return $('#login')}
  get createAccountBtn() { return $('.js-octocaptcha-load-captcha')}


  async setEmailInput(value) {
    await this.email.addValue(value)
  }
  async setPasswordInput(value) {
    await this.password.addValue(value)
  }
  async setUsernameInput(value) {
    await this.username.addValue(value)
  }
  async clickOnCreateAccountBtn() {
    await this.createAccountBtn.click()
  }

}

export default new SignUpPage()