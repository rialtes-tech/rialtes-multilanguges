/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require('next-intl/plugin');
 
// 👇 Point this to your request.js file
const withNextIntl = createNextIntlPlugin('./src/i18n/request.js');
 
const nextConfig = {
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.externals = config.externals || {};
    return config;
  },
};
 
module.exports = withNextIntl(nextConfig);