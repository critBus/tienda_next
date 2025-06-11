import { type Locator, type Page } from "@playwright/test";
import { expect } from "@playwright/test";
export default class HomePage {
  readonly page: Page;
  readonly recommendedProductsSection: Locator;
  constructor(page: Page) {
    this.page = page;
    this.recommendedProductsSection = page.locator(
      "#id-section-recommended-products div"
    );
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
}
