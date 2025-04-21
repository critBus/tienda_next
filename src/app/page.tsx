import HeaderComponent from '@/components/HeaderComponent';
import LatestAdditions from '@/components/home/LatestAdditions';
import LinkingYourPurchases from '@/components/home/LinkingYourPurchases';
import RecommendedProducts from '@/components/home/RecommendedProducts';
import SecurePaymentImg from '@/components/home/SecurePaymentImg';
import ShippingCuba from '@/components/home/ShippingCuba';
import Subscriptions from '@/components/home/SubscriptionsSection';
import TopBar from '@/components/home/TopBar';
import BestSellingProducts from '@/components/home/BestSellingProducts';
import CategoryNavigation from '@/components/home/CategoryNavigation';

export default function Home() {
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
      <LinkingYourPurchases />
    </main>
  );
}
