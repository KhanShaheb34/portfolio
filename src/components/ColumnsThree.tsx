import type { ReactNode } from 'react';
import { WavyDivider } from './WavyDivider';

type Props = {
  left: ReactNode;
  middle: ReactNode;
  right: ReactNode;
};

export const ColumnsThree = ({ left, middle, right }: Props) => {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16 text-white">
      <div className="grid items-stretch gap-8 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
        {/* Left column */}
        <div className="space-y-12">{left}</div>
        {/* Divider 1 */}
        <div className="hidden md:block">
          <WavyDivider />
        </div>
        {/* Middle column */}
        <div className="space-y-12">{middle}</div>
        {/* Divider 2 */}
        <div className="hidden md:block">
          <WavyDivider />
        </div>
        {/* Right column */}
        <div className="space-y-12">{right}</div>
      </div>
    </div>
  );
};
