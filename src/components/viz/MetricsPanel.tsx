"use client";

import { motion } from "framer-motion";
import VizCard from "@/components/viz/VizCard";

export type Metric = {
  label: string;
  value: string | number;
  status?: "ok" | "warn" | "bad";
};

const statusToClass: Record<NonNullable<Metric["status"]>, string> = {
  ok: "text-emerald-400",
  warn: "text-amber-400",
  bad: "text-rose-400",
};

export type MetricsPanelProps = {
  title?: string;
  metrics: Metric[];
};

export default function MetricsPanel({ title = "Metrics", metrics }: MetricsPanelProps) {
  return (
    <VizCard title={title}>
      <motion.ul
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
      >
        {metrics.map((m) => (
          <li
            key={m.label}
            className="flex items-center justify-between rounded-lg border border-foreground/10 bg-white/5 px-3 py-2"
          >
            <span className="text-sm text-muted">{m.label}</span>
            <span className={`font-medium ${m.status ? statusToClass[m.status] : "text-foreground"}`}>
              {m.value}
            </span>
          </li>
        ))}
      </motion.ul>
    </VizCard>
  );
}
