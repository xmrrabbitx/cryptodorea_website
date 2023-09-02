/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  debug: true,
  reactStrictMode: true,

  webpack: (config) => {
    config.resolve.alias['@lib'] = path.join(__dirname, 'lib');
    return config;
  },
  
}

module.exports = nextConfig
