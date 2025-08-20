import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Shakirul Hasan Khan | Software Engineer & AI Developer',
    short_name: 'Shakirul Khan',
    description:
      'Software Engineer with 4+ years experience in full-stack development, AI, and open source. Currently building AI-powered applications with React, NextJS, and Rust.',
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
