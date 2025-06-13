import RootLayoutContent from "@/components/layouts/RootLayoutContent";

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Readonly<Props>) {
  return <RootLayoutContent>{children}</RootLayoutContent>;
}
