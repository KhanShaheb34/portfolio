'use client';

import { motion } from 'motion/react';

interface SquigglyLineProps {
  height?: number;
  className?: string;
}

export default function SquigglyLine({ height = 400, className = '' }: SquigglyLineProps) {
  const pathData = `
    M 50 0
    Q 20 ${height * 0.1} 50 ${height * 0.2}
    Q 80 ${height * 0.3} 50 ${height * 0.4}
    Q 20 ${height * 0.5} 50 ${height * 0.6}
    Q 80 ${height * 0.7} 50 ${height * 0.8}
    Q 20 ${height * 0.9} 50 ${height}
  `;

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <motion.svg
        width="100"
        height={height}
        viewBox={`0 0 100 ${height}`}
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="stroke-current text-foreground"
      >
        <motion.path
          d={pathData}
          stroke="currentColor"
          strokeWidth="2"
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