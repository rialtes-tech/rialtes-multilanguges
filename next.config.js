// module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  webpack: (config) => {
    config.externals = config.externals || {};
    config.externals['react-google-recaptcha'] = 'commonjs react-google-recaptcha';
    return config;
  },
  

};

export default nextConfig;
