/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  
  // Enable compression
  compress: true,
  
  // Output directory for the build
  distDir: '.next',
};

module.exports = nextConfig;
