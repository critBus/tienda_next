import { Page, type Locator } from "@playwright/test";
import { expect } from "@playwright/test";
import { DEFAULT_LOCALE } from "../../config/test-data/urls.config";
import { AUTH_URL_LOGIN_MESSAGE } from "@/auth/routes";
export default class MessagePage {
  readonly page: Page;

  readonly buttonBack: Locator;
  constructor(page: Page) {
    this.page = page;
    this.buttonBack = page.locator("#id-button-back-to-login");
  }

  async isMessageVisible({ message }: { message: string }) {
    const locationMessage = this.page.getByText(message);
    await expect(locationMessage).toBeVisible();
  }
  async isOnPage() {
    await expect(this.page).toHaveURL(
      `${DEFAULT_LOCALE}${AUTH_URL_LOGIN_MESSAGE}`
    );
  }
  async backToLogin() {
    await expect(this.buttonBack).toBeVisible();
    await expect(this.buttonBack).toBeEnabled();
    await this.buttonBack.click();
    const currentLang = "en";
    await expect(this.page).toHaveURL(`${currentLang}/auth/login`);
  }
}
