'use client';

import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
} from '@phosphor-icons/react';

type SocialLinkProps = {
  icon: string;
  text: string;
  href: string;
};

const iconMap: Record<string, typeof GithubLogoIcon> = {
  github: GithubLogoIcon,
  linkedin: LinkedinLogoIcon,
  twitter: XLogoIcon,
};

export default function SocialLink({ icon, text, href }: SocialLinkProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap];

  return (
    <div className="flex items-center space-x-2">
      {IconComponent && <IconComponent size={18} weight="fill" />}
      <a className="transition-colors hover:text-muted" href={href}>
        {text}
      </a>
    </div>
  );
}
