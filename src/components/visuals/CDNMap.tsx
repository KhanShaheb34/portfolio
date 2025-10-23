"use client";

import { useMemo, useState } from "react";
import VisualizationCard from "@/components/visuals/VisualizationCard";
import { motion } from "framer-motion";

const cities = [
  { id: "singapore", name: "Singapore", x: 620, y: 260 },
  { id: "london", name: "London", x: 280, y: 140 },
  { id: "tokyo", name: "Tokyo", x: 720, y: 200 },
  { id: "sao", name: "São Paulo", x: 190, y: 320 },
  { id: "mumbai", name: "Mumbai", x: 560, y: 220 },
  { id: "newyork", name: "New York", x: 240, y: 180 },
];

const users = [
  { id: "dhaka", name: "Dhaka", x: 580, y: 240, nearest: "singapore" },
  { id: "lax", name: "Los Angeles", x: 140, y: 200, nearest: "newyork" },
  { id: "tokyo_user", name: "Tokyo", x: 720, y: 200, nearest: "tokyo" },
  { id: "london_user", name: "London", x: 280, y: 140, nearest: "london" },
];

const CDNMap = () => {
  const [selected, setSelected] = useState<string>(users[0].id);

  const user = useMemo(() => users.find((u) => u.id === selected)!, [selected]);
  const edge = useMemo(() => cities.find((c) => c.id === user.nearest)!, [user]);

  return (
    <VisualizationCard title="CDN Global Edge" subtitle="Requests route to nearest edge location">
      <div className="relative h-[380px] w-full">
        <svg viewBox="0 0 800 400" className="h-full w-full">
          <title>World map with CDN edges and users</title>
          <rect x="0" y="0" width="800" height="400" rx="8" className="fill-foreground/5" />

          {cities.map((c) => (
            <g key={c.id}>
              <circle cx={c.x} cy={c.y} r="6" className="fill-emerald-400" />
              <text x={c.x + 8} y={c.y + 4} className="fill-current text-xs">
                {c.name}
              </text>
            </g>
          ))}

          {users.map((u) => (
            <g key={u.id} onClick={() => setSelected(u.id)} className="cursor-pointer">
              <circle cx={u.x} cy={u.y} r="5" className="fill-foreground" />
              <text x={u.x + 8} y={u.y + 4} className="fill-current text-xs">
                {u.name}
              </text>
            </g>
          ))}

          <motion.line
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            x1={user.x}
            y1={user.y}
            x2={edge.x}
            y2={edge.y}
            className="stroke-foreground"
            strokeWidth={2}
          />
        </svg>
      </div>
    </VisualizationCard>
  );
};

export default CDNMap;
