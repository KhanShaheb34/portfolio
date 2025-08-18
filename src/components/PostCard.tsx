type PostCardProps = {
  title: string;
  date: string;
  href: string;
};

export default function PostCard({ title, date, href }: PostCardProps) {
  return (
    <div className="space-y-1">
      <a
        className="block text-md transition-colors hover:text-muted"
        href={href}
      >
        {title}
      </a>
      <p className="text-muted text-sm">{date}</p>
    </div>
  );
}
