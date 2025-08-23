'use client';

import { useEffect, useState } from 'react';

export default function ScrollArrows() {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const scrollContainer = document.querySelector(
      '[data-scroll-container]'
    ) as HTMLDivElement;
    if (!scrollContainer) {
      return;
    }

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const maxScrollLeft =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;

      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < maxScrollLeft - 10);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (direction: 'left' | 'right') => {
    const scrollContainer = document.querySelector(
      '[data-scroll-container]'
    ) as HTMLDivElement;
    if (!scrollContainer) {
      return;
    }

    const scrollAmount = scrollContainer.clientWidth * 0.8;
    scrollContainer.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          aria-label="Scroll left"
          className="-translate-y-1/2 fixed top-1/2 left-4 z-40 hidden transform rounded-full bg-foreground/10 p-2 backdrop-blur-sm transition-opacity duration-300 hover:bg-foreground/20 md:block"
          onClick={() => scrollTo('left')}
          type="button"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      )}

      {/* Right Arrow */}
      {showRightArrow && (
        <button
          aria-label="Scroll right"
          className="-translate-y-1/2 fixed top-1/2 right-4 z-40 hidden transform rounded-full bg-foreground/10 p-2 backdrop-blur-sm transition-opacity duration-300 hover:bg-foreground/20 md:block"
          onClick={() => scrollTo('right')}
          type="button"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      )}
    </>
  );
}
