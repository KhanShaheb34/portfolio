"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Users, Zap, DollarSign, Check } from "lucide-react";

interface Stage {
  id: number;
  title: string;
  users: string;
  servers: string;
  latency: string;
  cost: string;
  keyFeature: string;
  improvements: string[];
}

const stages: Stage[] = [
  {
    id: 0,
    title: "The Dream",
    users: "100",
    servers: "1 server",
    latency: "50ms",
    cost: "$20/mo",
    keyFeature: "Monolithic Architecture",
    improvements: ["Simple deployment", "Easy debugging", "Low cost"],
  },
  {
    id: 1,
    title: "First Success",
    users: "10K",
    servers: "Load balancer + 4 servers",
    latency: "200ms",
    cost: "$500/mo",
    keyFeature: "Horizontal Scaling",
    improvements: ["Distributed load", "Better availability", "Can scale servers"],
  },
  {
    id: 2,
    title: "The Image Problem",
    users: "100K",
    servers: "+ CDN + S3",
    latency: "50ms",
    cost: "$2K/mo",
    keyFeature: "Content Delivery Network",
    improvements: ["Global image delivery", "-70% bandwidth cost", "Fast worldwide"],
  },
  {
    id: 3,
    title: "Database Bottleneck",
    users: "500K",
    servers: "+ Redis + Read replicas",
    latency: "100ms",
    cost: "$3K/mo",
    keyFeature: "Caching Layer",
    improvements: ["85% cache hit rate", "Reduced DB load", "Faster reads"],
  },
  {
    id: 4,
    title: "The Write Problem",
    users: "5M",
    servers: "+ Sharding + Kafka",
    latency: "80ms",
    cost: "$15K/mo",
    keyFeature: "Database Sharding",
    improvements: ["Distributed writes", "Async processing", "Better scalability"],
  },
  {
    id: 5,
    title: "Feed Generation Crisis",
    users: "50M",
    servers: "+ Microservices",
    latency: "150ms",
    cost: "$80K/mo",
    keyFeature: "Microservices Architecture",
    improvements: ["Service isolation", "Team autonomy", "Hybrid feed strategy"],
  },
  {
    id: 6,
    title: "Global Scale",
    users: "500M",
    servers: "+ Multi-region",
    latency: "120ms",
    cost: "$500K/mo",
    keyFeature: "Multi-Region Deployment",
    improvements: ["Global presence", "<150ms latency", "99.99% uptime"],
  },
  {
    id: 7,
    title: "Billion-User Architecture",
    users: "2B",
    servers: "+ ML + Advanced features",
    latency: "300ms",
    cost: "$2M/mo",
    keyFeature: "Complete Architecture",
    improvements: ["ML personalization", "Advanced features", "500K req/s"],
  },
];

export const TimelineEvolution = () => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="not-prose my-8 rounded-xl border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-6 backdrop-blur-sm"
    >
      <h3 className="mb-6 font-semibold text-white text-xl">
        The Complete Journey: 100 to 2 Billion Users
      </h3>

      {/* Timeline slider */}
      <div className="mb-8">
        <div className="relative mb-6">
          <input
            type="range"
            min={0}
            max={7}
            value={activeStage}
            onChange={(e) => setActiveStage(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-blue-500"
            style={{
              backgroundImage: `linear-gradient(to right, rgb(59, 130, 246) 0%, rgb(59, 130, 246) ${(activeStage / 7) * 100}%, rgba(255,255,255,0.1) ${(activeStage / 7) * 100}%, rgba(255,255,255,0.1) 100%)`,
            }}
          />
          <div className="mt-4 flex justify-between">
            {stages.map((stage, index) => (
              <button
                type="button"
                key={stage.id}
                onClick={() => setActiveStage(index)}
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-xs font-bold transition-all ${
                  activeStage === index
                    ? "border-blue-400 bg-blue-400 text-white"
                    : activeStage > index
                      ? "border-green-400 bg-green-400/20 text-green-400"
                      : "border-white/20 bg-white/5 text-gray-400"
                }`}
              >
                {activeStage > index ? <Check className="h-5 w-5" /> : index}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stage details */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStage}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-6 rounded-lg border border-blue-400/20 bg-blue-400/5 p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-2xl text-white">
                  Stage {activeStage}: {stages[activeStage].title}
                </h4>
                <p className="mt-1 text-gray-400 text-sm">{stages[activeStage].keyFeature}</p>
              </div>
              <div className="rounded-full border border-blue-400 bg-blue-400/20 px-4 py-2 font-mono font-bold text-blue-300 text-lg">
                {stages[activeStage].users} users
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-purple-400" />
                <div>
                  <div className="text-gray-400 text-xs">Infrastructure</div>
                  <div className="font-mono text-white text-sm">{stages[activeStage].servers}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="h-5 w-5 text-green-400" />
                <div>
                  <div className="text-gray-400 text-xs">Latency</div>
                  <div className="font-mono text-white text-sm">{stages[activeStage].latency}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <DollarSign className="h-5 w-5 text-yellow-400" />
                <div>
                  <div className="text-gray-400 text-xs">Monthly Cost</div>
                  <div className="font-mono text-white text-sm">{stages[activeStage].cost}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-5">
            <h5 className="mb-3 font-semibold text-white">Key Improvements:</h5>
            <ul className="space-y-2">
              {stages[activeStage].improvements.map((improvement, index) => (
                <motion.li
                  key={improvement}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-gray-300 text-sm"
                >
                  <Check className="h-4 w-4 flex-shrink-0 text-green-400" />
                  {improvement}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <div className="mt-6 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setActiveStage(Math.max(0, activeStage - 1))}
          disabled={activeStage === 0}
          className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ChevronRight className="h-4 w-4 rotate-180" />
          Previous Stage
        </button>
        <button
          type="button"
          onClick={() => setActiveStage(Math.min(7, activeStage + 1))}
          disabled={activeStage === 7}
          className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next Stage
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
};
