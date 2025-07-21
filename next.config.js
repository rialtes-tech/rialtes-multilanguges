/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.externals = config.externals || {};
    config.externals['react-google-recaptcha'] = 'commonjs react-google-recaptcha';
    return config;
  },
};

module.exports = withNextIntl(nextConfig);
