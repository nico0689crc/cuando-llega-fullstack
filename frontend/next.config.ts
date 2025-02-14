import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/paradas',
        permanent: true,
      },
      {
        source: '/paradas',
        destination: '/paradas/calles',
        permanent: true,
      }
    ];
  }
};

export default nextConfig;
