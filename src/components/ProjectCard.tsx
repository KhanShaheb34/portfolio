type ProjectCardProps = {
  title: string;
  badge: string;
  description: string;
};

export default function ProjectCard({
  title,
  badge,
  description,
}: ProjectCardProps) {
  return (
    <div>
      <div className="mb-2 flex items-center space-x-2">
        <h3 className="text-xl">{title}</h3>
        <span className="rounded bg-muted px-2 py-1 text-background text-xs">
          {badge}
        </span>
      </div>
      <p className="text-muted">{description}</p>
    </div>
  );
}
