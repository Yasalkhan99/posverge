/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/static/:path*',
        destination: 'https://aivora-react.netlify.app/static/:path*',
      },
    ]
  },
}

module.exports = nextConfig

