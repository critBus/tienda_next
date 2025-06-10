import { test, expect } from "@playwright/test";
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
});

// test("has title", async ({ page }) => {
//   await page.goto("https://playwright.dev/");

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test("get started link", async ({ page }) => {
//   await page.goto("https://playwright.dev/");

//   // Click the get started link.
//   await page.getByRole("link", { name: "Get started" }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(
//     page.getByRole("heading", { name: "Installation" })
//   ).toBeVisible();
// });
