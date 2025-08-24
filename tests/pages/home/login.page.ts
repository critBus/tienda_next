import { AUTH_URL_LOGIN } from "@/auth/routes";
import { type Locator, type Page, expect } from "@playwright/test";
import { DEFAULT_LOCALE } from "../../config/test-data/urls.config";
export default class LoginPage {
  readonly page: Page;
  readonly spamTitle: Locator;

  readonly inputEmail: Locator;
  readonly inputPassword: Locator;
  readonly buttonLogin: Locator;
  constructor(page: Page) {
    this.page = page;
    this.spamTitle = this.page.getByText("Sign up with");

    this.inputEmail = page.locator("#id-input-email"); //this.page.getByRole("textbox", { name: "Email" }); //

    this.inputPassword = page.locator("#id-input-password"); // this.page.getByRole("textbox", { name: "Password" }); //
    this.buttonLogin = page.locator("#id-button-submit");
  }
  async goToPage() {
    await this.page.goto(AUTH_URL_LOGIN);
  }
  async isOnPage(ignoreQueryParams: boolean = false) {
    const url = this.page.url();

    if (ignoreQueryParams) {
      // Solo comparamos el pathname sin los query params
      const { pathname } = new URL(url);
      await expect(pathname).toBe(`/${DEFAULT_LOCALE}${AUTH_URL_LOGIN}`);
    } else {
      // Compara la URL completa exacta
      await expect(this.page).toHaveURL(`${DEFAULT_LOCALE}${AUTH_URL_LOGIN}`);
    }
  }
  async areFieldsPresent() {
    await expect(this.inputEmail).toBeVisible();
    await expect(this.inputPassword).toBeVisible();
    await expect(this.buttonLogin).toBeVisible();
  }
  async fillDataAndSubmit({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    await this.areFieldsPresent();
    await this.inputEmail.fill(email);
    await this.inputPassword.fill(password);
    await expect(this.buttonLogin).toBeEnabled();
    await this.buttonLogin.click();
  }
  async isMessageVisible({ message }: { message: string }) {
    const locationMessage = this.page.getByText(message);
    await expect(locationMessage).toBeVisible();
  }
}
