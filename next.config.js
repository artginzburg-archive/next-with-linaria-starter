const withLinaria = require('next-with-linaria')

/** @type {import('next-with-linaria').LinariaConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
}

module.exports = withLinaria(nextConfig)
