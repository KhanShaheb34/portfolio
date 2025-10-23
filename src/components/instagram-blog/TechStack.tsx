"use client";

import { motion } from "framer-motion";
import {
  Database,
  Server,
  Globe,
  Boxes,
  CircuitBoard,
  Zap,
  Shield,
  Activity,
} from "lucide-react";

interface Technology {
  name: string;
  purpose: string;
  scale: string;
  icon: typeof Database;
  color: string;
}

const technologies: Technology[] = [
  {
    name: "Amazon CloudFront",
    purpose: "CDN & Edge Computing",
    scale: "200+ edge locations",
    icon: Globe,
    color: "text-orange-400",
  },
  {
    name: "Kubernetes",
    purpose: "Container Orchestration",
    scale: "10,000+ pods",
    icon: Boxes,
    color: "text-blue-400",
  },
  {
    name: "Apache Kafka",
    purpose: "Message Queue",
    scale: "100+ brokers, 3M msg/s",
    icon: Zap,
    color: "text-yellow-400",
  },
  {
    name: "Cassandra",
    purpose: "Posts & Timelines DB",
    scale: "1,000+ nodes",
    icon: Database,
    color: "text-green-400",
  },
  {
    name: "PostgreSQL",
    purpose: "User Data & Metadata",
    scale: "500+ shards",
    icon: Server,
    color: "text-blue-500",
  },
  {
    name: "Redis Cluster",
    purpose: "Caching Layer",
    scale: "100+ nodes, 10TB memory",
    icon: CircuitBoard,
    color: "text-red-400",
  },
  {
    name: "TensorFlow/PyTorch",
    purpose: "Machine Learning",
    scale: "10,000+ GPUs",
    icon: Activity,
    color: "text-purple-400",
  },
  {
    name: "Prometheus/Grafana",
    purpose: "Monitoring",
    scale: "500M metrics/min",
    icon: Shield,
    color: "text-pink-400",
  },
];

export const TechStack = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="not-prose my-8 rounded-xl border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-6 backdrop-blur-sm"
    >
      <h3 className="mb-6 font-semibold text-white text-xl">Core Technology Stack</h3>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-4 transition-all hover:border-white/20 hover:bg-white/10"
          >
            <div className="mb-3 flex items-center justify-between">
              <tech.icon className={`h-6 w-6 ${tech.color}`} />
              <div className={`h-2 w-2 rounded-full ${tech.color.replace("text-", "bg-")}`} />
            </div>
            <h4 className="mb-1 font-semibold text-white text-sm">{tech.name}</h4>
            <p className="mb-2 text-gray-400 text-xs">{tech.purpose}</p>
            <div className="mt-2 rounded bg-white/5 px-2 py-1 font-mono text-gray-300 text-xs">
              {tech.scale}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 rounded-lg border border-blue-400/20 bg-blue-400/5 p-4">
        <p className="text-center text-gray-300 text-sm">
          <strong>Infrastructure Scale:</strong> 100,000+ servers, 2,000+ database nodes, 95
          petabytes of storage
        </p>
      </div>
    </motion.div>
  );
};
