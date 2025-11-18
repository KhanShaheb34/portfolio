import Link from 'next/link';

type PostCardProps = {
  title: string;
  date: string;
  href: string;
  isVideo?: boolean;
};

export default function PostCard({
  title,
  date,
  href,
  isVideo = false,
}: PostCardProps) {
  const isExternal = href.startsWith('http');

  return (
    <div className="space-y-1">
      {isExternal ? (
        <a
          className="block text-md transition-colors hover:text-muted"
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {isVideo && '▶︎ '}
          {title}
        </a>
      ) : (
        <Link
          className="block text-md transition-colors hover:text-muted"
          href={href}
          prefetch={true}
        >
          {isVideo && '▶︎ '}
          {title}
        </Link>
      )}
      <p className="text-muted text-sm">{date}</p>
    </div>
  );
}
