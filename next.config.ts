import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const nextConfig: NextConfig = {
  /* config options here */
  redirects: async () => [
    {
      source: "/", // Ruta antigua
      destination: "/shop", // Ruta nueva
      permanent: true, // Indica si es permanente (SEO)
    },
  ],
};
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
