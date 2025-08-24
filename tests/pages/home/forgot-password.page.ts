import {
  AUTH_URL_LOGIN,
  AUTH_URL_SEND_EMAIL_RESET_PASSWORD,
} from "@/auth/routes";
import { type Locator, type Page, expect } from "@playwright/test";
import { DEFAULT_LOCALE } from "../../config/test-data/urls.config";
export default class ForgotPasswordPage {
  readonly page: Page;
  readonly spamTitle: Locator;
  readonly buttonBack: Locator;
  readonly buttonSubmit: Locator;
  readonly inputEmail: Locator;
  constructor(page: Page) {
    this.page = page;
    this.spamTitle = this.page.getByText("Send the email");
    this.buttonBack = page.getByRole("button", { name: "Back to the Login" });
    this.inputEmail = page.locator("#id-input-email");
    this.buttonSubmit = page.getByRole("button", { name: "Send" });
  }
  async goToPage() {
    await this.page.goto(AUTH_URL_SEND_EMAIL_RESET_PASSWORD);
  }
  async isOnPage(ignoreQueryParams: boolean = false) {
    const url = this.page.url();

    if (ignoreQueryParams) {
      // Solo comparamos el pathname sin los query params
      const { pathname } = new URL(url);
      await expect(pathname).toBe(
        `/${DEFAULT_LOCALE}${AUTH_URL_SEND_EMAIL_RESET_PASSWORD}`
      );
    } else {
      // Compara la URL completa exacta
      await expect(this.page).toHaveURL(
        `${DEFAULT_LOCALE}${AUTH_URL_SEND_EMAIL_RESET_PASSWORD}`
      );
    }
  }
  async areFieldsPresent() {
    await expect(this.inputEmail).toBeVisible();
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

  async fillAndSubmit({ email }: { email: string }) {
    await this.areFieldsPresent();
    await this.inputEmail.fill(email);
    await expect(this.buttonSubmit).toBeEnabled();
    await this.buttonSubmit.click();
  }
}
