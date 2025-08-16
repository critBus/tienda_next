import { type Locator, type Page } from "@playwright/test";
import { expect } from "@playwright/test";
import messages from "../../../locales/en.json";
import { DEFAULT_LOCALE } from "../../config/test-data/urls.config";
export default class HomePage {
  readonly page: Page;
  readonly recommendedProductsSection: Locator;
  readonly switcherSite: Locator;
  readonly buttonCreateAccount: Locator;
  readonly buttonLogin: Locator;
  readonly buttonAccount: Locator;
  readonly buttonLogout: Locator;
  constructor(page: Page) {
    this.page = page;
    this.recommendedProductsSection = page.locator(
      "#id-section-recommended-products div"
    );
    this.switcherSite = this.page.getByRole("button", {
      name: "Seleccionar ubicación",
    });
    this.buttonCreateAccount = page.locator("#id-link-create-account");
    this.buttonLogin = page.locator("#id-link-login");
    this.buttonAccount = page.locator("#id-account-open-menu");
    this.buttonLogout = page.locator("#id-button-logout");
  }

  async isOnPage(args: { locale?: boolean } = {}) {
    if (args?.locale === false) {
      await expect(this.page).toHaveURL(`/shop`);
    } else {
      await expect(this.page).toHaveURL(`${DEFAULT_LOCALE}/shop`);
    }
  }
  async areLoggedin() {
    await expect(this.buttonAccount).toBeVisible();

    await expect(this.buttonLogin).not.toBeVisible();
    await expect(this.buttonCreateAccount).not.toBeVisible();
    await expect(this.buttonLogout).not.toBeVisible();
  }

  async haveTheProductsInRecommended({
    productsName,
  }: {
    productsName: string[];
  }) {
    for (const name of productsName) {
      const product = this.recommendedProductsSection.getByText(name);
      await expect(product).toBeVisible();
    }
  }
  async selectLocation({
    provinceName = null,
    municipalityName = null,
    townName = null,
    productsName,
  }: {
    provinceName?: string | null;
    municipalityName?: string | null;
    townName?: string | null;
    productsName: string[];
  }) {
    await this.switcherSite.click();

    const wholeCountry = messages["LocationSelector"]["wholeCountry"];
    const buttonWholeCountry = this.page.getByText(wholeCountry).last();
    if (provinceName) {
      const buttonProvince = this.page
        .locator('[data-testid="id-test-expand-site"]')
        .getByText(provinceName, { exact: true })
        .first();
      await expect(buttonProvince).toBeVisible();
      if (municipalityName) {
        if (townName) {
          // buscar el boton de expandir municipio
          const buttonShowTown = this.page
            .getByText(`${municipalityName}+`)
            .getByText("+");
          await expect(buttonShowTown).toBeVisible();
          await buttonShowTown.click();
          // buscar el pueblo
          const buttonTown = this.page.getByText(townName);
          await expect(buttonTown).toBeVisible();
          await buttonTown.click();

          await expect(this.switcherSite.getByText(townName)).toBeVisible();
        } else {
          // buscar el boton de expandir provincia
          const buttonShowMunicipality = this.page
            .getByText(`${provinceName}+`)
            .getByText("+");
          await expect(buttonShowMunicipality).toBeVisible();
          await buttonShowMunicipality.click();
          //municipio
          const buttonMunicipality = this.page.getByText(municipalityName);
          await expect(buttonMunicipality).toBeVisible();
          await buttonMunicipality.click();
          await expect(this.switcherSite).toBeVisible();
        }
        await expect(
          this.switcherSite.getByText(municipalityName)
        ).toBeVisible();
      } else {
        // province
        await buttonProvince.click();
      }
      await expect(this.switcherSite.getByText(provinceName)).toBeVisible();
    } else {
      // WholeCountry
      await expect(buttonWholeCountry).toBeVisible();
      await buttonWholeCountry.click();
      await expect(buttonWholeCountry).toBeVisible();
    }

    await this.haveTheProductsInRecommended({
      productsName: productsName,
    });
  }
}
