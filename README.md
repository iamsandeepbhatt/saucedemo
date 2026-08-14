# Playwright Automation Framework — Saucedemo

A scalable end-to-end test automation framework built with **Playwright** and **TypeScript** using the **Page Object Model** design pattern.

## 🛠 Tech Stack

- [Playwright](https://playwright.dev/) — Test automation framework
- TypeScript — Strongly typed JavaScript
- Page Object Model — Framework design pattern
- GitHub Actions — CI/CD pipeline (coming soon)

## 📁 Project Structure
saucedemo/
├── pages/ # Page Object classes
│ ├── BasePage.ts # Base class with shared methods
│ ├── LoginPage.ts # Login page actions and assertions
│ ├── InventoryPage.ts # Inventory page actions
│ └── CartPage.ts # Cart page actions
├── tests/ # Test spec files
│ ├── login.spec.ts # Login test cases
│ ├── inventory.spec.ts # Inventory test cases
│ └── cart.spec.ts # Cart test cases
├── playwright.config.ts # Playwright configuration
└── .gitignore


## ⚙️ Setup

**Prerequisites:** Node.js 18+

```bash
# Clone the repository
git clone https://github.com/iamsandeepbhatt/saucedemo.git
cd saucedemo

# Install dependencies
npm install

# Install browsers
npx playwright install
```

## 🚀 Running Tests

```bash
# Run all tests
npx playwright test

# Run in headed mode (watch the browser)
npx playwright test --headed

# Run a specific test file
npx playwright test tests/login.spec.ts

# Run with UI mode
npx playwright test --ui

# View HTML report
npx playwright show-report
```

## 🌍 Environments

```bash
# Run against staging
ENV=staging npx playwright test

# Run against production
ENV=production npx playwright test
```

## 📐 Framework Design

### Page Object Model
Each page in the application has a corresponding class under `pages/`:
- **Locators** are defined as private properties
- **Actions** are defined as async methods
- **BasePage** contains shared methods inherited by all page classes

### Why POM?
- Single place to update locators when UI changes
- Tests read like plain English
- Reusable across multiple test files
- Easy to maintain and scale

## 🧪 Test Coverage

| Module | Tests |
|--------|-------|
| Login | Valid login, wrong password, empty fields |
| Inventory | Product count, add to cart |
| Cart | Verify item, remove item, checkout |

## 📋 Test Credentials

Credentials are stored in `.env` file — never committed to Git.

```bash
# Create a .env file in project root
PASSWORD=secret_sauce
```