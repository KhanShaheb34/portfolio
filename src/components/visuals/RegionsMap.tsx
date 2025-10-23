"use client";

import VisualizationCard from "@/components/visuals/VisualizationCard";
import { motion } from "framer-motion";

const regions = [
  { id: "us", name: "US East", x: 220, y: 180, color: "fill-emerald-400" },
  { id: "eu", name: "EU West", x: 340, y: 160, color: "fill-sky-400" },
  { id: "ap", name: "AP Southeast", x: 620, y: 220, color: "fill-amber-400" },
];

const RegionsMap = () => {
  return (
    <VisualizationCard title="Multi-Region Routing" subtitle="Users connect to the nearest region">
      <div className="relative h-[360px] w-full">
        <svg viewBox="0 0 800 360" className="h-full w-full">
          <title>World map with regions</title>
          <rect x="0" y="0" width="800" height="360" rx="8" className="fill-foreground/5" />
          {regions.map((r) => (
            <g key={r.id}>
              <circle cx={r.x} cy={r.y} r="8" className={r.color} />
              <text x={r.x + 10} y={r.y + 4} className="fill-current text-xs">
                {r.name}
              </text>
            </g>
          ))}

          {/* Animated arrows to regions */}
          <Arrow x1={120} y1={240} x2={220} y2={180} />
          <Arrow x1={280} y1={120} x2={340} y2={160} />
          <Arrow x1={680} y1={240} x2={620} y2={220} />
        </svg>
      </div>
    </VisualizationCard>
  );
};

const Arrow = ({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) => {
  return (
    <motion.line
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8 }}
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      className="stroke-foreground"
      strokeWidth={2}
    />
  );
};

export default RegionsMap;
