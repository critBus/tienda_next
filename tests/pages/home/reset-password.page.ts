import {
  AUTH_URL_LOGIN,
  AUTH_URL_NEW_PASSWORD,
  AUTH_URL_SEND_EMAIL_RESET_PASSWORD,
} from "@/auth/routes";
import { type Locator, type Page, expect } from "@playwright/test";
import { DEFAULT_LOCALE } from "../../config/test-data/urls.config";
export default class ResetPasswordPage {
  readonly page: Page;
  readonly spamTitle: Locator;
  readonly buttonBack: Locator;
  readonly buttonSubmit: Locator;
  readonly inputPassword: Locator;
  constructor(page: Page) {
    this.page = page;
    this.spamTitle = this.page.getByText("Reset Password");
    this.buttonBack = page.getByRole("button", { name: "Back to the Login" });
    this.inputPassword = page.locator("#id-input-password");
    this.buttonSubmit = page.getByRole("button", { name: "Change Password" });
  }
  async goToPage() {
    await this.page.goto(AUTH_URL_NEW_PASSWORD);
  }
  async isOnPage(ignoreQueryParams: boolean = false) {
    const url = this.page.url();

    if (ignoreQueryParams) {
      // Solo comparamos el pathname sin los query params
      const { pathname } = new URL(url);
      await expect(pathname).toBe(`/${DEFAULT_LOCALE}${AUTH_URL_NEW_PASSWORD}`);
    } else {
      // Compara la URL completa exacta
      await expect(this.page).toHaveURL(
        `${DEFAULT_LOCALE}${AUTH_URL_NEW_PASSWORD}`
      );
    }
  }
  async areFieldsPresent() {
    await expect(this.inputPassword).toBeVisible();
    await expect(this.spamTitle).toBeVisible();
    await expect(this.buttonBack).toBeVisible();
    await expect(this.buttonSubmit).toBeVisible();
  }

  async isMessageVisible({ message }: { message: string }) {
    const locationMessage = this.page.getByText(message);
    await expect(locationMessage).toBeVisible();
  }
  async backToLogin() {
    await expect(this.buttonBack).toBeVisible();
    await expect(this.buttonBack).toBeEnabled();
    await this.buttonBack.click();
    await expect(this.page).toHaveURL(`${DEFAULT_LOCALE}${AUTH_URL_LOGIN}`);
  }

  async fillAndSubmit({ password }: { password: string }) {
    await this.areFieldsPresent();
    await this.inputPassword.fill(password);
    await expect(this.buttonSubmit).toBeEnabled();
    await this.buttonSubmit.click();
  }
}
