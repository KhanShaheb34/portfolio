import type { Metadata } from 'next';
import { Fira_Mono } from 'next/font/google';
import './globals.css';

const firaMono = Fira_Mono({
  variable: '--font-fira-mono',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Shakirul Hasan Khan | Software Engineer & AI Developer',
  description:
    'Software Engineer with 4+ years experience in full-stack development, AI, and open source. Currently building AI-powered applications with React, NextJS, and Rust.',
  keywords: [
    'Shakirul Hasan Khan',
    'Software Engineer',
    'AI Developer',
    'React',
    'NextJS',
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
    url: 'https://shakirul-dev.vercel.app',
    title: 'Shakirul Hasan Khan | Software Engineer & AI Developer',
    description:
      'Software Engineer with 4+ years experience in full-stack development, AI, and open source. Currently building AI-powered applications with React, NextJS, and Rust.',
    siteName: 'Shakirul Hasan Khan Portfolio',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Shakirul Hasan Khan - Software Engineer & AI Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shakirul Hasan Khan | Software Engineer & AI Developer',
    description:
      'Software Engineer with 4+ years experience in full-stack development, AI, and open source.',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
