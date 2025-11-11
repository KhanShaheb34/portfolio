import Link from 'next/link';

type ProjectCardProps = {
  title: string;
  badge: string;
  description: string;
  slug?: string;
};

export default function ProjectCard({
  title,
  badge,
  description,
  slug,
}: ProjectCardProps) {
  return (
    <div className="space-y-1">
      <div className="flex items-center space-x-2">
        {slug ? (
          <Link
            className="block text-md transition-colors hover:text-muted"
            href={`/projects/${slug}`}
            prefetch={true}
          >
            {title}
          </Link>
        ) : (
          <p className="text-md">{title}</p>
        )}

        <span className="rounded bg-muted px-2 py-0.5 text-background text-xs">
          {badge}
        </span>
      </div>
      <p className="text-muted text-sm">{description}</p>
    </div>
  );
}
