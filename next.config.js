/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactRoot: true,
    concurrentFeatures: true,
    serverComponents: true,
  },
}

module.exports = nextConfig
