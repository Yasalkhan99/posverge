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
  // Exclude soireerev-main folder from build
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/soireerev-main/**', '**/aivora-react.netlify.app/**', '**/hts-cache/**'],
    }
    return config
  },
}

module.exports = nextConfig

