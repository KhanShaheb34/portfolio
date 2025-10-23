"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";
import VizCard from "@/components/viz/VizCard";

export type SeriesPoint = { x: string | number; latency?: number; users?: number; cost?: number };

export type MetricsChartProps = {
  title?: string;
  data: SeriesPoint[];
};

export default function MetricsChart({ title = "Metrics Over Time", data }: MetricsChartProps) {
  return (
    <VizCard title={title} className="p-0">
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 16, right: 24, bottom: 8, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
            <XAxis dataKey="x" stroke="rgba(255,255,255,0.6)" tick={{ fill: "rgba(255,255,255,0.7)", fontSize: 12 }} />
            <YAxis stroke="rgba(255,255,255,0.6)" tick={{ fill: "rgba(255,255,255,0.7)", fontSize: 12 }} />
            <Tooltip contentStyle={{ background: "#111827", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8 }} />
            <Legend wrapperStyle={{ color: "rgba(255,255,255,0.8)" }} />
            <Line type="monotone" dataKey="latency" name="Latency (ms)" stroke="#60a5fa" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="users" name="Users (K)" stroke="#34d399" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="cost" name="Cost ($K)" stroke="#fbbf24" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </VizCard>
  );
}
