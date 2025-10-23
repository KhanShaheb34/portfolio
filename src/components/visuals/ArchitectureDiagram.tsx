"use client";

import { useMemo } from "react";
import VisualizationCard from "@/components/visuals/VisualizationCard";
import ReactFlow, { Background, Controls, MiniMap, type Edge, type Node } from "reactflow";
import "reactflow/dist/style.css";

export type ArchitectureDiagramProps = {
  stage: number;
  nodes?: Node[];
  edges?: Edge[];
};

const defaultStyles = {
  node: {
    className:
      "rounded-md border border-foreground/20 bg-background px-3 py-2 text-sm shadow-sm",
  },
};

const stages: Record<number, { nodes: Node[]; edges: Edge[]; fitView?: boolean }> = {
  0: {
    nodes: [
      { id: "server", position: { x: 300, y: 70 }, data: { label: "All-in-One Server" }, type: "default" },
      { id: "app", position: { x: 100, y: 180 }, data: { label: "App Logic" } },
      { id: "db", position: { x: 300, y: 180 }, data: { label: "PostgreSQL" } },
      { id: "disk", position: { x: 500, y: 180 }, data: { label: "Image Storage (Disk)" } },
      { id: "users", position: { x: 300, y: -10 }, data: { label: "100 Users" } },
    ],
    edges: [
      { id: "u-s", source: "users", target: "server" },
      { id: "s-a", source: "server", target: "app" },
      { id: "s-d", source: "server", target: "db" },
      { id: "s-disk", source: "server", target: "disk" },
    ],
  },
  1: {
    nodes: [
      { id: "lb", position: { x: 300, y: 40 }, data: { label: "Load Balancer" } },
      { id: "s1", position: { x: 120, y: 140 }, data: { label: "Server 1" } },
      { id: "s2", position: { x: 280, y: 140 }, data: { label: "Server 2" } },
      { id: "s3", position: { x: 440, y: 140 }, data: { label: "Server 3" } },
      { id: "db", position: { x: 300, y: 260 }, data: { label: "PostgreSQL (Shared)" } },
    ],
    edges: [
      { id: "lb-s1", source: "lb", target: "s1" },
      { id: "lb-s2", source: "lb", target: "s2" },
      { id: "lb-s3", source: "lb", target: "s3" },
      { id: "s1-db", source: "s1", target: "db" },
      { id: "s2-db", source: "s2", target: "db" },
      { id: "s3-db", source: "s3", target: "db" },
    ],
  },
  2: {
    nodes: [
      { id: "cdn", position: { x: 300, y: 10 }, data: { label: "CDN (Global Edge)" } },
      { id: "lb", position: { x: 300, y: 100 }, data: { label: "Load Balancer" } },
      { id: "app", position: { x: 300, y: 190 }, data: { label: "App Servers" } },
      { id: "s3", position: { x: 120, y: 280 }, data: { label: "Object Storage (S3)" } },
      { id: "db", position: { x: 480, y: 280 }, data: { label: "DB (Metadata Only)" } },
    ],
    edges: [
      { id: "cdn-lb", source: "cdn", target: "lb" },
      { id: "lb-app", source: "lb", target: "app" },
      { id: "app-s3", source: "app", target: "s3" },
      { id: "app-db", source: "app", target: "db" },
    ],
  },
  3: {
    nodes: [
      { id: "app", position: { x: 300, y: 40 }, data: { label: "App Servers" } },
      { id: "redis", position: { x: 120, y: 150 }, data: { label: "Redis Cache" } },
      { id: "primary", position: { x: 480, y: 150 }, data: { label: "Primary DB (Writes)" } },
      { id: "rep1", position: { x: 380, y: 260 }, data: { label: "Read Replica 1" } },
      { id: "rep2", position: { x: 480, y: 260 }, data: { label: "Read Replica 2" } },
      { id: "rep3", position: { x: 580, y: 260 }, data: { label: "Read Replica 3" } },
    ],
    edges: [
      { id: "app-redis", source: "app", target: "redis" },
      { id: "app-primary", source: "app", target: "primary" },
      { id: "primary-rep1", source: "primary", target: "rep1" },
      { id: "primary-rep2", source: "primary", target: "rep2" },
      { id: "primary-rep3", source: "primary", target: "rep3" },
    ],
  },
  4: {
    nodes: [
      { id: "app", position: { x: 300, y: 40 }, data: { label: "App Servers (Shard Router)" } },
      { id: "redis", position: { x: 120, y: 130 }, data: { label: "Redis Cache" } },
      { id: "kafka", position: { x: 480, y: 130 }, data: { label: "Kafka (Queue)" } },
      { id: "s1", position: { x: 60, y: 240 }, data: { label: "Shard 1" } },
      { id: "s2", position: { x: 200, y: 240 }, data: { label: "Shard 2" } },
      { id: "s3", position: { x: 340, y: 240 }, data: { label: "Shard 3" } },
      { id: "s4", position: { x: 480, y: 240 }, data: { label: "Shard 4" } },
      { id: "s5", position: { x: 620, y: 240 }, data: { label: "Shard 5" } },
    ],
    edges: [
      { id: "app-redis", source: "app", target: "redis" },
      { id: "app-kafka", source: "app", target: "kafka" },
      { id: "app-s1", source: "app", target: "s1" },
      { id: "app-s2", source: "app", target: "s2" },
      { id: "app-s3", source: "app", target: "s3" },
      { id: "app-s4", source: "app", target: "s4" },
      { id: "app-s5", source: "app", target: "s5" },
    ],
  },
  5: {
    nodes: [
      { id: "gateway", position: { x: 300, y: 30 }, data: { label: "API Gateway" } },
      { id: "feed", position: { x: 80, y: 130 }, data: { label: "Feed Service" } },
      { id: "post", position: { x: 220, y: 130 }, data: { label: "Post Service" } },
      { id: "user", position: { x: 360, y: 130 }, data: { label: "User Service" } },
      { id: "notif", position: { x: 500, y: 130 }, data: { label: "Notification Service" } },
      { id: "redis", position: { x: 180, y: 240 }, data: { label: "Redis Feed Cache" } },
      { id: "kafka", position: { x: 420, y: 240 }, data: { label: "Kafka" } },
      { id: "db", position: { x: 300, y: 320 }, data: { label: "DB Shards" } },
    ],
    edges: [
      { id: "g-feed", source: "gateway", target: "feed" },
      { id: "g-post", source: "gateway", target: "post" },
      { id: "g-user", source: "gateway", target: "user" },
      { id: "g-notif", source: "gateway", target: "notif" },
      { id: "feed-redis", source: "feed", target: "redis" },
      { id: "post-kafka", source: "post", target: "kafka" },
      { id: "user-db", source: "user", target: "db" },
    ],
  },
  6: {
    nodes: [
      { id: "cdn", position: { x: 300, y: 10 }, data: { label: "Global CDN" } },
      { id: "dns", position: { x: 300, y: 90 }, data: { label: "DNS Routing" } },
      { id: "us", position: { x: 120, y: 180 }, data: { label: "US Region" } },
      { id: "eu", position: { x: 300, y: 180 }, data: { label: "EU Region" } },
      { id: "ap", position: { x: 480, y: 180 }, data: { label: "APAC Region" } },
    ],
    edges: [
      { id: "cdn-dns", source: "cdn", target: "dns" },
      { id: "dns-us", source: "dns", target: "us" },
      { id: "dns-eu", source: "dns", target: "eu" },
      { id: "dns-ap", source: "dns", target: "ap" },
    ],
  },
  7: {
    nodes: [
      { id: "edge", position: { x: 300, y: 10 }, data: { label: "Edge Layer (CDN + Edge)" } },
      { id: "gateway", position: { x: 300, y: 90 }, data: { label: "API Gateway" } },
      { id: "services", position: { x: 300, y: 170 }, data: { label: "Microservices (20+)" } },
      { id: "cache", position: { x: 120, y: 250 }, data: { label: "Redis Cluster" } },
      { id: "queue", position: { x: 480, y: 250 }, data: { label: "Kafka" } },
      { id: "data", position: { x: 300, y: 330 }, data: { label: "Data Layer (Cassandra, PG, S3)" } },
      { id: "obs", position: { x: 300, y: 410 }, data: { label: "Observability" } },
    ],
    edges: [
      { id: "e-g", source: "edge", target: "gateway" },
      { id: "g-s", source: "gateway", target: "services" },
      { id: "s-c", source: "services", target: "cache" },
      { id: "s-q", source: "services", target: "queue" },
      { id: "s-d", source: "services", target: "data" },
      { id: "d-o", source: "data", target: "obs" },
    ],
  },
};

const ArchitectureDiagram = ({ stage, nodes, edges }: ArchitectureDiagramProps) => {
  const graph = useMemo(() => {
    if (nodes && edges) return { nodes, edges };
    return stages[stage] ?? stages[0];
  }, [stage, nodes, edges]);

  const decoratedNodes = useMemo<Node[]>(
    () =>
      graph.nodes.map((n) => ({
        ...n,
        data: { label: n.data?.label },
        style: { borderRadius: 8 },
        className: defaultStyles.node.className,
      })),
    [graph.nodes],
  );

  return (
    <VisualizationCard
      title={`Architecture – Stage ${stage}`}
      subtitle="Diagram evolves as scale increases"
    >
      <div className="h-[360px] w-full">
        <ReactFlow nodes={decoratedNodes} edges={graph.edges} fitView>
          <Background />
          <MiniMap pannable zoomable />
          <Controls position="bottom-right" />
        </ReactFlow>
      </div>
    </VisualizationCard>
  );
};

export default ArchitectureDiagram;
