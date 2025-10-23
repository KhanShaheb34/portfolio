"use client";

import * as React from "react";
import { motion, useAnimationFrame } from "framer-motion";
import VizCard from "@/components/viz/VizCard";

export default function LiveCounters() {
  const start = React.useRef<number>(Date.now());
  const [ms, setMs] = React.useState<number>(0);

  useAnimationFrame(() => {
    setMs(Date.now() - start.current);
  });

  // Per second rates from brief
  const perSecond = {
    photos: 1000,
    likes: 4200000,
    shares: 65000,
    comments: 80000,
  } as const;

  const seconds = ms / 1000;

  const counters = [
    { label: "Photos uploaded", value: perSecond.photos * seconds },
    { label: "Posts liked", value: perSecond.likes * seconds },
    { label: "Photos shared", value: perSecond.shares * seconds },
    { label: "Comments posted", value: perSecond.comments * seconds },
  ];

  return (
    <VizCard title="Real-time Activity" subtitle="Approximate counters">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {counters.map((c) => (
          <motion.div
            key={c.label}
            className="rounded-lg border border-foreground/10 bg-white/5 p-4"
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="text-sm text-muted">{c.label}</div>
            <div className="mt-1 text-2xl font-semibold tabular-nums">
              {Math.floor(c.value).toLocaleString()}
            </div>
          </motion.div>
        ))}
      </div>
    </VizCard>
  );
}
