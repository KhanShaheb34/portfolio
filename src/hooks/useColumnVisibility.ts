'use client';

import { useEffect, useState } from 'react';

const DESKTOP_MIN_WIDTH = 768;
const XL_BREAKPOINT = 1280;
const LG_BREAKPOINT = 1024;
const XL_COLUMN_WIDTH_RATIO = 0.3;
const LG_COLUMN_WIDTH_RATIO = 0.4;
const MD_COLUMN_WIDTH_RATIO = 0.45;

export const useColumnVisibility = (columnIndex: number) => {
  const [isFullyVisible, setIsFullyVisible] = useState(false);

  useEffect(() => {
    const scrollContainer = document.querySelector(
      '[data-scroll-container]'
    ) as HTMLDivElement;
    if (!scrollContainer) {
      return;
    }

    const handleScroll = () => {
      // Only apply on desktop
      if (window.innerWidth < DESKTOP_MIN_WIDTH) {
        return;
      }

      const scrollLeft = scrollContainer.scrollLeft;
      const containerWidth = scrollContainer.clientWidth;

      // Column widths based on the current breakpoint
      let columnWidth: number;
      if (window.innerWidth >= XL_BREAKPOINT) {
        // xl
        columnWidth = window.innerWidth * XL_COLUMN_WIDTH_RATIO;
      } else if (window.innerWidth >= LG_BREAKPOINT) {
        // lg
        columnWidth = window.innerWidth * LG_COLUMN_WIDTH_RATIO;
      } else {
        // md
        columnWidth = window.innerWidth * MD_COLUMN_WIDTH_RATIO;
      }

      // Calculate column position
      const columnLeft = columnIndex * columnWidth;
      const columnRight = columnLeft + columnWidth;

      // Check if column is fully visible within the viewport
      const isFullyInView =
        columnLeft >= scrollLeft && columnRight <= scrollLeft + containerWidth;

      setIsFullyVisible(isFullyInView);
    };

    // Initial check
    handleScroll();

    scrollContainer.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [columnIndex]);

  return isFullyVisible;
};
