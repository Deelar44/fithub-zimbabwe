import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Authorize Unsplash
      },
      {
        protocol: "https",
        hostname: "images.pexels.com", // Authorize Pexels
      },
      // Add other domains here if needed
    ],
  },
};

export default nextConfig;
