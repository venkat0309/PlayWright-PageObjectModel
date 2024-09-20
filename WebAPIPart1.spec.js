const { test, expect, request } = require('@playwright/test');
const loginPayload = { userEmail: "pasalapu2003@gmail.com", userPassword: "P@venkat3" };
let token;

test.beforeAll(async () => {

    //LoginAPI
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
        data: loginPayload
    });

    expect(loginResponse.ok()).toBeTruthy();

    // Await the JSON response properly
    const loginResponseJson = await loginResponse.json();
    token = loginResponseJson.token;  // Assign the token to the outer variable
    console.log(token);

    

});

test('@Web Client App login', async ({ page }) => {

    page.addInitScript(value =>{
        window.localStorage.setItem('token',value)
    },token);
    //js file- Login js, DashboardPage
     const email = "pasalapu2003@gmail.com";
    await page.goto("https://rahulshettyacademy.com/client");
    // await page.locator("#userEmail").fill(email);
    // await page.locator("#userPassword").type("P@venkat3");
    // await page.locator("[value='Login']").click();
    const productName = 'ZARA COAT 3';
    const products = page.locator(".card-body");
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles); 
    const count = await products.count();
    for (let i = 0; i < count; ++i) {
       if (await products.nth(i).locator("b").textContent() === productName) {
          //add to cart
          await products.nth(i).locator("text= Add To Cart").click();
          break;
       }
    }
  
    await page.locator("[routerlink*='cart']").click();
    //await page.pause();
  
    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('zara coat 3')").isVisible();
    expect(bool).toBeTruthy();
    await page.locator("text=Checkout").click();
  
    await page.locator("//input[@placeholder='Select Country']").type("ind");
  
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator("button").count();
    for (let i = 0; i < optionsCount; ++i) {
       const text = await dropdown.locator("button").nth(i).textContent();
       if (text === " India") {
          await dropdown.locator("button").nth(i).click();
          break;
       }
    }
  
    expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
    await page.locator(".action__submit").click();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);
  
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");
  
  
    for (let i = 0; i < await rows.count(); ++i) {
       const rowOrderId = await rows.nth(i).locator("th").textContent();
       if (orderId.includes(rowOrderId)) {
          await rows.nth(i).locator("button").first().click();
          break;
       }
    }
    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(orderId.includes(orderIdDetails)).toBeTruthy();
  
 });