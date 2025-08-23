'use client';

import type { ReactNode } from 'react';
import { useColumnVisibility } from '@/hooks/useColumnVisibility';

type ColumnProps = {
  children: ReactNode;
  index: number;
};

export default function Column({ children, index }: ColumnProps) {
  const isFullyVisible = useColumnVisibility(index);

  return (
    <div
      className={`w-full transition-opacity duration-300 ease-in-out md:h-full md:min-h-screen md:w-[45vw] md:flex-none md:snap-start md:flex-col lg:w-[40vw] xl:w-[30vw] ${
        isFullyVisible ? 'md:opacity-100' : 'md:opacity-50'
      }`}
    >
      <div className="scrollbar-hide overflow-y-auto md:h-full">{children}</div>
    </div>
  );
}
