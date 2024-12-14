import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "*",
      "assets.aceternity.com",
      "www.piyushgarg.dev",
      "images.unsplash.com",
    ],
  },
};

export default nextConfig;
