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
    return (
      <div className="space-y-1">
        <a
          className="block text-md transition-colors hover:text-muted"
          href={href}
        >
          {title}
        </a>
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
