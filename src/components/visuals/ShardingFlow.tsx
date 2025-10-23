"use client";

import VisualizationCard from "@/components/visuals/VisualizationCard";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const shardRanges = [
  { id: 1, min: 0, max: 999_999 },
  { id: 2, min: 1_000_000, max: 1_999_999 },
  { id: 3, min: 2_000_000, max: 2_999_999 },
  { id: 4, min: 3_000_000, max: 3_999_999 },
  { id: 5, min: 4_000_000, max: 4_999_999 },
];

const getShardForUser = (userId: number) => Math.floor(userId / 1_000_000) + 1;

const ShardingFlow = () => {
  const [userId, setUserId] = useState(2_345_678);
  const shard = useMemo(() => getShardForUser(userId), [userId]);

  return (
    <VisualizationCard title="Database Sharding" subtitle="Route writes by user ID ranges">
      <div className="flex flex-col gap-4 p-4">
        <label className="flex items-center justify-between gap-3 rounded border border-foreground/10 bg-background/80 p-3 text-sm">
          <span>User ID</span>
          <input
            type="number"
            value={userId}
            onChange={(e) => setUserId(Number(e.target.value || 0))}
            aria-label="User ID"
            className="w-40 rounded border border-foreground/20 bg-background px-2 py-1"
          />
        </label>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-5">
          {shardRanges.map((r) => (
            <div key={r.id} className={`rounded-lg border p-3 ${r.id === shard ? "border-foreground" : "border-foreground/10"}`}>
              <div className="text-sm">Shard {r.id}</div>
              <div className="text-xs text-muted">
                {r.min.toLocaleString()} - {r.max.toLocaleString()}
              </div>
              {r.id === shard && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 rounded bg-foreground/10 p-2 text-xs">
                  Routed here
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </VisualizationCard>
  );
};

export default ShardingFlow;
