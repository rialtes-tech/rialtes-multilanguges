// module.exports = nextConfig;


import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  webpack: (config) => {
    config.externals = config.externals || {};
    return config;
  },
};

export default withBundleAnalyzer(nextConfig);
