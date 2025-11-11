'use client';

import mermaid from 'mermaid';
import { useEffect, useRef } from 'react';

const MERMAID_ID_PREFIX = 'mermaid-';
const MERMAID_ID_RADIX = 36;
const MERMAID_ID_SLICE_START = 2;
const MERMAID_ID_SLICE_END = 9;

type MermaidProps = {
  chart: string;
  className?: string;
};

const Mermaid = ({ chart, className = '' }: MermaidProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'strict',
    });
  }, []);

  useEffect(() => {
    let cancelled = false;

    if (ref.current) {
      const randomValue = Math.random().toString(MERMAID_ID_RADIX);
      const randomSegment = randomValue.slice(
        MERMAID_ID_SLICE_START,
        MERMAID_ID_SLICE_END
      );
      const id = `${MERMAID_ID_PREFIX}${randomSegment}`;
      ref.current.innerHTML = '';

      mermaid
        .render(id, chart)
        .then(({ svg }) => {
          if (ref.current && !cancelled) {
            ref.current.innerHTML = svg;
          }
        })
        .catch((error) => {
          if (ref.current && !cancelled) {
            ref.current.innerHTML = '';
            const errorElement = document.createElement('pre');
            errorElement.textContent = `Error rendering diagram: ${error.message}`;
            errorElement.style.color = 'red';
            ref.current.appendChild(errorElement);
          }
        });
    }

    return () => {
      cancelled = true;
    };
  }, [chart]);

  return (
    <div
      className={`mermaid-container my-8 flex justify-center ${className}`}
      ref={ref}
    />
  );
};

export default Mermaid;
