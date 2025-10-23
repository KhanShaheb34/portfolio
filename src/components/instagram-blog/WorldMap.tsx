"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Zap, Globe } from "lucide-react";

interface Region {
  name: string;
  location: string;
  users: string;
  latency: string;
  position: { top: string; left: string };
}

const regions: Region[] = [
  {
    name: "US East",
    location: "Virginia",
    users: "180M",
    latency: "50ms",
    position: { top: "35%", left: "22%" },
  },
  {
    name: "EU West",
    location: "Ireland",
    users: "150M",
    latency: "80ms",
    position: { top: "28%", left: "48%" },
  },
  {
    name: "AP Southeast",
    location: "Singapore",
    users: "170M",
    latency: "100ms",
    position: { top: "55%", left: "75%" },
  },
];

export const WorldMap = () => {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="not-prose my-8 rounded-xl border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-6 backdrop-blur-sm"
    >
      <div className="mb-6 flex items-center gap-3">
        <Globe className="h-6 w-6 text-blue-400" />
        <h3 className="font-semibold text-white text-xl">Multi-Region Deployment</h3>
      </div>

      {/* World Map Visualization */}
      <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-blue-950/30 to-purple-950/30">
        {/* Simplified world map background */}
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 1000 500" className="h-full w-full">
            {/* Simplified continents as basic shapes */}
            <path
              d="M 100 150 L 200 100 L 300 150 L 280 250 L 150 280 Z"
              fill="rgba(255,255,255,0.3)"
            />
            <path
              d="M 450 100 L 550 120 L 530 200 L 480 220 L 440 180 Z"
              fill="rgba(255,255,255,0.3)"
            />
            <path
              d="M 700 200 L 850 220 L 870 320 L 750 350 L 680 280 Z"
              fill="rgba(255,255,255,0.3)"
            />
          </svg>
        </div>

        {/* Region markers */}
        {regions.map((region, index) => (
          <motion.div
            key={region.name}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="absolute"
            style={region.position}
            onMouseEnter={() => setSelectedRegion(region)}
            onMouseLeave={() => setSelectedRegion(null)}
          >
            {/* Pulsing circle */}
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute inset-0 -m-4 rounded-full bg-blue-400"
              />
              <div className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-blue-400 bg-blue-500/20 backdrop-blur-sm">
                <MapPin className="h-4 w-4 text-blue-300" />
              </div>
            </div>
          </motion.div>
        ))}

        {/* Connection lines */}
        <svg className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.5)" />
              <stop offset="100%" stopColor="rgba(168, 85, 247, 0.5)" />
            </linearGradient>
          </defs>
          <motion.line
            x1="22%"
            y1="35%"
            x2="48%"
            y2="28%"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.line
            x1="48%"
            y1="28%"
            x2="75%"
            y2="55%"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5, repeat: Number.POSITIVE_INFINITY }}
          />
        </svg>
      </div>

      {/* Region cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        {regions.map((region, index) => (
          <motion.div
            key={region.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`rounded-lg border p-4 transition-all ${
              selectedRegion?.name === region.name
                ? "border-blue-400 bg-blue-400/10"
                : "border-white/10 bg-white/5"
            }`}
          >
            <div className="mb-3 flex items-center justify-between">
              <h4 className="font-semibold text-white">{region.name}</h4>
              <MapPin className="h-4 w-4 text-blue-400" />
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Location</span>
                <span className="text-white">{region.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Users</span>
                <span className="font-mono text-white">{region.users}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Latency</span>
                <div className="flex items-center gap-1">
                  <Zap className="h-3 w-3 text-green-400" />
                  <span className="font-mono text-green-400">{region.latency}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 rounded-lg border border-blue-400/20 bg-blue-400/5 p-4 text-center">
        <p className="text-gray-300 text-sm">
          <strong>Key Insight:</strong> Each region serves users from nearby locations, reducing
          latency by 70-80% compared to single-region deployment.
        </p>
      </div>
    </motion.div>
  );
};
