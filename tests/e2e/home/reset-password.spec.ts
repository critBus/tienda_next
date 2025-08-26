import { test, expect } from "@playwright/test";

import "dotenv/config";
import HomePage from "../../pages/home/home.page";
import LoginPage from "../../pages/home/login.page";
import { factoryUser } from "../../utils/test-data/factories/user.factory";
import { AUTH_URL_LOGIN, AUTH_URL_NEW_PASSWORD } from "@/auth/routes";
import ForgotPasswordPage from "../../pages/home/forgot-password.page";
import MessagePage from "../../pages/home/message.page";
import prisma from "@/prisma/config";
import {
  ResetPasswordTokenEmail,
  SentEmailLog,
  VerificationTokenEmail,
} from "@prisma/client";
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

  test("reset password and email verification", async ({ page }) => {
    const user = await factoryUser({
      password: "testpass",
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

    let lastEmail: SentEmailLog | null = await prisma.sentEmailLog.findFirst({
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
    let confirmLink = `${DOMAIN_URL}${AUTH_URL_NEW_PASSWORD}?token=${resetPasswordTokenEmail.token}`;

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

    await messagePage.isMessageVisible({ message: "Confirmation email sent!" });
    await messagePage.backToLogin();

    const verificationTokenEmail: VerificationTokenEmail | null =
      await prisma.verificationTokenEmail.findFirst({
        where: {
          email: user.email,
        },
      });
    expect(verificationTokenEmail).not.toBeNull();

    lastEmail = await prisma.sentEmailLog.findFirst({
      where: {
        to: user.email,
      },
      orderBy: {
        sentAt: "desc",
      },
    });

    expect(lastEmail).not.toBeNull();

    if (!lastEmail || !verificationTokenEmail) {
      return;
    }
    confirmLink = `${DOMAIN_URL}/auth/new-verification?token=${verificationTokenEmail.token}`;

    expect(lastEmail.html).toContain(confirmLink);

    await page.goto(confirmLink);

    await messagePage.isMessageVisible({ message: "Email verified" });
    await messagePage.backToLogin();

    await loginPage.fillDataAndSubmit({
      email: user.email,
      password: "newpassword",
    });

    const homePage = new HomePage(page);
    await homePage.isOnPage();
    await homePage.areLoggedin();
  });
  test("Incorrect email when trying to reset password", async ({ page }) => {
    await page.goto(AUTH_URL_LOGIN);

    const loginPage = new LoginPage(page);
    await loginPage.areFieldsPresent();
    await loginPage.buttonForgotPassword.click();

    const forgotPasswordPage = new ForgotPasswordPage(page);
    await forgotPasswordPage.isOnPage();
    await forgotPasswordPage.fillAndSubmit({ email: "fake99999@email.com" });
    await forgotPasswordPage.isMessageVisible({ message: "Email not found" });
  });
  test("Return to login after entering the email form to reset password.", async ({
    page,
  }) => {
    await page.goto(AUTH_URL_LOGIN);

    const loginPage = new LoginPage(page);
    await loginPage.areFieldsPresent();
    await loginPage.buttonForgotPassword.click();

    const forgotPasswordPage = new ForgotPasswordPage(page);
    await forgotPasswordPage.isOnPage();
    await forgotPasswordPage.backToLogin();
  });
  test("Incorrect token in the change password form", async ({ page }) => {
    let confirmLink = `${DOMAIN_URL}${AUTH_URL_NEW_PASSWORD}`;
    await page.goto(confirmLink);

    const resetPasswordPage = new ResetPasswordPage(page);
    await resetPasswordPage.isMessageVisible({
      message: "The token is required",
    });

    confirmLink = `${DOMAIN_URL}${AUTH_URL_NEW_PASSWORD}?token=tokenincorrecto`;
    await page.goto(confirmLink);
    await resetPasswordPage.isMessageVisible({
      message: "Invalid token.",
    });
  });
});
