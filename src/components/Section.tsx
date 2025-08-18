import type { ReactNode } from 'react';

type SectionProps = {
  title: string;
  children: ReactNode;
  titleSize?: 'lg' | 'xl';
};

export default function Section({
  title,
  children,
  titleSize = 'xl',
}: SectionProps) {
  const titleClass = titleSize === 'xl' ? 'text-2xl' : 'text-xl';

  return (
    <div className="flex-1 p-8">
      <div className="space-y-6">
        <h1 className={`font-normal ${titleClass}`}>{title}</h1>
        {children}
      </div>
    </div>
  );
}
