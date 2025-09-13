/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Handle Three.js and other client-side libraries
  experimental: {
    esmExternals: 'loose'
  },
  // Ensure compatibility with static export
  typescript: {
    ignoreBuildErrors: false
  },
  eslint: {
    ignoreDuringBuilds: false
  }
}

module.exports = nextConfig
