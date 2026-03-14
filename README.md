# ECommerce BrowserStack Cross-Browser Tests

Automated cross-browser tests for the [FashionStack](https://ecommercebs.vercel.app/) ecommerce site using **Playwright** and **BrowserStack SDK**.

## Test Scenarios

### Login Tests (`tests/login.spec.js`)
- Open login modal from homepage
- Login with valid credentials
- Validate required field attributes
- Navigate from login to sign-up form
- Verify alternative login options (OTP, Google, Facebook)

### Sign-Up Test (`tests/signup.spec.js`)
- Register a new account end-to-end

## Cross-Browser Platforms

| Platform | OS / Device        | Browser            |
|----------|--------------------|--------------------|
| Windows  | Windows 11         | Chrome (latest)    |
| macOS    | Sonoma             | WebKit (Safari)    |
| Android  | Samsung Galaxy S24 | Chrome             |

## Setup

```bash
npm install
npx playwright install
```

## Run Locally

```bash
npm test
```

## Run on BrowserStack

```bash
export BROWSERSTACK_USERNAME=<your-username>
export BROWSERSTACK_ACCESS_KEY=<your-access-key>
npm run test:browserstack
```

## Project Structure

```
├── tests/
│   ├── login.spec.js       # Login flow tests
│   └── signup.spec.js      # Sign-up flow test
├── playwright.config.js    # Playwright config
├── browserstack.yml        # BrowserStack SDK config
├── package.json
└── README.md
```
