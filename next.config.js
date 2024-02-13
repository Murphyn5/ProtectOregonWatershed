/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination:
          process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:5324/api/:path*'
            : `${process.env.POSTGRES_URL}/api/:path*`,
      },
    ]
  },
}

module.exports = nextConfig;
