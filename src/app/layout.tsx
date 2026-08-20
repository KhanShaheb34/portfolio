import type { Metadata } from 'next';
import { Fira_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import PosthogProvider from './posthog-provider';

const firaMono = Fira_Mono({
  variable: '--font-fira-mono',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Shakirul Hasan Khan | Software Engineer & Builder',
  description:
    "Software engineer and founder with 5+ years shipping full-stack products, AI systems, and tools. Author of Montu Mia's System Design. Currently building at Ramble and Thinking Lab.",
  keywords: [
    'Shakirul Hasan Khan',
    'Software Engineer',
    'Thinking Lab',
    'Ramble',
    'Montu Mia',
    'React',
    'Next.js',
    'TypeScript',
    'Rust',
    'Full-Stack Developer',
  ],
  authors: [{ name: 'Shakirul Hasan Khan' }],
  creator: 'Shakirul Hasan Khan',
  publisher: 'Shakirul Hasan Khan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shakirul.dev',
    title: 'Shakirul Hasan Khan | Software Engineer & Builder',
    description:
      "Software engineer and founder with 5+ years shipping full-stack products, AI systems, and tools. Author of Montu Mia's System Design.",
    siteName: 'Shakirul Hasan Khan Portfolio',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Shakirul Hasan Khan - Software Engineer & Builder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shakirul Hasan Khan | Software Engineer & Builder',
    description:
      "Software engineer and founder. Author of Montu Mia's System Design. Building at Ramble and Thinking Lab.",
    creator: '@_khanshaheb',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: '/icons/favicon-32x32.png',
    shortcut: '/icons/favicon-16x16.png',
    apple: '/icons/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        url: '/icons/favicon.ico',
      },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaMono.variable} antialiased`}>
        <PosthogProvider>{children}</PosthogProvider>
        <Analytics />
      </body>
    </html>
  );
}
