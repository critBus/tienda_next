import LatestAdditions from "./_components/LatestAdditions";

import RecommendedProducts from "./_components/RecommendedProducts";
import SecurePaymentImg from "./_components/SecurePaymentImg";
import ShippingCuba from "./_components/ShippingCuba";
import Subscriptions from "./_components/SubscriptionsSection";
import TopBar from "./_components/TopBar";
import BestSellingProducts from "./_components/BestSellingProducts";
import CategoryNavigation from "./_components/CategoryNavigation";

export default function Page() {
  return (
    <main>
      <TopBar />
      <CategoryNavigation />
      <RecommendedProducts />
      <SecurePaymentImg />
      <BestSellingProducts />
      <LatestAdditions />
      <ShippingCuba />
      <Subscriptions />
      {/* <LinkingYourPurchases /> */}
    </main>
  );
}
