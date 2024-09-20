class LoginPage{

    // await page.locator("#userEmail").
    // await page.locator("#userPassword").type("Iamking@000");
    // await page.locator("[value='Login']").click();
    constructor(page)
    {
        this.page = page;
        this.loginb = page.locator("[value='Login']");
        this.username = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
    }

async goTo()
{
    await this.page.goto("https://rahulshettyacademy.com/client");
}
async login(username,password)
    {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginb.click();

    }
}
module.exports = {LoginPage}