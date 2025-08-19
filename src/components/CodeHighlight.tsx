'use client';

import { useEffect } from 'react';

export default function CodeHighlight() {
  useEffect(() => {
    const highlightCode = async () => {
      try {
        const hljs = await import('highlight.js');
        hljs.default.highlightAll();
      } catch (error) {
        console.warn('Failed to load syntax highlighting:', error);
      }
    };

    highlightCode();
  }, []);

  return null;
}
