"use client";

import * as React from "react";
import VizCard from "@/components/viz/VizCard";
import { motion } from "framer-motion";

export type Stage = {
  id: number;
  title: string;
  users: string;
  latency: string;
  cost: string;
};

const stages: Stage[] = [
  { id: 0, title: "The Dream", users: "100", latency: "50ms", cost: "$20/mo" },
  { id: 1, title: "Breaking Point", users: "10K", latency: "200ms", cost: "$500/mo" },
  { id: 2, title: "CDN Era", users: "100K", latency: "50ms img", cost: "$800/mo" },
  { id: 3, title: "Cache & Replicas", users: "500K", latency: "100ms", cost: "$3K/mo" },
  { id: 4, title: "Shards + Kafka", users: "5M", latency: "80ms", cost: "$15K/mo" },
  { id: 5, title: "Microservices", users: "50M", latency: "150ms", cost: "$80K/mo" },
  { id: 6, title: "Multi-Region", users: "500M", latency: "<150ms", cost: "$500K/mo" },
  { id: 7, title: "2B Scale", users: "2B", latency: "~300ms", cost: "$180M/mo" },
];

export default function TimelineStage() {
  const [index, setIndex] = React.useState<number>(0);
  const stage = stages[index];

  return (
    <VizCard title="Evolution Timeline" subtitle="Slide through stages 0–7">
      <div className="mb-4 flex items-center gap-3">
        <input
          aria-label="Stage"
          type="range"
          min={0}
          max={7}
          step={1}
          value={index}
          onChange={(e) => setIndex(Number(e.target.value))}
          className="w-full accent-foreground"
        />
        <output className="min-w-24 text-right text-sm text-muted">Stage {index}</output>
      </div>
      <motion.div
        key={stage.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-3"
      >
        <Fact label="Stage" value={`${stage.id} — ${stage.title}`} />
        <Fact label="Users" value={stage.users} />
        <Fact label="Latency" value={stage.latency} />
        <Fact label="Cost" value={stage.cost} />
      </motion.div>
    </VizCard>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-foreground/10 bg-white/5 p-3">
      <div className="text-xs text-muted">{label}</div>
      <div className="mt-1 font-medium">{value}</div>
    </div>
  );
}
