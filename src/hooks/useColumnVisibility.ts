'use client';

import { useEffect, useState } from 'react';

export function useColumnVisibility(columnIndex: number) {
  const [isFullyVisible, setIsFullyVisible] = useState(false);

  useEffect(() => {
    const scrollContainer = document.querySelector(
      '[data-scroll-container]'
    ) as HTMLDivElement;
    if (!scrollContainer) return;

    const handleScroll = () => {
      // Only apply on desktop
      if (window.innerWidth < 768) return;

      const scrollLeft = scrollContainer.scrollLeft;
      const containerWidth = scrollContainer.clientWidth;

      // Column widths based on the current breakpoint
      let columnWidth: number;
      if (window.innerWidth >= 1280) {
        // xl
        columnWidth = window.innerWidth * 0.3;
      } else if (window.innerWidth >= 1024) {
        // lg
        columnWidth = window.innerWidth * 0.4;
      } else {
        // md
        columnWidth = window.innerWidth * 0.45;
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
}
