/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <--- Add this line
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
};

export default nextConfig;