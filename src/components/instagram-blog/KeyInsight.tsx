"use client";

import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

interface KeyInsightProps {
  children: React.ReactNode;
}

export const KeyInsight = ({ children }: KeyInsightProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="not-prose my-8 rounded-xl border border-yellow-400/20 bg-gradient-to-br from-yellow-400/5 to-orange-400/5 p-6 backdrop-blur-sm"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 rounded-full bg-yellow-400/10 p-3">
          <Lightbulb className="h-6 w-6 text-yellow-400" />
        </div>
        <div>
          <h4 className="mb-2 font-semibold text-yellow-300 text-lg">Key Insight</h4>
          <div className="leading-relaxed text-gray-200 text-sm">{children}</div>
        </div>
      </div>
    </motion.div>
  );
};
