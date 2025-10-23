"use client";

import * as React from "react";
import { motion, useAnimationControls } from "framer-motion";
import VizCard from "@/components/viz/VizCard";

export type TrafficSimulatorProps = {
  label?: string;
  concurrency?: number;
};

export default function TrafficSimulator({ label = "Request Flow", concurrency = 6 }: TrafficSimulatorProps) {
  const controls = useAnimationControls();
  const [running, setRunning] = React.useState<boolean>(false);

  const handleToggle = async () => {
    const next = !running;
    setRunning(next);
    if (next) await controls.start("animate");
    else await controls.stop();
  };

  const items = Array.from({ length: concurrency }, (_, i) => i);

  return (
    <VizCard title={label}>
      <div className="flex items-center justify-between mb-3">
        <button
          type="button"
          onClick={handleToggle}
          className="rounded-md border border-foreground/20 px-3 py-1.5 text-sm hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
        >
          {running ? "Pause" : "Start"}
        </button>
        <span className="text-xs text-muted">Simulated users: {concurrency}</span>
      </div>

      <div className="relative h-24">
        {items.map((i) => (
          <motion.div
            key={i}
            className="absolute left-0 top-0 h-4 w-4 rounded-full bg-foreground/80"
            variants={{
              animate: {
                x: [0, 40, 80, 120, 160, 200, 240],
                opacity: [0.6, 1, 1, 1, 1, 0.8, 0.4],
                transition: {
                  duration: 2.8,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: i * 0.15,
                },
              },
            }}
            animate={controls}
          />
        ))}
      </div>
    </VizCard>
  );
}
