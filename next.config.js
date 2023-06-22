/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  publicRuntimeConfig: {
    VERCEL_URL: process.env.VERCEL_URL,
  },
};

