import Link from 'next/link';

type InterestCardProps = {
  title: string;
  description: string;
  href?: string;
};

export default function InterestCard({
  title,
  description,
  href,
}: InterestCardProps) {
  if (href) {
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
            {title}
          </a>
        ) : (
          <Link
            className="block text-md transition-colors hover:text-muted"
            href={href}
            prefetch={true}
          >
            {title}
          </Link>
        )}
        <p className="text-muted text-sm">{description}</p>
      </div>
    );
  }

  return (
    <div className="space-y-1">
      <h3 className="text-md">{title}</h3>
      <p className="text-muted text-sm">{description}</p>
    </div>
  );
}
