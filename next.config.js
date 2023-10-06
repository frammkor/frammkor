/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
  basePath: process.env.NODE_ENV === "production" ? '/frammkor.github.io' : '',

  experimental: {
    typedRoutes: true,
  },
}

module.exports = nextConfig
