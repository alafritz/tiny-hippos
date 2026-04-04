/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js'
  },
}

module.exports = nextConfig