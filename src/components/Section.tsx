import type { ReactNode } from 'react';
import SectionLabel from '@/components/SectionLabel';

type SectionProps = {
  title: string;
  children: ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <div className="flex-1 p-8">
      <div className="space-y-6">
        <SectionLabel title={title} />
        {children}
      </div>
    </div>
  );
}
