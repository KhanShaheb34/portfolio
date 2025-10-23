"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react";

type MetricStatus = "good" | "warning" | "bad";

interface MetricProps {
  label: string;
  value: string;
  status?: MetricStatus;
}

interface MetricsPanelProps {
  metrics: MetricProps[];
  title?: string;
}

const getStatusIcon = (status?: MetricStatus) => {
  switch (status) {
    case "good":
      return <CheckCircle2 className="h-5 w-5 text-green-400" />;
    case "warning":
      return <AlertTriangle className="h-5 w-5 text-yellow-400" />;
    case "bad":
      return <XCircle className="h-5 w-5 text-red-400" />;
    default:
      return null;
  }
};

const getStatusColor = (status?: MetricStatus) => {
  switch (status) {
    case "good":
      return "border-green-400/20 bg-green-400/5";
    case "warning":
      return "border-yellow-400/20 bg-yellow-400/5";
    case "bad":
      return "border-red-400/20 bg-red-400/5";
    default:
      return "border-white/10 bg-white/5";
  }
};

export const MetricsPanel = ({ metrics, title = "System Metrics" }: MetricsPanelProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="not-prose my-8 rounded-xl border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-6 backdrop-blur-sm"
    >
      <h3 className="mb-6 font-semibold text-white text-xl">{title}</h3>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`flex items-center justify-between rounded-lg border p-4 ${getStatusColor(metric.status)}`}
          >
            <div className="flex-1">
              <div className="mb-1 text-gray-400 text-sm">{metric.label}</div>
              <div className="font-mono font-bold text-white text-xl">{metric.value}</div>
            </div>
            {metric.status && <div className="ml-3">{getStatusIcon(metric.status)}</div>}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
