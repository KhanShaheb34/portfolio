"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface MetricProps {
  label: string;
  value: string | number;
  status?: "good" | "warning" | "bad";
  icon?: ReactNode;
}

function Metric({ label, value, status = "good", icon }: MetricProps) {
  const statusColors = {
    good: "text-green-600 dark:text-green-400",
    warning: "text-yellow-600 dark:text-yellow-400",
    bad: "text-red-600 dark:text-red-400",
  };

  const statusSymbols = {
    good: "✅",
    warning: "⚠️",
    bad: "❌",
  };

  return (
    <div className="flex flex-col gap-1">
      <dt className="text-sm text-gray-600 dark:text-gray-400">{label}</dt>
      <dd className={`text-2xl font-bold flex items-center gap-2 ${statusColors[status]}`}>
        {icon}
        {value}
        <span className="text-base">{statusSymbols[status]}</span>
      </dd>
    </div>
  );
}

interface MetricsPanelProps {
  metrics: Array<{
    label: string;
    value: string | number;
    status?: "good" | "warning" | "bad";
    icon?: ReactNode;
  }>;
  title?: string;
  className?: string;
}

export default function MetricsPanel({ metrics, title, className = "" }: MetricsPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-lg ${className}`}
    >
      {title && (
        <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">{title}</h3>
      )}
      <dl className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <Metric key={metric.label} {...metric} />
        ))}
      </dl>
    </motion.div>
  );
}
