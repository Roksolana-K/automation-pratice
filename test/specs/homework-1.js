describe('[Homework-1] WebDriverIO main page', () => {
  it('should navigate and check elements', async () => {
    // open the main page
    await browser.url('https://webdriver.io/');

    // go to API page
    const apiLink = await $('a=API');
    await browser.pause(2000);
    await apiLink.click();
    await browser.pause(4000);

    // check if the URL is correct
    await expect(browser).toHaveUrl('https://webdriver.io/docs/api');

    // check that H1 says 'Introduction'
    const h1 = await $('h1');
    await expect(h1).toHaveText('Introduction');

    // check that we have 'Introduction' in breadcrumbs
    const breadCrumbsList = await $('.breadcrumbs__item--active');
    await expect(breadCrumbsList).toHaveText('Introduction');

    // check that 'WebDriver' link is correct
    const link = await $('a=WebDriver');
    await expect(link).toHaveHref('/docs/api/webdriver');

    // click on Search
    const searchField = await $('.DocSearch-Button-Container');
    await browser.pause(2000);
    await searchField.click();
    await browser.pause(2000);

    // input 'all is done' in search field and delete
    const searchInput = await $('#docsearch-input');
    await searchInput.setValue('all is done');
    await browser.pause(3000);

    await searchInput.clearValue();
    await browser.pause(5000);
  });
});
