'use client';

import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, XCircle } from 'lucide-react';

interface Metric {
  label: string;
  value: string | number;
  status?: 'good' | 'warning' | 'error';
  unit?: string;
}

interface MetricsPanelProps {
  metrics: Metric[];
  title?: string;
  className?: string;
}

const getStatusIcon = (status?: string) => {
  switch (status) {
    case 'good':
      return <CheckCircle className="w-4 h-4 text-green-500" />;
    case 'warning':
      return <AlertCircle className="w-4 h-4 text-yellow-500" />;
    case 'error':
      return <XCircle className="w-4 h-4 text-red-500" />;
    default:
      return null;
  }
};

const getStatusColor = (status?: string) => {
  switch (status) {
    case 'good':
      return 'text-green-600';
    case 'warning':
      return 'text-yellow-600';
    case 'error':
      return 'text-red-600';
    default:
      return 'text-gray-600';
  }
};

export default function MetricsPanel({ metrics, title, className = '' }: MetricsPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`bg-white rounded-xl border border-gray-200 p-6 shadow-sm ${className}`}
    >
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-2">
              {getStatusIcon(metric.status)}
              <span className="text-sm font-medium text-gray-700">{metric.label}</span>
            </div>
            <span className={`text-lg font-bold ${getStatusColor(metric.status)}`}>
              {metric.value}{metric.unit && <span className="text-sm font-normal ml-1">{metric.unit}</span>}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}