'use client';

import { motion } from 'motion/react';

interface SquigglyLineProps {
  width?: number;
  height?: number;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

export default function SquigglyLine({ 
  width = 200, 
  height = 40, 
  className = '', 
  orientation = 'horizontal' 
}: SquigglyLineProps) {
  
  const horizontalPath = `
    M 10 20 
    Q 30 10 50 20 
    Q 70 30 90 20 
    Q 110 10 130 20 
    Q 150 30 170 20 
    Q 190 10 200 20
  `;
  
  const verticalPath = `
    M 20 10
    Q 10 30 20 50
    Q 30 70 20 90
    Q 10 110 20 130
    Q 30 150 20 170
    Q 10 190 20 210
  `;

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <motion.svg
        width={orientation === 'horizontal' ? width : 40}
        height={orientation === 'horizontal' ? height : height * 5}
        viewBox={orientation === 'horizontal' ? `0 0 ${width} ${height}` : `0 0 40 ${height * 5}`}
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="stroke-current text-foreground"
      >
        <motion.path
          d={orientation === 'horizontal' ? horizontalPath : verticalPath}
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  );
}