'use client';

import posthog from 'posthog-js';

type OpenSourceCardProps = {
  name: string;
  stars: number;
  description: string;
  href: string;
};

export default function OpenSourceCard({
  name,
  stars,
  description,
  href,
}: OpenSourceCardProps) {
  const handleClick = () => {
    posthog.capture('opensource_project_clicked', {
      name,
      href,
      stars,
    });
  };

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <a
          className="text-md transition-colors hover:text-muted"
          href={href}
          onClick={handleClick}
        >
          {name}
        </a>
        <span className="text-muted">{stars} ⭐</span>
      </div>
      <p className="text-muted text-sm">{description}</p>
    </div>
  );
}
