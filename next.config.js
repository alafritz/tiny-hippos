/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' - we're using full Next.js now
  images: {
    // Cloudflare Images optimization
    loader: 'custom',
    loaderFile: './image-loader.js'
  },
  // Handle Three.js and other client-side libraries
  experimental: {
    esmExternals: 'loose'
  }
}

module.exports = nextConfig
