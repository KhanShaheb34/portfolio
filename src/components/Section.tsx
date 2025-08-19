import type { ReactNode } from 'react';

type SectionProps = {
  title: string;
  children: ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <div className="flex-1 p-8">
      <div className="space-y-6">
        <p
          className={
            'border-accent/60 border-l-8 pl-2 font-bold text-accent/60 text-xs uppercase'
          }
        >
          {title}
        </p>
        {children}
      </div>
    </div>
  );
}
