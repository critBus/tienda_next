import ProductsSection from "./ProductsSection";

import { useTranslations } from "next-intl";

export default function LinkingYourPurchases() {
  const t = useTranslations("LinkingYourPurchases");

  return <ProductsSection title={t("title")} products={[]} />;
}
