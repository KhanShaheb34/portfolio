"use client";

import { useMemo, useState } from "react";
import VisualizationCard from "@/components/visuals/VisualizationCard";
import { motion } from "framer-motion";

const algorithms = ["Round Robin", "Least Connections", "Weighted"] as const;

type Algorithm = typeof algorithms[number];

type Server = { id: number; weight: number; connections: number };

const useServers = (count: number) => {
  return useMemo<Server[]>(() => Array.from({ length: count }, (_, i) => ({ id: i + 1, weight: i + 1, connections: 0 })), [count]);
};

const LoadBalancerSimulator = () => {
  const [algo, setAlgo] = useState<Algorithm>("Round Robin");
  const [users, setUsers] = useState(10000);
  const [serversCount, setServersCount] = useState(4);

  const servers = useServers(serversCount);

  // Simulate distribution
  const distribution = useMemo(() => {
    const result = servers.map((s) => ({ ...s, connections: 0 }));
    if (algo === "Round Robin") {
      for (let i = 0; i < users; i++) {
        const idx = i % result.length;
        result[idx].connections += 1;
      }
    } else if (algo === "Least Connections") {
      for (let i = 0; i < users; i++) {
        result.sort((a, b) => a.connections - b.connections);
        result[0].connections += 1;
      }
    } else if (algo === "Weighted") {
      const totalWeight = result.reduce((acc, s) => acc + s.weight, 0);
      for (let i = 0; i < users; i++) {
        const r = Math.random() * totalWeight;
        let sum = 0;
        for (const s of result) {
          sum += s.weight;
          if (r <= sum) {
            s.connections += 1;
            break;
          }
        }
      }
    }
    return result;
  }, [servers, users, algo]);

  const maxConn = Math.max(...distribution.map((s) => s.connections), 1);

  return (
    <VisualizationCard
      title="Load Balancer Simulator"
      subtitle="Compare algorithms as traffic grows"
      actions={
        <div className="flex items-center gap-2">
          <label className="sr-only" htmlFor="algo">Algorithm</label>
          <select
            id="algo"
            className="rounded border border-foreground/20 bg-background px-2 py-1 text-sm"
            aria-label="Load balancing algorithm"
            value={algo}
            onChange={(e) => setAlgo(e.target.value as Algorithm)}
          >
            {algorithms.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </div>
      }
    >
      <div className="flex flex-col gap-4 p-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label className="flex items-center justify-between gap-3 rounded border border-foreground/10 bg-background/80 p-3 text-sm">
            <span>Concurrent users</span>
            <input
              type="range"
              min={100}
              max={50000}
              step={100}
              value={users}
              aria-label="Concurrent users"
              onChange={(e) => setUsers(Number(e.target.value))}
              className="accent-foreground h-2 w-48 cursor-pointer appearance-none rounded-full bg-foreground/15"
            />
          </label>
          <label className="flex items-center justify-between gap-3 rounded border border-foreground/10 bg-background/80 p-3 text-sm">
            <span>Servers</span>
            <input
              type="range"
              min={1}
              max={8}
              step={1}
              value={serversCount}
              aria-label="Servers"
              onChange={(e) => setServersCount(Number(e.target.value))}
              className="accent-foreground h-2 w-48 cursor-pointer appearance-none rounded-full bg-foreground/15"
            />
          </label>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {distribution.map((s) => (
            <div key={s.id} className="rounded-lg border border-foreground/10 bg-background/80 p-3">
              <div className="mb-2 text-sm text-muted">Server {s.id}</div>
              <div className="h-24 rounded bg-foreground/10">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(s.connections / maxConn) * 100}%` }}
                  className="h-full w-full origin-bottom rounded bg-foreground"
                />
              </div>
              <div className="mt-2 text-xs text-muted">{s.connections.toLocaleString()} req</div>
            </div>
          ))}
        </div>
      </div>
    </VisualizationCard>
  );
};

export default LoadBalancerSimulator;
