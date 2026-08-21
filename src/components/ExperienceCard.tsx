import Link from 'next/link';

type ExperienceCardProps = {
  company: string;
  position: string;
  duration: string;
  description: string;
  slug: string;
};

export default function ExperienceCard({
  company,
  position,
  duration,
  description,
  slug,
}: ExperienceCardProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <Link
            className="inline-block text-md transition-colors hover:text-muted"
            href={`/work/${slug}`}
            prefetch={true}
          >
            {position}
          </Link>
          <p className="text-muted text-sm">
            {company} • {duration}
          </p>
        </div>
      </div>
      <p className="text-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
}
