import { test, expect } from "@playwright/test";

import "dotenv/config";

import HomePage from "../../pages/home/home.page";
import { faker } from "@faker-js/faker";
import RegisterPage from "../../pages/home/create-account.page";
import MessagePage from "../../pages/home/message.page";
import prisma from "@/prisma/config";
import { VerificationTokenEmail } from "@prisma/client";

test.describe("home page", () => {
  test("Create Account", async ({ page }) => {
    await page.goto("/");
    const homePage = new HomePage(page);
    await expect(homePage.buttonLogin).toBeVisible();
    await expect(homePage.buttonCreateAccount).toBeVisible();
    await homePage.buttonCreateAccount.click();

    const currentLang = "en";
    // console.log(page.url());
    await expect(page).toHaveURL(`${currentLang}/auth/register`);

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
    const verificationTokenEmail: VerificationTokenEmail =
      await prisma.verificationTokenEmail.findFirst({
        where: {
          email: email,
        },
      });
    console.log(`verificationTokenEmail.token ${verificationTokenEmail.token}`);
  });
});
