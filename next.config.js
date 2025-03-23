/**
 * @type {import('next').NextConfig}
 */

const path = require('path');

const nextConfig = {
  output: 'export',
  //debug: true,
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable Image Optimization
  },
  webpack: (config) => {
    config.resolve.alias['@lib'] = path.join(__dirname, 'lib');
    return config;
  },
  
  
}

module.exports = nextConfig
