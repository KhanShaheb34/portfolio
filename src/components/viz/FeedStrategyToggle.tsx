"use client";

import * as React from "react";
import VizCard from "@/components/viz/VizCard";
import { motion } from "framer-motion";

export default function FeedStrategyToggle() {
  const [followers, setFollowers] = React.useState<number>(300);
  const isPush = followers < 1000;

  return (
    <VizCard title="Hybrid Feed Strategy" subtitle="Toggle followers to see strategy">
      <div className="mb-4 flex items-center gap-3">
        <input
          aria-label="Followers"
          type="range"
          min={10}
          max={10000000}
          step={10}
          value={followers}
          onChange={(e) => setFollowers(Number(e.target.value))}
          className="w-full accent-foreground"
        />
        <output className="min-w-36 text-right text-sm text-muted" aria-live="polite">
          {followers.toLocaleString()} followers
        </output>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StrategyCard
          title="Regular User"
          subtitle="Push on write"
          active={isPush}
          color="emerald"
          items={Math.min(1000, Math.max(50, Math.floor(followers / 2)))}
        />
        <StrategyCard
          title="Celebrity"
          subtitle="Pull on read"
          active={!isPush}
          color="sky"
          items={Math.min(100000, Math.max(1000, followers))}
        />
      </div>
    </VizCard>
  );
}

function StrategyCard({
  title,
  subtitle,
  active,
  color,
  items,
}: {
  title: string;
  subtitle: string;
  active: boolean;
  color: "emerald" | "sky";
  items: number;
}) {
  return (
    <div className={`rounded-lg border border-foreground/10 bg-white/5 p-4 ${active ? "ring-1 ring-foreground" : "opacity-70"}`}>
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h4 className="font-medium">{title}</h4>
          <p className="text-xs text-muted">{subtitle}</p>
        </div>
        <span className={`text-xs ${active ? "text-foreground" : "text-muted"}`}>{active ? "Active" : "Passive"}</span>
      </div>

      <div className="relative h-24 overflow-hidden">
        {Array.from({ length: Math.min(items, 50) }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute left-0 top-0 h-2 w-2 rounded-full ${
              color === "emerald" ? "bg-emerald-400" : "bg-sky-400"
            }`}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ x: [0, 80, 160, 240], y: [0, (i % 6) * 6, 0, (i % 6) * 6], opacity: [0.5, 1, 1, 0.7] }}
            transition={{ duration: 2.4 + (i % 5) * 0.1, repeat: Infinity, ease: "easeInOut", delay: i * 0.04 }}
          />
        ))}
      </div>
    </div>
  );
}
