import { test, expect } from "@playwright/test";
import messages from "../locales/en.json";
import messages_es from "../locales/es.json";
import "dotenv/config";
import { TypeLocales } from "@/i18n/routing";
import HomePage from "./pages/home/home.page";

const getMessages = (locale: TypeLocales) => {
  if (locale == "es") {
    return messages_es;
  }
  return messages;
};

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
    await page.goto("/");
    // await page.waitForTimeout(5000);
    // Detectar idioma actual por la URL

    // const url = page.url();
    const currentLang = "en"; //url.includes("/es") ? "es" : "en";
    await expect(page).toHaveURL(new RegExp(`/${currentLang}`));
    const nextLang = "en"; //currentLang === "es" ? "en" : "en";
    const current_messages = getMessages(currentLang);

    await expect(
      page.getByText(current_messages["LatestAdditions"]["title"])
    ).toBeVisible();

    await expect(
      page.getByText(current_messages["LatestAdditions"]["title"])
    ).toBeVisible();

    //  Abrir el selector de idioma
    const bottonOpenLocale = page.getByRole("button", {
      name: "Locale Selected",
    });
    await expect(bottonOpenLocale).toBeVisible();
    await bottonOpenLocale.click();

    //  Seleccionar el otro idioma
    const bottonNextLang = page.locator(
      `button >> img[src*="/icons/i18/circle/${nextLang}.svg"]`
    );
    await expect(bottonNextLang).toBeVisible();
    await bottonNextLang.click();

    //  Esperar a que la URL cambie al nuevo idioma
    await expect(page).toHaveURL(new RegExp(`/${nextLang}`));

    // Verificar que el texto traducido cambió
    const messages_nextLang = getMessages(nextLang);

    // const messages_nextLang = require(`../locales/${nextLang}.json`);
    await expect(
      page.getByText(messages_nextLang["LatestAdditions"]["title"])
    ).toBeVisible();
  });

  test("Change currency", async ({ page }) => {
    await page.goto("/");
    const currentCurrency = "USD";
    const nextCurrency = "EUR";
    const currentPrice = "5.99";
    const nextPrice = "5.51";

    const bottonOpenCurrency = page.getByRole("button", {
      name: currentCurrency,
    });
    const bottonNextCurrency = page.getByRole("button", {
      name: nextCurrency,
    });

    await expect(bottonOpenCurrency).toBeVisible();
    await expect(bottonNextCurrency).not.toBeVisible();

    // const countFirstPrice: number = await page.getByText(currentPrice).count();
    await expect(await page.getByText(currentPrice).count()).toBeGreaterThan(0);
    await expect(await page.getByText(nextPrice).count()).toBe(0);

    await bottonOpenCurrency.click();

    await expect(bottonNextCurrency).toBeVisible();
    await bottonNextCurrency.click();

    await expect(bottonOpenCurrency).not.toBeVisible();

    await expect(await page.getByText(currentPrice).count()).toBe(0);
    await expect(await page.getByText(nextPrice).count()).toBeGreaterThan(0);
  });

  test("Change site", async ({ page }) => {
    await page.goto("/");
    const homePage = new HomePage(page);
    const town = "Nuevo Vedado";
    const municipality = "Plaza de la Revolución"; //"La Habana Vieja";
    const province = "La Habana";
    const productCountry = "Cerveza Premium";
    const productProvince = "Masa para Pizza";
    const productMunicipality = "Pasta Barbacoa";
    const productTown = "Especias Refinadas";

    //seleccionar todo el pais
    await homePage.selectLocation({
      productsName: [productCountry],
    });

    await homePage.selectLocation({
      provinceName: province,
      productsName: [productCountry, productProvince],
    });

    await homePage.selectLocation({
      provinceName: province,
      municipalityName: municipality,
      productsName: [productCountry, productProvince, productMunicipality],
    });

    await homePage.selectLocation({
      provinceName: province,
      municipalityName: municipality,
      townName: town,
      productsName: [
        productCountry,
        productProvince,
        productMunicipality,
        productTown,
      ],
    });

    await homePage.selectLocation({
      productsName: [productCountry],
    });
    await expect(page.getByText(province)).not.toBeVisible();
    await expect(page.getByText(municipality)).not.toBeVisible();
    await expect(page.getByText(town)).not.toBeVisible();
  });
});
