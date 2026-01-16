/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Aleph Registry',
    description: 'The aleph workspaces.',
    icon: 'https://img.icons8.com/?size=100&id=53372&format=png&color=000000',
    listUrl: 'https://github.com/alephramos/aleph-registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
