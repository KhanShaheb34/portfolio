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
    let cancelled = false;

    if (ref.current) {
      const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
      ref.current.innerHTML = "";

      mermaid
        .render(id, chart)
        .then(({ svg }) => {
          if (ref.current && !cancelled) {
            ref.current.innerHTML = svg;
          }
        })
        .catch((error) => {
          if (ref.current && !cancelled) {
            ref.current.innerHTML = "";
            const errorElement = document.createElement("pre");
            errorElement.textContent = `Error rendering diagram: ${error.message}`;
            errorElement.style.color = "red";
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
      ref={ref}
      className={`mermaid-container my-8 flex justify-center ${className}`}
    />
  );
}
