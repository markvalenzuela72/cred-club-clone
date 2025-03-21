import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "web-images.credcdn.in",
        pathname: "**",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
