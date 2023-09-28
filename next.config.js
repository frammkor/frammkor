/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV !== "production" ? undefined : "export",
  // basePath: process.env.NODE_ENV !== "production" ? '/frammkor.github.io' : '/',

  experimental: {
    typedRoutes: true,
  },
}

module.exports = nextConfig
