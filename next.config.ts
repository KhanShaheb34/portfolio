import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  experimental: {
    mdxRs: false,
  },
  webpack: (config, { dev, isServer }) => {
    // Disable caching to resolve snapshot dependencies issue
    if (!(dev || isServer)) {
      config.cache = false;
    }
    return config;
  },
  redirects() {
    return Promise.resolve([
      {
        source: '/resume',
        destination: '/Resume.pdf',
        permanent: false,
      },
      {
        source: '/Resume',
        destination: '/Resume.pdf',
        permanent: false,
      },
    ]);
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const mdxConfig = withMDX(nextConfig) as NextConfig;

export default mdxConfig;
