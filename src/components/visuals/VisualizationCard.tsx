"use client";

import type { ReactNode } from "react";

export type VisualizationCardProps = {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
};

const VisualizationCard = ({ title, subtitle, actions, children }: VisualizationCardProps) => {
  return (
    <section
      aria-label={title}
      className="w-full rounded-xl border border-foreground/15 bg-foreground/5 p-4 md:p-6"
      tabIndex={0}
    >
      <header className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-medium leading-tight">{title}</h3>
          {subtitle && (
            <p className="text-muted mt-1 text-sm leading-relaxed">{subtitle}</p>
          )}
        </div>
        {actions && <div className="shrink-0">{actions}</div>}
      </header>

      <div className="overflow-hidden rounded-lg bg-background/50">
        {children}
      </div>
    </section>
  );
};

export default VisualizationCard;
