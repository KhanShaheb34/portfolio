import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Shakirul Hasan Khan | Software Engineer & Builder',
    short_name: 'Shakirul Khan',
    description:
      "Software engineer and founder with 5+ years shipping full-stack products, AI systems, and tools. Author of Montu Mia's System Design. Building at Ramble and Thinking Lab.",
    start_url: '/',
    display: 'standalone',
    background_color: '#141210',
    theme_color: '#141210',
    icons: [
      {
        src: '/icons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icons/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/icons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/icons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
  };
}
