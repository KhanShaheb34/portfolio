"use client";

import { motion } from "framer-motion";
import VisualizationCard from "@/components/visuals/VisualizationCard";

export type MetricProps = {
  label: string;
  value: string | number;
  status?: "good" | "warn" | "bad";
};

const badgeByStatus: Record<NonNullable<MetricProps["status"]>, string> = {
  good: "bg-emerald-500/15 text-emerald-400",
  warn: "bg-amber-500/15 text-amber-400",
  bad: "bg-rose-500/15 text-rose-400",
};

const Metric = ({ label, value, status }: MetricProps) => {
  return (
    <div className="flex items-center justify-between rounded-lg border border-foreground/10 bg-background/80 px-4 py-3">
      <span className="text-sm text-muted">{label}</span>
      <span
        className={[
          "rounded px-2 py-1 text-sm",
          status ? badgeByStatus[status] : "bg-foreground/10 text-foreground",
        ].join(" ")}
      >
        {value}
      </span>
    </div>
  );
};

export type MetricsPanelProps = {
  title?: string;
  items: MetricProps[];
};

const MetricsPanel = ({ title = "Metrics", items }: MetricsPanelProps) => {
  return (
    <VisualizationCard title={title} subtitle="Key numbers at-a-glance">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.35 }}
        className="grid grid-cols-1 gap-3 sm:grid-cols-2"
      >
        {items.map((m) => (
          <Metric key={m.label} {...m} />
        ))}
      </motion.div>
    </VisualizationCard>
  );
};

export default MetricsPanel;
