import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    mdxRs: false,
    exposeTestingApiInProductionBuild: process.env.EXPOSE_TESTING_API === '1',
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
  rewrites() {
    return Promise.resolve([
      {
        source: '/relay-RpyN/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/relay-RpyN/:path*',
        destination: 'https://us.i.posthog.com/:path*',
      },
    ]);
  },

  skipTrailingSlashRedirect: true,
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const mdxConfig = withMDX(nextConfig) as NextConfig;

export default mdxConfig;
