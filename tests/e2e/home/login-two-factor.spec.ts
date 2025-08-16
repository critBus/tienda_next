import { test, expect } from "@playwright/test";

import "dotenv/config";
import HomePage from "../../pages/home/home.page";
import LoginPage from "../../pages/home/login.page";
import { factoryUser } from "../../utils/test-data/factories/user.factory";

import LoginTwoFactor from "../../pages/home/login-two-factor.page";
import PrismaRepository from "@/prisma/PrismaRepository";

test.describe("2fa Login", () => {
  test("2fa Login successful", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goToPage();
    const user = await factoryUser({
      password: "testpass",
      emailVerified: new Date(),
      isTwoFactorEnabled: true,
    });
    await loginPage.fillDataAndSubmit({
      email: user.email,
      password: "testpass",
    });

    const twoFactorPage = new LoginTwoFactor(page);
    await twoFactorPage.isOnPage();

    const twoFactorToken = await PrismaRepository.twoFactorTokenEmail.byEmail(
      user.email
    );
    expect(twoFactorToken).not.toBeNull();

    if (!twoFactorToken) {
      return;
    }

    await twoFactorPage.sendCode({ code: twoFactorToken.token });

    const homePage = new HomePage(page);
    await homePage.isOnPage(); //{ locale: false }
    // await page.waitForTimeout(5000);
    await homePage.areLoggedin();
  });
});
