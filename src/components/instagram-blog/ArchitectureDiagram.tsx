"use client";

import { useCallback, useState, useEffect } from "react";
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  ConnectionMode,
} from "reactflow";
import "reactflow/dist/style.css";
import { motion } from "framer-motion";

interface ArchitectureDiagramProps {
  stage: number;
  title: string;
  description?: string;
}

const getNodesAndEdges = (stage: number): { nodes: Node[]; edges: Edge[] } => {
  const baseStyle = {
    background: "rgba(15, 23, 42, 0.8)",
    border: "1px solid rgba(148, 163, 184, 0.2)",
    color: "#fff",
    borderRadius: "8px",
    padding: "12px",
    fontSize: "12px",
    backdropFilter: "blur(8px)",
  };

  switch (stage) {
    case 0: // Stage 0: Monolith
      return {
        nodes: [
          {
            id: "users",
            data: { label: "100 Users" },
            position: { x: 150, y: 0 },
            style: { ...baseStyle, background: "rgba(59, 130, 246, 0.2)" },
          },
          {
            id: "server",
            data: { label: "Single Server\n(All-in-One)" },
            position: { x: 100, y: 100 },
            style: { ...baseStyle, width: 200 },
          },
          {
            id: "app",
            data: { label: "Application\nLogic" },
            position: { x: 50, y: 200 },
            style: baseStyle,
          },
          {
            id: "db",
            data: { label: "PostgreSQL\nDatabase" },
            position: { x: 200, y: 200 },
            style: baseStyle,
          },
          {
            id: "storage",
            data: { label: "Image Storage\n(Local Disk)" },
            position: { x: 125, y: 300 },
            style: baseStyle,
          },
        ],
        edges: [
          { id: "e1", source: "users", target: "server", animated: true },
          { id: "e2", source: "server", target: "app" },
          { id: "e3", source: "server", target: "db" },
          { id: "e4", source: "server", target: "storage" },
        ],
      };

    case 1: // Stage 1: Load Balancer
      return {
        nodes: [
          {
            id: "users",
            data: { label: "10,000 Users" },
            position: { x: 200, y: 0 },
            style: { ...baseStyle, background: "rgba(59, 130, 246, 0.2)" },
          },
          {
            id: "lb",
            data: { label: "Load Balancer\n(Round Robin)" },
            position: { x: 175, y: 80 },
            style: { ...baseStyle, background: "rgba(34, 197, 94, 0.2)" },
          },
          {
            id: "s1",
            data: { label: "Server 1" },
            position: { x: 50, y: 180 },
            style: baseStyle,
          },
          {
            id: "s2",
            data: { label: "Server 2" },
            position: { x: 150, y: 180 },
            style: baseStyle,
          },
          {
            id: "s3",
            data: { label: "Server 3" },
            position: { x: 250, y: 180 },
            style: baseStyle,
          },
          {
            id: "s4",
            data: { label: "Server 4" },
            position: { x: 350, y: 180 },
            style: baseStyle,
          },
          {
            id: "db",
            data: { label: "PostgreSQL\n(Shared)" },
            position: { x: 175, y: 280 },
            style: { ...baseStyle, background: "rgba(239, 68, 68, 0.2)" },
          },
        ],
        edges: [
          { id: "e1", source: "users", target: "lb", animated: true },
          { id: "e2", source: "lb", target: "s1", animated: true },
          { id: "e3", source: "lb", target: "s2", animated: true },
          { id: "e4", source: "lb", target: "s3", animated: true },
          { id: "e5", source: "lb", target: "s4", animated: true },
          { id: "e6", source: "s1", target: "db" },
          { id: "e7", source: "s2", target: "db" },
          { id: "e8", source: "s3", target: "db" },
          { id: "e9", source: "s4", target: "db" },
        ],
      };

    case 2: // Stage 2: CDN
      return {
        nodes: [
          {
            id: "users",
            data: { label: "100K Users\nWorldwide" },
            position: { x: 200, y: 0 },
            style: { ...baseStyle, background: "rgba(59, 130, 246, 0.2)" },
          },
          {
            id: "cdn",
            data: { label: "CDN (Global Edge)\n200+ Locations" },
            position: { x: 150, y: 80 },
            style: { ...baseStyle, background: "rgba(168, 85, 247, 0.2)", width: 200 },
          },
          {
            id: "lb",
            data: { label: "Load Balancer" },
            position: { x: 200, y: 180 },
            style: baseStyle,
          },
          {
            id: "servers",
            data: { label: "App Servers" },
            position: { x: 200, y: 260 },
            style: baseStyle,
          },
          {
            id: "s3",
            data: { label: "S3 / GCS\nImage Storage" },
            position: { x: 80, y: 340 },
            style: { ...baseStyle, background: "rgba(34, 197, 94, 0.2)" },
          },
          {
            id: "db",
            data: { label: "PostgreSQL\n(Metadata)" },
            position: { x: 280, y: 340 },
            style: baseStyle,
          },
        ],
        edges: [
          { id: "e1", source: "users", target: "cdn", animated: true },
          { id: "e2", source: "cdn", target: "lb", label: "Cache miss" },
          { id: "e3", source: "lb", target: "servers" },
          { id: "e4", source: "servers", target: "s3" },
          { id: "e5", source: "servers", target: "db" },
        ],
      };

    case 3: // Stage 3: Caching + Read Replicas
      return {
        nodes: [
          {
            id: "users",
            data: { label: "500K Users" },
            position: { x: 200, y: 0 },
            style: { ...baseStyle, background: "rgba(59, 130, 246, 0.2)" },
          },
          {
            id: "lb",
            data: { label: "Load Balancer" },
            position: { x: 200, y: 70 },
            style: baseStyle,
          },
          {
            id: "servers",
            data: { label: "App Servers" },
            position: { x: 200, y: 140 },
            style: baseStyle,
          },
          {
            id: "redis",
            data: { label: "Redis Cache\n(85% hit rate)" },
            position: { x: 200, y: 220 },
            style: { ...baseStyle, background: "rgba(239, 68, 68, 0.2)" },
          },
          {
            id: "primary",
            data: { label: "Primary DB\n(Writes)" },
            position: { x: 100, y: 320 },
            style: { ...baseStyle, background: "rgba(34, 197, 94, 0.2)" },
          },
          {
            id: "rep1",
            data: { label: "Read\nReplica 1" },
            position: { x: 220, y: 380 },
            style: baseStyle,
          },
          {
            id: "rep2",
            data: { label: "Read\nReplica 2" },
            position: { x: 300, y: 380 },
            style: baseStyle,
          },
          {
            id: "rep3",
            data: { label: "Read\nReplica 3" },
            position: { x: 380, y: 380 },
            style: baseStyle,
          },
        ],
        edges: [
          { id: "e1", source: "users", target: "lb", animated: true },
          { id: "e2", source: "lb", target: "servers" },
          { id: "e3", source: "servers", target: "redis", label: "Check cache" },
          { id: "e4", source: "redis", target: "primary", label: "Write" },
          { id: "e5", source: "primary", target: "rep1", label: "Replicate", animated: true },
          { id: "e6", source: "primary", target: "rep2", label: "Replicate", animated: true },
          { id: "e7", source: "primary", target: "rep3", label: "Replicate", animated: true },
          { id: "e8", source: "redis", target: "rep1", label: "Read" },
          { id: "e9", source: "redis", target: "rep2", label: "Read" },
          { id: "e10", source: "redis", target: "rep3", label: "Read" },
        ],
      };

    case 4: // Stage 4: Sharding + Message Queue
      return {
        nodes: [
          {
            id: "users",
            data: { label: "5M Users" },
            position: { x: 250, y: 0 },
            style: { ...baseStyle, background: "rgba(59, 130, 246, 0.2)" },
          },
          {
            id: "lb",
            data: { label: "Load Balancer" },
            position: { x: 250, y: 60 },
            style: baseStyle,
          },
          {
            id: "servers",
            data: { label: "App Servers\n(Shard Router)" },
            position: { x: 250, y: 130 },
            style: baseStyle,
          },
          {
            id: "redis",
            data: { label: "Redis Cache" },
            position: { x: 150, y: 210 },
            style: baseStyle,
          },
          {
            id: "kafka",
            data: { label: "Kafka Queue\n(Background Jobs)" },
            position: { x: 350, y: 210 },
            style: { ...baseStyle, background: "rgba(168, 85, 247, 0.2)" },
          },
          {
            id: "workers",
            data: { label: "Background\nWorkers" },
            position: { x: 350, y: 290 },
            style: baseStyle,
          },
          {
            id: "shard1",
            data: { label: "Shard 1\nUsers 0-1M" },
            position: { x: 50, y: 360 },
            style: { ...baseStyle, background: "rgba(34, 197, 94, 0.2)" },
          },
          {
            id: "shard2",
            data: { label: "Shard 2\nUsers 1-2M" },
            position: { x: 150, y: 360 },
            style: { ...baseStyle, background: "rgba(34, 197, 94, 0.2)" },
          },
          {
            id: "shard3",
            data: { label: "Shard 3\nUsers 2-3M" },
            position: { x: 250, y: 360 },
            style: { ...baseStyle, background: "rgba(34, 197, 94, 0.2)" },
          },
          {
            id: "shard4",
            data: { label: "Shard 4\nUsers 3-4M" },
            position: { x: 350, y: 360 },
            style: { ...baseStyle, background: "rgba(34, 197, 94, 0.2)" },
          },
          {
            id: "shard5",
            data: { label: "Shard 5\nUsers 4-5M" },
            position: { x: 450, y: 360 },
            style: { ...baseStyle, background: "rgba(34, 197, 94, 0.2)" },
          },
        ],
        edges: [
          { id: "e1", source: "users", target: "lb", animated: true },
          { id: "e2", source: "lb", target: "servers" },
          { id: "e3", source: "servers", target: "redis" },
          { id: "e4", source: "servers", target: "kafka" },
          { id: "e5", source: "kafka", target: "workers", animated: true },
          { id: "e6", source: "redis", target: "shard1" },
          { id: "e7", source: "redis", target: "shard2" },
          { id: "e8", source: "redis", target: "shard3" },
          { id: "e9", source: "redis", target: "shard4" },
          { id: "e10", source: "redis", target: "shard5" },
          { id: "e11", source: "workers", target: "shard1" },
          { id: "e12", source: "workers", target: "shard2" },
          { id: "e13", source: "workers", target: "shard3" },
          { id: "e14", source: "workers", target: "shard4" },
          { id: "e15", source: "workers", target: "shard5" },
        ],
      };

    case 5: // Stage 5: Microservices
      return {
        nodes: [
          {
            id: "users",
            data: { label: "50M Users" },
            position: { x: 200, y: 0 },
            style: { ...baseStyle, background: "rgba(59, 130, 246, 0.2)" },
          },
          {
            id: "gateway",
            data: { label: "API Gateway\n(Kong / Apigee)" },
            position: { x: 175, y: 70 },
            style: { ...baseStyle, background: "rgba(168, 85, 247, 0.2)" },
          },
          {
            id: "feed",
            data: { label: "Feed\nService" },
            position: { x: 50, y: 160 },
            style: baseStyle,
          },
          {
            id: "post",
            data: { label: "Post\nService" },
            position: { x: 150, y: 160 },
            style: baseStyle,
          },
          {
            id: "user",
            data: { label: "User\nService" },
            position: { x: 250, y: 160 },
            style: baseStyle,
          },
          {
            id: "notif",
            data: { label: "Notification\nService" },
            position: { x: 350, y: 160 },
            style: baseStyle,
          },
          {
            id: "redis",
            data: { label: "Redis\nFeed Cache" },
            position: { x: 100, y: 260 },
            style: baseStyle,
          },
          {
            id: "kafka",
            data: { label: "Kafka Queue" },
            position: { x: 280, y: 260 },
            style: baseStyle,
          },
          {
            id: "db",
            data: { label: "Database Shards" },
            position: { x: 190, y: 340 },
            style: { ...baseStyle, background: "rgba(34, 197, 94, 0.2)" },
          },
        ],
        edges: [
          { id: "e1", source: "users", target: "gateway", animated: true },
          { id: "e2", source: "gateway", target: "feed" },
          { id: "e3", source: "gateway", target: "post" },
          { id: "e4", source: "gateway", target: "user" },
          { id: "e5", source: "gateway", target: "notif" },
          { id: "e6", source: "feed", target: "redis" },
          { id: "e7", source: "post", target: "kafka" },
          { id: "e8", source: "notif", target: "kafka" },
          { id: "e9", source: "redis", target: "db" },
          { id: "e10", source: "kafka", target: "db" },
        ],
      };

    default:
      return { nodes: [], edges: [] };
  }
};

export const ArchitectureDiagram = ({ stage, title, description }: ArchitectureDiagramProps) => {
  const [mounted, setMounted] = useState(false);
  const { nodes: initialNodes, edges: initialEdges } = getNodesAndEdges(stage);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="not-prose my-8 flex h-96 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/30">
        <div className="text-gray-400">Loading diagram...</div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="not-prose my-8"
    >
      <div className="mb-4">
        <h3 className="font-semibold text-white text-xl">{title}</h3>
        {description && <p className="mt-2 text-gray-400 text-sm">{description}</p>}
      </div>
      <div className="h-96 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/30">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          connectionMode={ConnectionMode.Loose}
          fitView
          attributionPosition="bottom-right"
        >
          <Background variant={BackgroundVariant.Dots} gap={12} size={1} color="#334155" />
          <Controls />
        </ReactFlow>
      </div>
    </motion.div>
  );
};
