class WorkPage {

  get searchBtn() { return $('.btn-search')}

  async clickOnSearchBtn() {
    await this.searchBtn.click()
  }
  
}

export default new WorkPage()