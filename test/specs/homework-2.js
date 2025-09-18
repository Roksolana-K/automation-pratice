describe('[Homework-2] WebDriverIO API page', () => {
  it('should scroll and verify Protocol Commands link', async () => {
    // open the main page
    await browser.url('https://webdriver.io');

    // click on API link
    const apiLink = await $('nav a[href="/docs/api"]');
    await apiLink.click();
    await browser.pause(5000);

    // scroll API page down and check if "Blog" link is displayed
    const blogLink = await $('.footer__link-item[href="/blog"]');
    await browser.pause(3000);
    await blogLink.scrollIntoView();
    await browser.pause(3000);

    // check that "Protocol Commands" link is visible and clickable
    const protocolLink = await $('.pagination-nav__label');
    const isDisplayedProtocolLink = await protocolLink.isDisplayed();
    console.log('Protocol Command Link is displayed: ' + isDisplayedProtocolLink);

    const isClickableProtocolLink = await protocolLink.isClickable();
    console.log('Protocol Command Link is clickable: ' + isClickableProtocolLink);

    // take getHTML of link above
    const outerHTML = await protocolLink.getHTML();
    console.log('Outer HTML: ' + outerHTML);

    const innerHTML = await protocolLink.getHTML(false);
    console.log('Inner HTML: ' + innerHTML);

    // click on 'Protocol Commands' and then waitUntil heading 'WebDriver Protocol' appears
    await protocolLink.click();
    await browser.waitUntil(async () => {
      return $('#webdriver-protocol').isDisplayed();
    }, 5000, "Heading 'WebDriver Protocol' is not displayed");
  });
});
