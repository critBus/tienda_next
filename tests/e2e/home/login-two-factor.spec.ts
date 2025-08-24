import { test, expect } from "@playwright/test";

import "dotenv/config";
import HomePage from "../../pages/home/home.page";
import LoginPage from "../../pages/home/login.page";
import { factoryUser } from "../../utils/test-data/factories/user.factory";

import LoginTwoFactor from "../../pages/home/login-two-factor.page";
import PrismaRepository from "@/prisma/PrismaRepository";
import MessagePage from "../../pages/home/message.page";

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

  test("2fa Login failed and retry", async ({ page }) => {
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

    await twoFactorPage.sendCode({ code: "123456" });
    await twoFactorPage.isMessageVisible({
      message: "You have 1 attempt remaining.",
    });

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
  test("2fa Login failed", async ({ page }) => {
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

    await twoFactorPage.sendCode({ code: "123456" });
    await twoFactorPage.isMessageVisible({
      message: "You have 1 attempt remaining.",
    });

    await twoFactorPage.sendCode({ code: "123456" });
    await twoFactorPage.isMessageVisible({
      message: "You have no attempts left.",
    });

    await twoFactorPage.sendCode({ code: "123456" });

    await loginPage.isMessageVisible({
      message:
        "You have reached the maximum number of resends. Please try to log in again later.",
    });
    await loginPage.isOnPage(true);
  });

  test("2fa Login failed and resend", async ({ page }) => {
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

    await twoFactorPage.sendCode({ code: "123456" });
    await twoFactorPage.isMessageVisible({
      message: "You have 1 attempt remaining.",
    });

    await twoFactorPage.resendCode();

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
