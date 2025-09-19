# GitHub – Test Cases  

> **Note:** These test cases were originally given in a video lesson, but some steps have been adapted to match the current version of GitHub.

---

### TC-001 – Register a New Account  

| Field | Description |
|--------|-------------|
| **Summary** | Register a new account on GitHub |
| **Preconditions** | Browser is open on [GitHub](https://github.com)  |
| **Steps** | 1. Click **"Sign Up"** button at the top <br> 2. Wait for the page to load <br> 3. Accept cookies if needed <br> 4. Verify texts: “Create your free account” and “Explore GitHub's core features for individuals and organizations.” <br> 5. Enter Email, Password, Username <br> 6. Click **"Create Account"** button |
| **Expected Result** | Registration form displays, fields accept input, clicking **Create Account** proceeds to the next registration step |

---

### TC-002 – Check the Copilot Pro CTA  

| Field | Description |
|--------|-------------|
| **Summary** | Verify GitHub Copilot function |
| **Preconditions** | Browser is open on [GitHub](https://github.com) |
| **Steps** | 1. Scroll to the section “Millions of developers and businesses call GitHub home.” <br> 2. Verify the text is present <br> 3. Ensure **“Try GitHub Copilot”** link is visible <br> 4. Click on the link <br> 5. Verify heading “Try Copilot Pro for 30 days free” <br> 6. Click **"Try Now"** button |
| **Expected Result** | GitHub Copilot page appears with correct heading and **"Try Now"** button works |

---

### TC-003 – Subscribe to the GitHub Newsletter  

| Field | Description |
|--------|-------------|
| **Summary** | Subscribe to developer newsletter |
| **Preconditions** | Browser is open on [GitHub](https://github.com) |
| **Steps** | 1. Scroll to the footer <br> 2. Verify **"Subscribe"** button exists <br> 3. Verify it’s clickable and click it <br> 4. Confirm redirect to another domain (`resources.github.com/newsletter/`) <br> 5. Verify heading “Subscribe to our developer newsletter” <br> 6. Fill Email and Country. <br> 7. Click on agreement checkbox <br> 8. Click **Subscribe** <br> 9. Verify “Thanks for subscribing” text appears |
| **Expected Result** | User successfully subscribes to the newsletter and “Thanks for subscribing” message appears |

---

### TC-004 – Search on GitHub  

| Field | Description |
|--------|-------------|
| **Summary** | Search for “act” and verify first result |
| **Preconditions** | Browser is open on [GitHub](https://github.com) |
| **Steps** | 1. Click in the **Search** input field <br> 2. Type `act` <br> 3. Press **Enter** <br> 4. Verify that the first result contains the word `act` in the **href** attribute |
| **Expected Result** | The first search result contains a link whose **href** attribute includes `act` |

---

### TC-005 – Check Pricing / Compare Features  

| Field | Description |
|--------|-------------|
| **Summary** | Verify Pricing page and Compare Features section |
| **Preconditions** | Browser is open on [GitHub](https://github.com) |
| **Steps** |1. Click **Pricing** <br> 2. Verify text “Try the Copilot-powered platform” <br> 3. Scroll to **Compare all features** and click on it <br> 4. Verify heading “Compare features” is displayed |
| **Expected Result** | Pricing page shows correct text and clicking **Compare all features** opens section with heading “Compare features” |
