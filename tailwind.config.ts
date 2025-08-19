import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
      },
      fontFamily: {
        mono: ['var(--font-roboto-mono)', 'monospace'],
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-lora)', 'serif'],
      },
      lineHeight: {
        relaxed: '1.7',
      },
      letterSpacing: {
        wide: '0.02em',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
