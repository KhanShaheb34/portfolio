import Link from 'next/link';
import type { ReactNode } from 'react';

type InnerPageProps = {
  backHref?: string;
  backLabel?: string;
  children: ReactNode;
};

export default function InnerPage({
  backHref = '/',
  backLabel = '← Home',
  children,
}: InnerPageProps) {
  return (
    <div
      className="min-h-screen bg-background text-foreground"
      data-testid="inner-page"
    >
      <div className="mx-auto max-w-2xl px-8 py-16">
        <Link
          className="mb-8 inline-block text-muted text-sm transition-colors hover:text-foreground"
          href={backHref}
          prefetch={true}
        >
          {backLabel}
        </Link>
        <div className="space-y-10">{children}</div>
      </div>
    </div>
  );
}
