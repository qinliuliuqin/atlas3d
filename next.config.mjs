/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/atlas3d',
  assetPrefix: '/atlas3d/',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
