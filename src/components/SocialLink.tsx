'use client';

import {
  BookOpenIcon,
  EnvelopeIcon,
  FileTextIcon,
  GithubLogoIcon,
  GraduationCapIcon,
  LinkedinLogoIcon,
  UserIcon,
  XLogoIcon,
} from '@phosphor-icons/react/ssr';
import Link from 'next/link';
import posthog from 'posthog-js';

type SocialLinkProps = {
  icon: string;
  text: string;
  href: string;
};

const iconMap: Record<string, typeof GithubLogoIcon> = {
  envelope: EnvelopeIcon,
  github: GithubLogoIcon,
  linkedin: LinkedinLogoIcon,
  twitter: XLogoIcon,
  user: UserIcon,
  scholar: GraduationCapIcon,
  resume: FileTextIcon,
  book: BookOpenIcon,
};

const SocialLink = ({ icon, text, href }: SocialLinkProps) => {
  const IconComponent = iconMap[icon as keyof typeof iconMap];
  const isExternal = href.startsWith('http');

  const handleClick = () => {
    posthog.capture('social_link_clicked', {
      network: icon,
      href,
    });
  };

  return (
    <div className="flex items-center space-x-2">
      {IconComponent && <IconComponent size={18} weight="fill" />}
      {isExternal ? (
        <Link
          className="transition-colors hover:text-muted"
          href={href}
          onClick={handleClick}
          rel="noopener noreferrer"
          target="_blank"
        >
          {text}
        </Link>
      ) : (
        <Link
          className="transition-colors hover:text-muted"
          href={href}
          onClick={handleClick}
          prefetch={true}
        >
          {text}
        </Link>
      )}
    </div>
  );
};

export default SocialLink;
