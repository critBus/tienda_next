import ShopLayout from "./_components/layouts/ShopLayout";

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Readonly<Props>) {
  return <ShopLayout>{children}</ShopLayout>;
}
