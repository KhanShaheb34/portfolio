import type { ReactNode } from 'react';

type ColumnProps = {
  children: ReactNode;
};

export default function Column({ children }: ColumnProps) {
  return (
    <div className="min-h-screen w-full md:h-full md:w-[40vw] md:flex-none md:snap-start md:flex-col lg:w-[33.33vw] xl:w-[28.57vw]">
      <div className="scrollbar-hide overflow-y-auto md:h-full">{children}</div>
    </div>
  );
}
