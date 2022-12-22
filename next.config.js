/** @type {import('next').NextConfig} */
const withVideos = require("next-videos");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["admin.velson24.ru", "velson.testers-site.ru", "velson.project", "velson-back"],
    formats: ["image/avif", "image/webp"],
    allowFutureImage: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = withVideos(nextConfig);
