"use client";

import { useMemo, useState } from "react";
import VisualizationCard from "@/components/visuals/VisualizationCard";
import { motion } from "framer-motion";

const FeedCacheSimulator = () => {
  const [hitRate, setHitRate] = useState(85);
  const [qps, setQps] = useState(10000);

  const hits = useMemo(() => Math.round((hitRate / 100) * qps), [hitRate, qps]);
  const misses = useMemo(() => qps - hits, [hits, qps]);

  return (
    <VisualizationCard title="Feed Request Simulator" subtitle="Redis vs Read Replicas">
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2">
        <div className="rounded-lg border border-foreground/10 bg-background/80 p-4">
          <div className="mb-3 text-sm text-muted">Cache hit rate</div>
          <input
            type="range"
            min={50}
            max={98}
            value={hitRate}
            onChange={(e) => setHitRate(Number(e.target.value))}
            aria-label="Cache hit rate"
            className="accent-foreground h-2 w-full cursor-pointer appearance-none rounded-full bg-foreground/15"
          />
          <div className="mt-2 text-sm">{hitRate}%</div>
        </div>
        <div className="rounded-lg border border-foreground/10 bg-background/80 p-4">
          <div className="mb-3 text-sm text-muted">Requests / second</div>
          <input
            type="range"
            min={1000}
            max={20000}
            step={500}
            value={qps}
            onChange={(e) => setQps(Number(e.target.value))}
            aria-label="Requests per second"
            className="accent-foreground h-2 w-full cursor-pointer appearance-none rounded-full bg-foreground/15"
          />
          <div className="mt-2 text-sm">{qps.toLocaleString()} rps</div>
        </div>

        <div className="col-span-full grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-foreground/10 bg-background/80 p-4">
            <div className="mb-2 text-sm text-muted">Redis (HIT)</div>
            <Bar value={hits} max={qps} color="bg-emerald-500" label={`${hits.toLocaleString()} req/s`} />
          </div>
          <div className="rounded-lg border border-foreground/10 bg-background/80 p-4">
            <div className="mb-2 text-sm text-muted">Read Replicas (MISS)</div>
            <Bar value={misses} max={qps} color="bg-amber-500" label={`${misses.toLocaleString()} req/s`} />
          </div>
          <div className="rounded-lg border border-foreground/10 bg-background/80 p-4">
            <div className="mb-2 text-sm text-muted">Response Time</div>
            <div className="text-sm">HIT ≈ 5ms • MISS ≈ 50ms</div>
          </div>
        </div>
      </div>
    </VisualizationCard>
  );
};

const Bar = ({ value, max, color, label }: { value: number; max: number; color: string; label: string }) => {
  const pct = Math.max(1, (value / max) * 100);
  return (
    <div className="h-24 overflow-hidden rounded bg-foreground/10">
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: `${pct}%` }}
        className={`h-full w-full origin-bottom ${color}`}
      />
      <div className="mt-2 text-xs text-muted">{label}</div>
    </div>
  );
};

export default FeedCacheSimulator;
