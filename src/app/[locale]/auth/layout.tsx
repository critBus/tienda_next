import AuthLayout from "@/components/layouts/AuthLayout";

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Readonly<Props>) {
  return <AuthLayout>{children}</AuthLayout>;
}
