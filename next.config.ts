import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";


export const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
  turbopack: {}
};

export default withNextIntl(nextConfig);
