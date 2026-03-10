'use client';

import Link from 'next/link';
import posthog from 'posthog-js';

type PostCardProps = {
  title: string;
  date: string;
  href: string;
  isVideo?: boolean;
  isBook?: boolean;
};

export default function PostCard({
  title,
  date,
  href,
  isVideo = false,
  isBook = false,
}: PostCardProps) {
  const isExternal = href.startsWith('http');

  const handlePostClick = () => {
    posthog.capture('post_clicked', {
      title,
      href,
      is_video: isVideo,
      is_book: isBook,
    });
  };

  const prefix = isBook ? '\u{1F4D4} ' : isVideo ? '\u25B6\uFE0E ' : '';

  return (
    <div className="space-y-1">
      {isExternal ? (
        <a
          className="block text-md transition-colors hover:text-muted"
          href={href}
          onClick={handlePostClick}
          rel="noopener noreferrer"
          target="_blank"
        >
          {prefix}{title}
        </a>
      ) : (
        <Link
          className="block text-md transition-colors hover:text-muted"
          href={href}
          onClick={handlePostClick}
          prefetch={true}
        >
          {prefix}{title}
        </Link>
      )}
      <p className="text-muted text-sm">{date}</p>
    </div>
  );
}
