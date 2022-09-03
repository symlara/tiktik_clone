/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["www.canva.com", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
