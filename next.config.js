/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'techcrunch.com',
      },
    ],
  },
}

module.exports = nextConfig
