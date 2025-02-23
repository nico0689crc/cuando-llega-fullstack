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
        destination: '/paradas/lineas',
        permanent: true,
      }
    ];
  }
};

export default nextConfig;
