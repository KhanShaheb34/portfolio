'use client';

import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';

const SCROLL_AMOUNT_RATIO = 0.8;
const SCROLL_THRESHOLD = 10;

const ScrollArrows = () => {
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

      setShowLeftArrow(scrollLeft > SCROLL_THRESHOLD);
      setShowRightArrow(scrollLeft < maxScrollLeft - SCROLL_THRESHOLD);
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

    const scrollAmount = scrollContainer.clientWidth * SCROLL_AMOUNT_RATIO;
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
          className="-translate-y-1/2 fixed top-1/2 left-4 z-40 hidden transform cursor-pointer rounded-full border border-accent/15 bg-accent/10 p-2 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-accent/20 hover:bg-accent/20 active:scale-90 md:block"
          onClick={() => scrollTo('left')}
          type="button"
        >
          <CaretLeftIcon size={20} />
        </button>
      )}

      {/* Right Arrow */}
      {showRightArrow && (
        <button
          aria-label="Scroll right"
          className="-translate-y-1/2 fixed top-1/2 right-4 z-40 hidden transform cursor-pointer rounded-full border border-accent/15 bg-accent/10 p-2 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-accent/20 hover:bg-accent/20 active:scale-90 md:block"
          onClick={() => scrollTo('right')}
          type="button"
        >
          <CaretRightIcon size={20} />
        </button>
      )}
    </>
  );
};

export default ScrollArrows;
