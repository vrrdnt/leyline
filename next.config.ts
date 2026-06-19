import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "/s2/favicons",
      },
      {
        protocol: "https",
        hostname: "d2armorpicker.com",
        pathname: "/favicon.ico",
      },
      {
        protocol: "https",
        hostname: "destiny.report",
        pathname: "/a/3044c57c.png",
      },
    ],
  },
};

export default nextConfig;
