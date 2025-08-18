import type { ReactNode } from 'react';

type SectionProps = {
  title: string;
  children: ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <div className="flex-1 p-8">
      <div className="space-y-6">
        <h1
          className={
            'font-bold text-muted text-xs uppercase underline decoration-1 underline-offset-2'
          }
        >
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
}
