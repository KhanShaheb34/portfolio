"use client";

import { motion } from "framer-motion";
import {
  Database,
  Server,
  Users,
  Globe,
  Cloud,
  Layers,
  Zap,
  HardDrive,
} from "lucide-react";
import type { ReactNode } from "react";

interface NodeProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  sublabel?: string;
  color?: string;
}

function DiagramNode({ icon: Icon, label, sublabel, color = "blue" }: NodeProps) {
  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
    orange: "from-orange-500 to-orange-600",
    red: "from-red-500 to-red-600",
    pink: "from-pink-500 to-pink-600",
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue} rounded-lg p-4 text-white shadow-lg min-w-[140px]`}
    >
      <div className="flex flex-col items-center gap-2">
        <Icon className="w-8 h-8" />
        <div className="text-center">
          <div className="font-bold text-sm">{label}</div>
          {sublabel && <div className="text-xs opacity-90">{sublabel}</div>}
        </div>
      </div>
    </motion.div>
  );
}

interface ConnectionLineProps {
  direction?: "vertical" | "horizontal";
  label?: string;
}

function ConnectionLine({ direction = "vertical", label }: ConnectionLineProps) {
  return (
    <div className="flex items-center justify-center">
      {direction === "vertical" ? (
        <div className="flex flex-col items-center">
          <div className="w-0.5 h-8 bg-gray-400 dark:bg-gray-500" />
          {label && (
            <span className="text-xs text-gray-600 dark:text-gray-400 my-1">{label}</span>
          )}
          <div className="w-0.5 h-8 bg-gray-400 dark:bg-gray-500" />
        </div>
      ) : (
        <div className="flex items-center">
          <div className="h-0.5 w-8 bg-gray-400 dark:bg-gray-500" />
          {label && (
            <span className="text-xs text-gray-600 dark:text-gray-400 mx-2">{label}</span>
          )}
          <div className="h-0.5 w-8 bg-gray-400 dark:bg-gray-500" />
        </div>
      )}
    </div>
  );
}

interface Stage0Props {
  children?: ReactNode;
}

function Stage0Diagram({ children }: Stage0Props) {
  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <div className="text-sm font-medium text-gray-600 dark:text-gray-400">100 Users</div>
      <Users className="w-6 h-6 text-gray-600 dark:text-gray-400" />
      <ConnectionLine direction="vertical" />
      <DiagramNode icon={Server} label="All-in-One Server" sublabel="App + DB + Storage" color="blue" />
      <div className="text-sm text-center text-gray-500 dark:text-gray-400 mt-2">
        Simple, single server architecture
      </div>
      {children}
    </div>
  );
}

function Stage1Diagram({ children }: Stage0Props) {
  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <div className="text-sm font-medium text-gray-600 dark:text-gray-400">10,000 Users</div>
      <Users className="w-6 h-6 text-gray-600 dark:text-gray-400" />
      <ConnectionLine direction="vertical" />
      <DiagramNode icon={Layers} label="Load Balancer" sublabel="Distributes traffic" color="purple" />
      <ConnectionLine direction="vertical" />
      <div className="flex gap-4">
        <DiagramNode icon={Server} label="Server 1" color="blue" />
        <DiagramNode icon={Server} label="Server 2" color="blue" />
        <DiagramNode icon={Server} label="Server 3" color="blue" />
        <DiagramNode icon={Server} label="Server 4" color="blue" />
      </div>
      <ConnectionLine direction="vertical" />
      <DiagramNode icon={Database} label="PostgreSQL" sublabel="Shared Database" color="green" />
      {children}
    </div>
  );
}

function Stage2Diagram({ children }: Stage0Props) {
  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <div className="text-sm font-medium text-gray-600 dark:text-gray-400">100,000 Users</div>
      <Users className="w-6 h-6 text-gray-600 dark:text-gray-400" />
      <ConnectionLine direction="vertical" />
      <DiagramNode icon={Globe} label="CDN" sublabel="Global Edge Cache" color="orange" />
      <ConnectionLine direction="vertical" label="Cache miss only" />
      <DiagramNode icon={Layers} label="Load Balancer" color="purple" />
      <ConnectionLine direction="vertical" />
      <div className="flex gap-4">
        <DiagramNode icon={Server} label="App Servers" color="blue" />
      </div>
      <div className="flex gap-8 mt-4">
        <div className="flex flex-col items-center gap-4">
          <ConnectionLine direction="vertical" />
          <DiagramNode icon={Cloud} label="S3 / GCS" sublabel="Image Storage" color="pink" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <ConnectionLine direction="vertical" />
          <DiagramNode icon={Database} label="PostgreSQL" sublabel="Metadata" color="green" />
        </div>
      </div>
      {children}
    </div>
  );
}

function Stage3Diagram({ children }: Stage0Props) {
  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <div className="text-sm font-medium text-gray-600 dark:text-gray-400">500,000 Users</div>
      <Users className="w-6 h-6 text-gray-600 dark:text-gray-400" />
      <ConnectionLine direction="vertical" />
      <DiagramNode icon={Layers} label="Load Balancer" color="purple" />
      <ConnectionLine direction="vertical" />
      <DiagramNode icon={Server} label="App Servers" color="blue" />
      <ConnectionLine direction="vertical" />
      <DiagramNode icon={Zap} label="Redis Cache" sublabel="85% cache hit rate" color="red" />
      <ConnectionLine direction="vertical" label="Cache miss only" />
      <div className="flex gap-8">
        <div className="flex flex-col items-center">
          <DiagramNode icon={Database} label="Primary DB" sublabel="Writes" color="green" />
          <ConnectionLine direction="vertical" label="Replication" />
          <div className="flex gap-2 mt-2">
            <DiagramNode icon={Database} label="Read-1" color="blue" />
            <DiagramNode icon={Database} label="Read-2" color="blue" />
            <DiagramNode icon={Database} label="Read-3" color="blue" />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

function Stage4Diagram({ children }: Stage0Props) {
  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <div className="text-sm font-medium text-gray-600 dark:text-gray-400">5 Million Users</div>
      <Users className="w-6 h-6 text-gray-600 dark:text-gray-400" />
      <ConnectionLine direction="vertical" />
      <DiagramNode icon={Layers} label="Load Balancer" color="purple" />
      <ConnectionLine direction="vertical" />
      <DiagramNode icon={Server} label="App Servers" sublabel="Shard Router" color="blue" />
      <div className="flex gap-8 mt-4">
        <div className="flex flex-col items-center">
          <ConnectionLine direction="vertical" />
          <DiagramNode icon={Zap} label="Redis Cache" color="red" />
        </div>
        <div className="flex flex-col items-center">
          <ConnectionLine direction="vertical" />
          <DiagramNode icon={Layers} label="Message Queue" sublabel="Kafka" color="orange" />
        </div>
      </div>
      <ConnectionLine direction="vertical" />
      <div className="grid grid-cols-3 gap-3">
        <DiagramNode icon={HardDrive} label="Shard 1" sublabel="0-1M users" color="green" />
        <DiagramNode icon={HardDrive} label="Shard 2" sublabel="1-2M users" color="green" />
        <DiagramNode icon={HardDrive} label="Shard 3" sublabel="2-3M users" color="green" />
        <DiagramNode icon={HardDrive} label="Shard 4" sublabel="3-4M users" color="green" />
        <DiagramNode icon={HardDrive} label="Shard 5" sublabel="4-5M users" color="green" />
      </div>
      {children}
    </div>
  );
}

export interface ArchitectureDiagramProps {
  stage: 0 | 1 | 2 | 3 | 4;
  className?: string;
  children?: ReactNode;
}

export default function ArchitectureDiagram({
  stage,
  className = "",
  children,
}: ArchitectureDiagramProps) {
  const stages = {
    0: Stage0Diagram,
    1: Stage1Diagram,
    2: Stage2Diagram,
    3: Stage3Diagram,
    4: Stage4Diagram,
  };

  const StageComponent = stages[stage];

  return (
    <div
      className={`my-8 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-auto ${className}`}
    >
      <StageComponent>{children}</StageComponent>
    </div>
  );
}
