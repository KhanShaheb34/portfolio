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
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <a className="text-md transition-colors hover:text-muted" href={href}>
          {name}
        </a>
        <span className="text-muted">⭐ {stars}</span>
      </div>
      <p className="text-muted text-sm">{description}</p>
    </div>
  );
}
