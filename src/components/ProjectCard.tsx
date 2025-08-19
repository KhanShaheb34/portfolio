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
  const content = (
    <div className="space-y-1">
      <div className="flex items-center space-x-2">
        <h3 className="text-md">{title}</h3>
        <span className="rounded bg-muted px-2 py-0.5 text-background text-xs">
          {badge}
        </span>
      </div>
      <p className="text-muted">{description}</p>
    </div>
  );

  if (slug) {
    return (
      <Link
        className="block transition-opacity hover:opacity-80"
        href={`/projects/${slug}`}
      >
        {content}
      </Link>
    );
  }

  return content;
}
