import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import "dotenv/config";
import HomePage from "../../pages/home/home.page";
import LoginPage from "../../pages/home/login.page";

test.describe("Login from the home page", () => {
  test("login failed", async ({ page }) => {
    await page.goto("/");
    const homePage = new HomePage(page);
    await expect(homePage.buttonLogin).toBeVisible();
    await homePage.buttonLogin.click();
    const loginPage = new LoginPage(page);
    await loginPage.fillDataAndSubmit({
      email: "non-existent-email@email.com",
      password: "xxxxxx",
    });
    await loginPage.isMessageVisible({ message: "Email does not exist." });
  });
});
