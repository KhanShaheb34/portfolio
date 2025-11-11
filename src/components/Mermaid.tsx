"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

type MermaidProps = {
  chart: string;
  className?: string;
};

export default function Mermaid({ chart, className = "" }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: "default",
      securityLevel: "strict",
    });
  }, []);

  useEffect(() => {
    if (ref.current) {
      const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
      ref.current.innerHTML = "";

      mermaid
        .render(id, chart)
        .then(({ svg }) => {
          if (ref.current) {
            ref.current.innerHTML = svg;
          }
        })
        .catch((error) => {
          if (ref.current) {
            ref.current.innerHTML = `<pre style="color: red;">Error rendering diagram: ${error.message}</pre>`;
          }
        });
    }
  }, [chart]);

  return (
    <div
      ref={ref}
      className={`mermaid-container my-8 flex justify-center ${className}`}
    />
  );
}
