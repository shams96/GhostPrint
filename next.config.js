/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  
  // Image optimization configuration
  images: {
    domains: [
      'lh3.googleusercontent.com', // For Google profile images
      'graph.microsoft.com', // For Microsoft profile images
      'avatars.githubusercontent.com', // For GitHub avatars
      'cdn.ghostprint.app', // For our own CDN
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    minimumCacheTTL: 60,
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; connect-src 'self' https://*.supabase.co https://api.openai.com; img-src 'self' data: blob: https://*.googleusercontent.com https://graph.microsoft.com https://avatars.githubusercontent.com https://cdn.ghostprint.app; style-src 'self' 'unsafe-inline'; font-src 'self' data:; frame-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; worker-src 'self' blob:;"
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
        ],
      },
    ];
  },

  // Webpack configuration for production optimizations
  webpack: (config, { isServer }) => {
    // Avoid SSR issues with libraries that use browser APIs
    if (isServer) {
      config.externals = [...config.externals, 'canvas', 'jsdom'];
    }

    // Optimization for production builds
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 10,
        },
      };
    }

    return config;
  },

  // ESLint configuration
  eslint: {
    dirs: ['src'],
    ignoreDuringBuilds: process.env.NODE_ENV === 'production',
  },

  // Enable compression
  compress: true,

  // Output directory for the build
  distDir: '.next',

  // Configure output for better tree-shaking
  output: 'standalone',
};

module.exports = nextConfig;
