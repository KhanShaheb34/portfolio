import {
  FileTextIcon,
  GithubLogoIcon,
  GraduationCapIcon,
  LinkedinLogoIcon,
  UserIcon,
  XLogoIcon,
} from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

type SocialLinkProps = {
  icon: string;
  text: string;
  href: string;
};

const iconMap: Record<string, typeof GithubLogoIcon> = {
  github: GithubLogoIcon,
  linkedin: LinkedinLogoIcon,
  twitter: XLogoIcon,
  user: UserIcon,
  scholar: GraduationCapIcon,
  resume: FileTextIcon,
};

export default function SocialLink({ icon, text, href }: SocialLinkProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap];
  const isExternal = href.startsWith('http');

  return (
    <div className="flex items-center space-x-2">
      {IconComponent && <IconComponent size={18} weight="fill" />}
      {isExternal ? (
        <Link
          className="transition-colors hover:text-muted"
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {text}
        </Link>
      ) : (
        <Link
          className="transition-colors hover:text-muted"
          href={href}
          prefetch={true}
        >
          {text}
        </Link>
      )}
    </div>
  );
}
