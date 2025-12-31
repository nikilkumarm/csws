/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Use SWC for minification (faster)
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove X-Powered-By header for security/size
  images: {
    domains: ["images.unsplash.com", "plus.unsplash.com", "camouflageclicks.com"],
    formats: ['image/avif', 'image/webp'], // Prefer modern formats
    minimumCacheTTL: 60, // Cache optimized images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Default device sizes for responsive images
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Default image sizes
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // Remove console.log in production
  },
};

module.exports = nextConfig;
