/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true 
  },
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  optimizeFonts: false, // Disable font optimization to prevent network issues
};

module.exports = nextConfig;