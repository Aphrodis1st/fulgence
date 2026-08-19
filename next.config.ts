import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 768, 1024, 1280],
    imageSizes: [120, 256, 384],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
