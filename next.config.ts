import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use default server rendering (allows API routes)
  // Remove 'output: export' to support API routes and dynamic features

  // Allow images from external domains
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'abetworks.in',
      },
    ],
  },

  // Trailing slashes for cleaner URLs
  trailingSlash: true,

  // Enable experimental features if needed
  experimental: {
    // optimizePackageImports: ['@radix-ui/react-dialog'],
  },
};

export default nextConfig;
