import { Key } from 'webdriverio'

describe("Git Hub test", async () => {
  it(" TC-GH-001 - should redirect to 'Pricing' page and URL contains '/pricing'", async () => {
    // open GitHub main page
    await browser.url(`https://github.com/`);

    // click on 'Pricing' (top nav)
    const pricingLink = await $('a[href="https://github.com/pricing"]')
    await pricingLink.click()
    await browser.pause(3000)

    // check url contains '/pricing'
    const newURL = await browser.getUrl()
    await expect(newURL).toContain('/pricing')
  });

  it(" TC-GH-002 - search result related to entered keyword", async () => {
    // open GitHub main page
    await browser.url(`https://github.com/`);

    // focus search and type "javascript"
    const searchField = await $('.search-input-container')
    await searchField.click()
    await browser.pause(2000)

    const inputField = await $('#query-builder-test')
    await inputField.addValue("javascript")
    await browser.pause(2000)
    await browser.keys([Key.Enter])
    await browser.pause(2000)

    // check url reflects the query
    const newURL = await browser.getUrl()
    await expect(newURL).toContain('/search?q=javascript&type=repositories')

    // check first match contains the keyword
    const firstResultLink = await $('a.prc-Link-Link-85e08')
    const href = await firstResultLink.getAttribute('href')
    await expect(href).toContain('javascript')
  });

  it(" TC-GH-003 - should open 'Sign up' page, URL has ‘/signup’ and ‘Sign up for GitHub’ is visible", async() => {
    // open GitHub main page
    await browser.url(`https://github.com/`);

    // click on "Sign up for GitHub"
    const signUpButton = await $('.CtaForm .Primer_Brand__Button-module__Button___lDruK')
    await signUpButton.click()
    await browser.pause(3000)

    // check url and heading
    const newURL = await browser.getUrl()
    await expect(newURL).toContain('/signup')

    const pageTitle = await $('h2')
    await expect(pageTitle).toHaveText('Sign up for GitHub')
  });

  it(" TC-GH-004 - should appear error messages for empty fields", async () => {
    // open sign up page
    await browser.url(`https://github.com/signup`);

    // accept cookies
    await browser.pause(3000)
    const cookiesAcceptButton = await $('button*=Accept')
    if(await cookiesAcceptButton.isDisplayed()){
      cookiesAcceptButton.click()
    }
    
    // click "Create an account" with empty fields
    const createAccountButton = await $('button[data-target="signup-form.SignupButton"]')
    await createAccountButton.scrollIntoView()
    await createAccountButton.click()
    await browser.pause(3000)

    // check email error appears
    const emailContainer = await $('#email-container p')
    await expect(emailContainer).toHaveText('Email cannot be blank')

    // check password error appears
    const passwordContainer = await $('#password-container p')
    await expect(passwordContainer).toHaveText('Password cannot be blank')

    // check username error appears
    const usernameContainer = await $('#username-container p')
    await expect(usernameContainer).toHaveText('Username cannot be blank')
  });

  it("TC-GH-005 - 'Shop' link should be visible and clickable", async () => {
    // open GitHub main page
    await browser.url(`https://github.com/`)

    // go to footer 'Shop' link
    const shopLink = await $('a[href="https://shop.github.com"]')
    await shopLink.scrollIntoView()
    await browser.pause(3000)

    // check if its visible and clickable
    await expect(shopLink).toBeDisplayed()
    await expect(shopLink).toBeClickable()
  });
});