type SocialLinkProps = {
  icon: string;
  text: string;
  href: string;
};

export default function SocialLink({ icon, text, href }: SocialLinkProps) {
  return (
    <div className="flex items-center space-x-2">
      <span>{icon}</span>
      <a className="transition-colors hover:text-muted" href={href}>
        {text}
      </a>
    </div>
  );
}
