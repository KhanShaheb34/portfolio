'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import posthog from 'posthog-js';
import type { ReactNode } from 'react';
import { Suspense, useEffect } from 'react';

type PosthogProviderProps = {
  children: ReactNode;
};

declare global {
  type PosthogWindow = Window & {
    posthogInitialized?: boolean;
  };
}

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && posthog) {
      let url = window.origin + pathname;
      if (searchParams.toString()) {
        url = `${url}?${searchParams.toString()}`;
      }
      posthog.capture('$pageview', {
        $current_url: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
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
      capture_pageview: false, // Disable automatic pageview capture, as we capture manually
    });

    typedWindow.posthogInitialized = true;
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </>
  );
};

export default PosthogProvider;
