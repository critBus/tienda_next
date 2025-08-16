import { Page, Locator } from "@playwright/test";
import { expect } from "@playwright/test";
import { DEFAULT_LOCALE } from "../../config/test-data/urls.config";
import { AUTH_URL_LOGIN_2FA } from "@/auth/routes";

export default class LoginTwoFactor {
  readonly page: Page;
  readonly buttonSubmit: Locator;
  readonly inputDigit0: Locator;
  readonly inputDigit1: Locator;
  readonly inputDigit2: Locator;
  readonly inputDigit3: Locator;
  readonly inputDigit4: Locator;
  readonly inputDigit5: Locator;
  constructor(page: Page) {
    this.page = page;
    this.buttonSubmit = page.getByRole("button", { name: "Check" });
    this.inputDigit0 = page.locator("#id-digit-0");
    this.inputDigit1 = page.locator("#id-digit-1");
    this.inputDigit2 = page.locator("#id-digit-2");
    this.inputDigit3 = page.locator("#id-digit-3");
    this.inputDigit4 = page.locator("#id-digit-4");
    this.inputDigit5 = page.locator("#id-digit-5");
  }

  async areFieldsPresent() {
    await expect(this.inputDigit0).toBeVisible();
    await expect(this.inputDigit1).toBeVisible();
    await expect(this.inputDigit2).toBeVisible();

    await expect(this.inputDigit3).toBeVisible();
    await expect(this.inputDigit4).toBeVisible();
    await expect(this.inputDigit5).toBeVisible();

    await expect(this.buttonSubmit).toBeVisible();
  }

  async sendCode({ code }: { code: string }) {
    await this.areFieldsPresent();
    await this.inputDigit0.fill(code[0]);
    await this.inputDigit1.fill(code[1]);
    await this.inputDigit2.fill(code[2]);
    await this.inputDigit3.fill(code[3]);
    await this.inputDigit4.fill(code[4]);
    await this.inputDigit5.fill(code[5]);
    await this.buttonSubmit.click();
    // await this.page.waitForTimeout(5000);
    // expect(this.page.url()).toBe(`${process.env.EXPECTED_URL + ""}success`);
  }
  async isMessageVisible({ message }: { message: string }) {
    const locationMessage = this.page.getByText(message);
    await expect(locationMessage).toBeVisible();
  }
  async isOnPage() {
    await expect(this.page).toHaveURL(`${DEFAULT_LOCALE}${AUTH_URL_LOGIN_2FA}`);
  }
}
