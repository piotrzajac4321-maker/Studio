/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pages serwuje pod /Studio — lokalnie działa bez basePath
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
