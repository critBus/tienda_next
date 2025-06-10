import { test, expect } from "@playwright/test";
import messages from "../locales/en.json";
import "dotenv/config";
// const getUrl = (url: string = "") => {
//   return `${process.env.FRONTEND_URL}${url}`;
// };

test.describe("home page", () => {
  test("adds a product to the cart when clicking the add button", async ({
    page,
  }) => {
    // await page.goto(getUrl("/"));
    await page.goto("/");
    // ✅ Asegurar que existe antes de hacer click
    const addButton = page
      .locator('[data-testid="idtest-button-cart-add"]')
      .first();
    const cartCount = page.locator('[data-testid="id-test-cart-count"]');
    await expect(cartCount).not.toBeVisible();
    // locator('div').filter({ hasText: 'Recommended' }).getByTestId('idtest-button-cart-add')
    await expect(addButton).toBeVisible();
    await addButton.click();

    await expect(cartCount).toBeVisible();
    await expect(cartCount).toHaveText("1");

    await addButton.click();
    await expect(cartCount).toHaveText("2");
  });
  test("renders recommended products", async ({ page }) => {
    // await page.goto(getUrl("/"));
    await page.goto("/");
    await expect(
      page.getByText(messages["RecommendedProducts"]["title"])
    ).toBeVisible();
  });
  test("renders Best Selling products", async ({ page }) => {
    // await page.goto(getUrl("/"));
    await page.goto("/");
    await expect(
      page.getByText(messages["BestSellingProducts"]["title"])
    ).toBeVisible();
  });
  test("Latest Additions products", async ({ page }) => {
    // await page.goto(getUrl("/"));
    await page.goto("/");
    await expect(
      page.getByText(messages["LatestAdditions"]["title"])
    ).toBeVisible();
  });

  test("Change language", async ({ page }) => {
    // await page.goto(getUrl("/"));
    await page.goto("/");
  });
});
