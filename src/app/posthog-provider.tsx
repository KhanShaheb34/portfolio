'use client';

import posthog from 'posthog-js';
import type { ReactNode } from 'react';
import { useEffect } from 'react';

type PosthogProviderProps = {
  children: ReactNode;
};

declare global {
  type PosthogWindow = Window & {
    posthogInitialized?: boolean;
  };
}

const PosthogProvider = ({ children }: PosthogProviderProps) => {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const typedWindow = window as unknown as PosthogWindow;

    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!posthogKey) {
      return;
    }

    if (typedWindow.posthogInitialized) {
      return;
    }

    posthog.init(posthogKey, {
      api_host: '/relay-RpyN',
      ui_host: 'https://us.posthog.com',
    });

    typedWindow.posthogInitialized = true;
  }, []);

  return children;
};

export default PosthogProvider;
