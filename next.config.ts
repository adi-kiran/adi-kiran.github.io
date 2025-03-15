import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // assetPrefix: './',
  // basePath: "/adi-kiran.github.io",
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
