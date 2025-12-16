/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // No basePath needed since we're using custom domain atlas3d.ai
  trailingSlash: true,
}

export default nextConfig
