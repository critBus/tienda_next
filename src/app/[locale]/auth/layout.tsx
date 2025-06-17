import AuthLayout from "./_components/layouts/AuthLayout";

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Readonly<Props>) {
  return (
    <AuthLayout>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          {children}
        </div>
      </div>
    </AuthLayout>
  );
}
