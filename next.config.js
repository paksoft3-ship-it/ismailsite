/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.carlogos.org',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
    // Reduce memory usage during image optimization
    minimumCacheTTL: 60,
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  // Old pages are muted (moved to src/app/_disabled) while the site runs as a
  // single home page. Temporary (307) so nothing is cached when they come back.
  async redirects() {
    return [
      { source: '/iletisim', destination: '/#iletisim', permanent: false },
      { source: '/hakkimizda', destination: '/#hakkimizda', permanent: false },
      { source: '/hizmetler', destination: '/#hizmetler', permanent: false },
      { source: '/hizmetler/:slug', destination: '/#hizmetler', permanent: false },
      { source: '/sehirler', destination: '/#sehirler', permanent: false },
      { source: '/sehirler/:slug', destination: '/#sehirler', permanent: false },
      { source: '/sss', destination: '/#sss', permanent: false },
      { source: '/blog', destination: '/', permanent: false },
      { source: '/blog/:slug', destination: '/', permanent: false },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
