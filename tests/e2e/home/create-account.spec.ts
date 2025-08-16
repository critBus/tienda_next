import { test, expect } from "@playwright/test";

import "dotenv/config";

import HomePage from "../../pages/home/home.page";
import { faker } from "@faker-js/faker";
import RegisterPage from "../../pages/home/create-account.page";
import MessagePage from "../../pages/home/message.page";
import prisma from "@/prisma/config";
import { SentEmailLog, VerificationTokenEmail } from "@prisma/client";
import { DOMAIN_URL } from "@/config";
import LoginPage from "../../pages/home/login.page";
import { DEFAULT_LOCALE } from "../../config/test-data/urls.config";
import { createHashedPassword } from "@/lib/server/auth/createHashedPassword";
import PrismaRepository from "@/prisma/PrismaRepository";

test.describe("home page", () => {
  test("Create Account", async ({ page }) => {
    await prisma.user.deleteMany();

    await page.goto("/");
    const homePage = new HomePage(page);
    await expect(homePage.buttonLogin).toBeVisible();
    await expect(homePage.buttonCreateAccount).toBeVisible();
    await homePage.buttonCreateAccount.click();

    await expect(page).toHaveURL(`${DEFAULT_LOCALE}/auth/register`);

    const registerPage = new RegisterPage(page);
    await expect(registerPage.inputEmail).toBeVisible();
    await expect(registerPage.inputPassword).toBeVisible();
    await expect(registerPage.inputName).toBeVisible();
    await expect(registerPage.buttonRegister).toBeVisible();
    // TODO:  en algun momento habilitar que se desactive el boton de registrar
    // await expect(registerPage.buttonRegister).not.toBeEnabled();

    const nombreCompleto = faker.person.fullName();
    const email = faker.internet.email();
    const password = faker.internet.password();

    await registerPage.inputEmail.fill(email);
    await registerPage.inputName.fill(nombreCompleto);
    await registerPage.inputPassword.fill(password);

    await expect(registerPage.buttonRegister).toBeEnabled();
    await registerPage.buttonRegister.click();

    const messagePage = new MessagePage(page);
    await messagePage.isMessageVisible({ message: "Confirmation email sent!" });
    await messagePage.backToLogin();

    // const emailSentMessage = page.getByText("Confirmation email sent!");
    // await expect(emailSentMessage).toBeVisible();
    // const verificationTokens=
    const verificationTokenEmail: VerificationTokenEmail | null =
      await prisma.verificationTokenEmail.findFirst({
        where: {
          email: email,
        },
      });
    expect(verificationTokenEmail).not.toBeNull();
    //console.log(`verificationTokenEmail.token ${verificationTokenEmail.token}`);

    const lastEmail: SentEmailLog | null = await prisma.sentEmailLog.findFirst({
      where: {
        to: email,
      },
      orderBy: {
        sentAt: "desc",
      },
    });

    expect(lastEmail).not.toBeNull();

    if (!lastEmail || !verificationTokenEmail) {
      return;
    }
    const confirmLink = `${DOMAIN_URL}/auth/new-verification?token=${verificationTokenEmail.token}`;

    expect(lastEmail.html).toContain(confirmLink);

    await page.goto(confirmLink);

    await messagePage.isMessageVisible({ message: "Email verified" });
    await messagePage.backToLogin();

    // const hashedPassword = await createHashedPassword({ password });
    // const hashedPassword2 = await createHashedPassword({ password });
    // console.log(`password: ${password}`);
    // console.log(`hashedPassword: ${hashedPassword}`);
    // console.log(`hashedPassword2: ${hashedPassword2}`);

    // const existingUser = await PrismaRepository.users.byEmail(email);

    // if (existingUser) {
    //   console.log(`son distintas: ${hashedPassword != existingUser.password}`);
    //   console.log(`existingUser.password: ${existingUser.password}`);
    // }

    const loginPage = new LoginPage(page);
    await loginPage.fillDataAndSubmit({
      email,
      password,
    });
    await homePage.isOnPage();
    await homePage.areLoggedin();
    // await expect(page).toHaveURL(`${DEFAULT_LOCALE}/shop`);
    // await expect(homePage.buttonLogin).not.toBeVisible();
    // await expect(homePage.buttonCreateAccount).not.toBeVisible();
    // await expect(homePage.buttonLogout).not.toBeVisible();
    // await expect(homePage.buttonAccount).toBeVisible();
    await homePage.buttonAccount.click();
    await expect(homePage.buttonLogout).toBeVisible();
    await homePage.buttonLogout.click();

    await expect(homePage.buttonLogin).toBeVisible();
    await expect(homePage.buttonCreateAccount).toBeVisible();
    await expect(homePage.buttonLogout).not.toBeVisible();
    await expect(homePage.buttonAccount).not.toBeVisible();
  });
});
