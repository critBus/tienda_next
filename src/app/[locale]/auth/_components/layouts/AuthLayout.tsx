const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <section
        className="relative w-full h-full flex flex-col justify-center items-center min-h-screen bg-blueGray-800 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/img/register_bg_2.png')",
        }}
      >
        {children}
      </section>
    </main>
  );
};

export default AuthLayout;
