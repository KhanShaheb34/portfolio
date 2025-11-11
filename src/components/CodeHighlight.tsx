'use client';

import { useEffect } from 'react';

const CodeHighlight = () => {
  useEffect(() => {
    const highlightCode = async () => {
      try {
        const hljs = await import('highlight.js');
        hljs.default.highlightAll();
      } catch (_error) {
        // highlight.js is optional; ignore failures during client hydration
      }
    };

    highlightCode();
  }, []);

  return null;
};

export default CodeHighlight;
