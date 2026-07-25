const withLinaria = require('next-with-linaria')

/** @type {import('next-with-linaria').LinariaConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/next-with-linaria-starter',
  images: { unoptimized: true },
}

module.exports = withLinaria(nextConfig)
