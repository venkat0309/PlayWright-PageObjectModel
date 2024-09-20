
**E-Commerce Application - Automated Testing**
This project contains automated tests for an e-commerce web application, implemented using Playwright with the Page Object Model (POM) design pattern. The automated tests cover key functionalities such as user authentication, product browsing, cart operations, and checkout processes.

**Project Overview**
The automated test suite ensures the smooth functionality and reliability of the e-commerce application by validating critical user workflows and interactions. The Page Object Model is used to enhance code maintainability and reusability, ensuring the test scripts remain scalable and easy to manage.

**Features**
End-to-End Testing: Validates the entire user journey from login to checkout.
Cross-Browser Compatibility: Tests run across multiple browsers (Chrome, Firefox, and WebKit).
Page Object Model (POM): Implements POM to create modular and reusable code for different pages (e.g., login page, product page, cart, checkout).
**Test Reports:** Generates detailed test reports with Playwright’s built-in reporting functionality.
**Page Object Model (POM)**
The Page Object Model design pattern separates the test scripts from the web elements, making the tests easier to maintain and update. Each webpage in the application has a corresponding class that contains the locators and methods to interact with the elements on that page.

**Example:**
Login Page: Contains methods for entering user credentials and submitting the login form.
Product Page: Includes methods for browsing products, filtering categories, and adding items to the cart.
Cart Page: Contains methods for updating product quantities, removing items, and proceeding to checkout.
Key Test Cases
User Login: Tests both valid and invalid login attempts.
Product Search: Verifies product filtering and search functionality.
Add to Cart: Ensures that users can successfully add, update, and remove products in the cart.
Checkout Process: Validates the entire checkout workflow, from entering payment details to confirming the order.
**Technologies Used**
Playwright: For browser automation and test execution.
JavaScript/TypeScript: For writing test scripts and implementing POM.
Node.js: Project environment.
Git: Version control.
