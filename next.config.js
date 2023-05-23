/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.1.115",
        port: "8000",
      },
      {
        protocol: "https",
        hostname: "assets.nflxext.com",
      },
    ],
  },
};

module.exports = nextConfig;
