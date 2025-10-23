"use client";

import VizCard from "@/components/viz/VizCard";
import { motion } from "framer-motion";

export type EdgeLocation = {
  city: string;
  x: number; // percentage left
  y: number; // percentage top
};

const defaultEdges: EdgeLocation[] = [
  { city: "Singapore", x: 78, y: 66 },
  { city: "London", x: 48, y: 34 },
  { city: "Tokyo", x: 85, y: 38 },
  { city: "São Paulo", x: 34, y: 74 },
  { city: "Mumbai", x: 74, y: 50 },
  { city: "New York", x: 36, y: 36 },
];

export type WorldCDNMapProps = {
  edges?: EdgeLocation[];
};

export default function WorldCDNMap({ edges = defaultEdges }: WorldCDNMapProps) {
  return (
    <VizCard title="CDN Edge Map" subtitle="Illustrative – not to scale" className="p-0">
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
        <svg viewBox="0 0 800 450" className="h-full w-full opacity-70">
          <title>World Map</title>
          <rect width="800" height="450" fill="url(#bg)" />
          <defs>
            <linearGradient id="bg" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.07)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.01)" />
            </linearGradient>
          </defs>
        </svg>
        {edges.map((e) => (
          <motion.div
            key={e.city}
            className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]"
            style={{ left: `${e.x}%`, top: `${e.y}%` }}
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        ))}
      </div>
    </VizCard>
  );
}
