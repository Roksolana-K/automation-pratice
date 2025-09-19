class CopilotPage {

  get titlePage() { return $('.container-md h1')}
  get tryNowBtn() { return $('button=Try now')}
  


  async clickOnTryNowBtn () {
    await this.tryNowBtn.click()
  }
}

export default new CopilotPage()