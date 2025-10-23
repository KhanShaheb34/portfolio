"use client";

import type { ReactNode } from "react";

// Minimal class joiner to avoid external utils dependency
function cx(...classes: Array<string | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export type VizCardProps = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export default function VizCard({ title, subtitle, children, className }: VizCardProps) {
  // Prefer a local cx to avoid import errors if cn is absent
  const cardClass = cx(
    "rounded-xl border border-foreground/15 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]",
    "from-white/5 via-white/[0.02] to-transparent backdrop-blur-sm",
    "p-4 sm:p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]",
    className,
  );

  return (
    <section className={cardClass} aria-label={title ?? "Visualization"}>
      {(title || subtitle) && (
        <header className="mb-4 sm:mb-6">
          {title && (
            <h3 className="text-base sm:text-lg font-medium tracking-tight text-foreground">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-sm text-muted mt-1">{subtitle}</p>
          )}
        </header>
      )}
      <div className="relative">{children}</div>
    </section>
  );
}
