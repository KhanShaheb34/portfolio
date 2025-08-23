'use client';

import type { ReactNode } from 'react';

type ColumnProps = {
  children: ReactNode;
};

export default function Column({ children }: ColumnProps) {
  return (
    <div className="w-full transition-opacity duration-300 ease-in-out md:h-full md:min-h-screen md:w-[45vw] md:flex-none md:snap-start md:flex-col lg:w-[40vw] xl:w-[30vw]">
      <div className="scrollbar-hide overflow-y-auto md:h-full">{children}</div>
    </div>
  );
}
