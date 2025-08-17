import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.fna.fbcdn.net",
        port: "",
        pathname: "/**", // allow all images
      },
      {
        protocol: "https",
        hostname: "instagram.fyvr3-1.fna.https",
        port: "",
        pathname: "/**", // allow all images
      },
    ],
  },
};

export default nextConfig