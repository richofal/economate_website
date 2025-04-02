import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["storage.googleapis.com"], // Allow external image domain
  },
};

export default nextConfig;
