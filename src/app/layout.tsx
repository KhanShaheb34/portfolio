import type { Metadata } from 'next';
import { Inter, Lora, Roboto_Mono } from 'next/font/google';
import './globals.css';

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  display: 'swap',
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
    url: 'https://shakirul.dev',
    title: 'Shakirul Hasan Khan | Software Engineer & AI Developer',
    description:
      'Software Engineer with 4+ years experience in full-stack development, AI, and open source. Currently building AI-powered applications with React, NextJS, and Rust.',
    siteName: 'Shakirul Hasan Khan Portfolio',
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
      <body
        className={`${robotoMono.variable} ${inter.variable} ${lora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
