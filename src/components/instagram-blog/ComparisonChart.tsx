"use client";

import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface ComparisonData {
  stage: string;
  users: string;
  latency: number;
  cost: number;
}

const data: ComparisonData[] = [
  { stage: "Stage 0", users: "100", latency: 50, cost: 20 },
  { stage: "Stage 1", users: "10K", latency: 200, cost: 500 },
  { stage: "Stage 2", users: "100K", latency: 50, cost: 2000 },
  { stage: "Stage 3", users: "500K", latency: 100, cost: 3000 },
  { stage: "Stage 4", users: "5M", latency: 80, cost: 15000 },
  { stage: "Stage 5", users: "50M", latency: 150, cost: 80000 },
  { stage: "Stage 6", users: "500M", latency: 120, cost: 500000 },
  { stage: "Stage 7", users: "2B", latency: 300, cost: 2000000 },
];

export const ComparisonChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="not-prose my-8 rounded-xl border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-6 backdrop-blur-sm"
    >
      <h3 className="mb-6 font-semibold text-white text-xl">Performance vs Cost Evolution</h3>

      <div className="mb-8">
        <h4 className="mb-4 text-gray-300 text-sm">Latency Across Stages (ms)</h4>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="stage" stroke="#9CA3AF" style={{ fontSize: "12px" }} />
            <YAxis stroke="#9CA3AF" style={{ fontSize: "12px" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(15, 23, 42, 0.9)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Bar dataKey="latency" fill="#3B82F6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h4 className="mb-4 text-gray-300 text-sm">Monthly Cost ($)</h4>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="stage" stroke="#9CA3AF" style={{ fontSize: "12px" }} />
            <YAxis stroke="#9CA3AF" style={{ fontSize: "12px" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(15, 23, 42, 0.9)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
                color: "#fff",
              }}
              formatter={(value: number) => `$${value.toLocaleString()}`}
            />
            <Bar dataKey="cost" fill="#10B981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="mb-2 text-gray-400 text-sm">Average Latency</div>
          <div className="font-mono font-bold text-2xl text-white">131ms</div>
          <div className="mt-1 text-green-400 text-xs">✓ Within acceptable range</div>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="mb-2 text-gray-400 text-sm">Cost Efficiency</div>
          <div className="font-mono font-bold text-2xl text-white">$0.09</div>
          <div className="mt-1 text-gray-400 text-xs">per user per month</div>
        </div>
      </div>
    </motion.div>
  );
};
