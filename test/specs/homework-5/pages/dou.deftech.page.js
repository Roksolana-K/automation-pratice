class DefTechPage {

  get newsSection() { return $('h3 [href="https://deftech.dou.ua/news/?from=fpnews"]') }
  get blogSection() { return $('h3 [href="https://deftech.dou.ua/blogs/?from=fpcol"]')}
  get popularSection() { return $('h3 [href="https://dou.ua/forums/tags/Defence%20tech/?from=fptopics"]')}
  
}

export default new DefTechPage()