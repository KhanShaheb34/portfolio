"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import VisualizationCard from "@/components/visuals/VisualizationCard";

const ratesPerSecond = {
  photos: 1000,
  likes: 4_200_000 / 24 / 60 / 60, // approximate per second
  shares: 65_000 / 24 / 60 / 60,
  comments: 80_000 / 24 / 60 / 60,
};

const numberFormat = (n: number) => new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(n);

const LiveActivityCounter = () => {
  const [t0] = useState(() => Date.now());
  const [now, setNow] = useState(() => Date.now());
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const tick = () => {
      setNow(Date.now());
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  const seconds = Math.max(0, (now - t0) / 1000);

  const counters = [
    { label: "Photos uploaded", value: Math.floor(seconds * ratesPerSecond.photos) },
    { label: "Posts liked", value: Math.floor(seconds * ratesPerSecond.likes) },
    { label: "Photos shared", value: Math.floor(seconds * ratesPerSecond.shares) },
    { label: "Comments posted", value: Math.floor(seconds * ratesPerSecond.comments) },
  ];

  return (
    <VisualizationCard
      title="Instagram Live Activity"
      subtitle="Approximate global counters since you opened this page"
    >
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2">
        {counters.map((c) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35 }}
            className="rounded-lg border border-foreground/10 bg-background/80 p-4"
          >
            <div className="text-2xl font-semibold tracking-tight">
              {numberFormat(c.value)}
            </div>
            <div className="text-muted mt-1 text-sm">{c.label}</div>
          </motion.div>
        ))}
      </div>
    </VisualizationCard>
  );
};

export default LiveActivityCounter;
