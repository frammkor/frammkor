/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === "production" ? "export" : undefined,

  // ref https://wallis.dev/blog/next-js-basepath-and-assetprefix
  // basePath: process.env.NODE_ENV === "production" ? "/frammkor.github.io" : '',
  // assetPrefix: process.env.NODE_ENV === "production" ? "/frammkor.github.io/" : '/',

  experimental: {
    typedRoutes: true,
  },

}

module.exports = nextConfig
