import { type Locator, type Page } from "@playwright/test";
export default class RegisterPage {
  readonly page: Page;
  readonly spamTitle: Locator;
  readonly inputName: Locator;
  readonly inputEmail: Locator;
  readonly inputPassword: Locator;
  readonly buttonRegister: Locator;
  constructor(page: Page) {
    this.page = page;
    this.spamTitle = this.page.getByText("Sign up with");
    this.inputName = this.page.getByRole("textbox", { name: "Name" }); //page.locator("#id-input-name");
    this.inputEmail = this.page.getByRole("textbox", { name: "Email" }); //page.locator("#id-input-email");

    this.inputPassword = this.page.getByRole("textbox", { name: "Password" }); //page.locator("#id-input-password");
    this.buttonRegister = page.locator("#id-button-submit");
  }
}
