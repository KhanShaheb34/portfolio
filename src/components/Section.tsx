import { ReactNode } from 'react';
import SquigglyLine from './SquigglyLine';

interface SectionProps {
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ leftContent, rightContent, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`min-h-screen py-16 px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-1">
            {leftContent}
          </div>
          
          {/* Center Column - Squiggly Line */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <SquigglyLine height={600} />
          </div>
          
          {/* Right Column */}
          <div className="lg:col-span-1">
            {rightContent}
          </div>
        </div>
      </div>
    </section>
  );
}