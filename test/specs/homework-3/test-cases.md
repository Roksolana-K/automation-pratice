# GitHub — Test Cases

## TC-GH-001
| Field | Details |
|---|---|
| **Summary** | Click on the “Pricing” link should redirect to the page with plans and prices |
| **Preconditions** | Browser is open on [https://github.com/](https://github.com/) |
| **Test Steps** | 1) Click on the “Pricing” link in the top navigation bar |
| **Expected Result** | User is redirected to a new page; the URL contains `/pricing`. |

---

## TC-GH-002
| Field | Details |
|---|---|
| **Summary** | Search results are related to the entered keyword |
| **Preconditions** | Browser is open on [https://github.com/](https://github.com/) |
| **Test Steps** | 1) Click on the “Search” field <br> 2) Type `javascript` <br> 3) Press **Enter** |
| **Expected Result** | The URL contains `/search?q=javascript&type=repositories`. <br> The results headings contain the typed keyword. |

---

## TC-GH-003
| Field | Details |
|---|---|
| **Summary** | “Sign up for GitHub” button redirects to the "Sign Up" page |
| **Preconditions** | Browser is open on [https://github.com/](https://github.com/) |
| **Test Steps** | 1) Click on **"Sign up for GitHub"** button |
| **Expected Result** | A new page opens; URL contains `/signup`; the heading **“Sign up for GitHub”** is visible. |

---

## TC-GH-004
| Field | Details |
|---|---|
| **Summary** | Submitting empty “Sign up” form shows error messages |
| **Preconditions** | Browser is open on [https://github.com/signup](https://github.com/signup) |
| **Test Steps** | 1) Leave **Email**, **Password**, and **Username** fields empty <br> 2) Click on **"Create an account"** button |
| **Expected Result** | An error message appears below each empty field (Email, Password, Username). <br> The account is not created. |

---

## TC-GH-005
| Field | Details |
|---|---|
| **Summary** | The “Shop” link is visible and clickable in the footer |
| **Preconditions** | Browser is open on [https://github.com/](https://github.com/) |
| **Test Steps** | 1) Scroll to the footer <br> 2) Click on **Shop** |
| **Expected Result** | The link is visible and clickable. <br> Clicking it opens a new page: [https://thegithubshop.com/](https://thegithubshop.com/). |
