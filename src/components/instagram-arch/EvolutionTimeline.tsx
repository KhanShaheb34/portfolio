"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Server,
  Users,
  Database,
  Globe,
  Layers,
  Cloud,
  Zap,
  GitBranch,
} from "lucide-react";

interface Stage {
  id: number;
  users: string;
  title: string;
  description: string;
  keyChanges: string[];
  responseTime: string;
  cost: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const stages: Stage[] = [
  {
    id: 0,
    users: "100",
    title: "The Dream",
    description: "Single server running everything",
    keyChanges: ["Single server", "PostgreSQL", "Local storage"],
    responseTime: "50ms",
    cost: "$20/month",
    icon: Server,
    color: "blue",
  },
  {
    id: 1,
    users: "10K",
    title: "First Success",
    description: "Load balancer + Multiple servers",
    keyChanges: ["Load balancer", "4 app servers", "Horizontal scaling"],
    responseTime: "200ms",
    cost: "$500/month",
    icon: Layers,
    color: "purple",
  },
  {
    id: 2,
    users: "100K",
    title: "The Image Problem",
    description: "CDN + Object storage",
    keyChanges: ["Global CDN", "S3/GCS storage", "Edge caching"],
    responseTime: "50ms",
    cost: "$800/month",
    icon: Globe,
    color: "orange",
  },
  {
    id: 3,
    users: "500K",
    title: "Database Bottleneck",
    description: "Redis cache + Read replicas",
    keyChanges: ["Redis cache", "Read replicas", "85% cache hit"],
    responseTime: "100ms",
    cost: "$3K/month",
    icon: Zap,
    color: "red",
  },
  {
    id: 4,
    users: "5M",
    title: "The Write Problem",
    description: "Sharding + Message queues",
    keyChanges: ["Database sharding", "Kafka queues", "Async processing"],
    responseTime: "80ms",
    cost: "$15K/month",
    icon: Database,
    color: "green",
  },
  {
    id: 5,
    users: "50M",
    title: "Feed Generation Crisis",
    description: "Microservices + Pre-computed feeds",
    keyChanges: ["Microservices", "Hybrid feed", "Service mesh"],
    responseTime: "150ms",
    cost: "$80K/month",
    icon: GitBranch,
    color: "pink",
  },
  {
    id: 6,
    users: "500M",
    title: "Global Scale",
    description: "Multi-region deployment",
    keyChanges: ["3 regions", "Global routing", "99.99% uptime"],
    responseTime: "120ms",
    cost: "$500K/month",
    icon: Cloud,
    color: "blue",
  },
  {
    id: 7,
    users: "2B",
    title: "The Final Form",
    description: "Complete distributed system",
    keyChanges: ["ML pipeline", "Real-time features", "95PB storage"],
    responseTime: "300ms",
    cost: "$180M/month",
    icon: Users,
    color: "purple",
  },
];

export default function EvolutionTimeline() {
  const [selectedStage, setSelectedStage] = useState(0);

  const currentStage = stages[selectedStage];
  const Icon = currentStage.icon;

  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    purple: "from-purple-500 to-purple-600",
    orange: "from-orange-500 to-orange-600",
    red: "from-red-500 to-red-600",
    green: "from-green-500 to-green-600",
    pink: "from-pink-500 to-pink-600",
  };

  return (
    <div className="my-8">
      <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        The Complete Journey: 100 to 2 Billion Users
      </h3>

      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
        <div className="mb-6">
          <label
            htmlFor="stage-slider"
            className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
          >
            Select Stage: <span className="text-purple-600 dark:text-purple-400 font-bold">
              Stage {selectedStage}
            </span>
          </label>
          <input
            id="stage-slider"
            type="range"
            min={0}
            max={7}
            value={selectedStage}
            onChange={(e) => setSelectedStage(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
            <span>Stage 0</span>
            <span>Stage 7</span>
          </div>
        </div>

        <motion.div
          key={selectedStage}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-16 h-16 rounded-lg bg-gradient-to-br ${colorClasses[currentStage.color as keyof typeof colorClasses]} flex items-center justify-center`}
            >
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                Stage {currentStage.id}: {currentStage.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">{currentStage.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Users</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {currentStage.users}
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Response Time</div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {currentStage.responseTime}
              </div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Cost</div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {currentStage.cost}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <h5 className="font-semibold mb-3 text-gray-900 dark:text-white">Key Changes:</h5>
            <ul className="space-y-2">
              {currentStage.keyChanges.map((change, index) => (
                <motion.li
                  key={change}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                >
                  <div className="w-2 h-2 bg-purple-600 rounded-full" />
                  {change}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="mt-6 grid grid-cols-4 md:grid-cols-8 gap-2">
          {stages.map((stage) => (
            <button
              key={stage.id}
              type="button"
              onClick={() => setSelectedStage(stage.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedStage(stage.id);
                }
              }}
              className={`p-2 rounded-lg text-center transition-all ${
                selectedStage === stage.id
                  ? "bg-purple-600 text-white shadow-lg scale-110"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              <div className="text-xs font-bold">{stage.id}</div>
              <div className="text-xs opacity-80">{stage.users}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
        <h4 className="font-bold mb-2 text-purple-900 dark:text-purple-100">
          Key Insight:
        </h4>
        <p className="text-sm text-purple-800 dark:text-purple-200">
          Instagram's architecture didn't happen overnight. It took 15 years, thousands of
          engineers, and billions of dollars. But the principles - caching, sharding,
          microservices, regional deployment - these are patterns YOU can apply to your systems
          today. Start small, scale smart.
        </p>
      </div>
    </div>
  );
}
