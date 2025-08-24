import { test, expect } from "@playwright/test";

import "dotenv/config";
import HomePage from "../../pages/home/home.page";
import LoginPage from "../../pages/home/login.page";
import { factoryUser } from "../../utils/test-data/factories/user.factory";
import { AUTH_URL_LOGIN, AUTH_URL_NEW_PASSWORD } from "@/auth/routes";
import ForgotPasswordPage from "../../pages/home/forgot-password.page";
import MessagePage from "../../pages/home/message.page";
import prisma from "@/prisma/config";
import { ResetPasswordTokenEmail, SentEmailLog } from "@prisma/client";
import { DOMAIN_URL } from "@/config";
import ResetPasswordPage from "../../pages/home/reset-password.page";

test.describe("Tests reset password page", () => {
  test("reset password", async ({ page }) => {
    const user = await factoryUser({
      password: "testpass",
      emailVerified: new Date(),
    });
    await page.goto(AUTH_URL_LOGIN);
    const loginPage = new LoginPage(page);
    await loginPage.areFieldsPresent();
    await loginPage.buttonForgotPassword.click();

    const forgotPasswordPage = new ForgotPasswordPage(page);
    forgotPasswordPage.isOnPage();
    forgotPasswordPage.fillAndSubmit({ email: user.email });

    const messagePage = new MessagePage(page);
    await messagePage.isMessageVisible({ message: "Reset email sent" });
    await messagePage.isOnPage(true);
    await messagePage.backToLogin();

    const resetPasswordTokenEmail: ResetPasswordTokenEmail | null =
      await prisma.resetPasswordTokenEmail.findFirst({
        where: {
          email: user.email,
        },
      });
    expect(resetPasswordTokenEmail).not.toBeNull();
    //console.log(`verificationTokenEmail.token ${verificationTokenEmail.token}`);

    const lastEmail: SentEmailLog | null = await prisma.sentEmailLog.findFirst({
      where: {
        to: user.email,
      },
      orderBy: {
        sentAt: "desc",
      },
    });

    expect(lastEmail).not.toBeNull();

    if (!lastEmail || !resetPasswordTokenEmail) {
      return;
    }
    const confirmLink = `${DOMAIN_URL}${AUTH_URL_NEW_PASSWORD}?token=${resetPasswordTokenEmail.token}`;

    expect(lastEmail.html).toContain(confirmLink);

    await page.goto(confirmLink);

    const resetPasswordPage = new ResetPasswordPage(page);
    await resetPasswordPage.areFieldsPresent();
    await resetPasswordPage.isOnPage(true);
    await resetPasswordPage.fillAndSubmit({ password: "newpassword" });

    await messagePage.isMessageVisible({ message: "Password Updated" });
    await messagePage.isOnPage(true);
    await messagePage.backToLogin();

    await loginPage.isOnPage();
    await loginPage.fillDataAndSubmit({
      email: user.email,
      password: "newpassword",
    });

    const homePage = new HomePage(page);
    await homePage.isOnPage();
    await homePage.areLoggedin();
  });
});
