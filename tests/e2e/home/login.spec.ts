import { test, expect } from "@playwright/test";

import "dotenv/config";
import HomePage from "../../pages/home/home.page";
import LoginPage from "../../pages/home/login.page";
import { factoryUser } from "../../utils/test-data/factories/user.factory";
import { AUTH_URL_LOGIN } from "@/auth/routes";

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

    const user = await factoryUser();

    await page.goto(AUTH_URL_LOGIN);
    await loginPage.fillDataAndSubmit({
      email: user.email,
      password: "xxxxxx",
    });
    await loginPage.isMessageVisible({ message: "Invalid credentials." });
  });
});
