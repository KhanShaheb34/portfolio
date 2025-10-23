"use client";

import VisualizationCard from "@/components/visuals/VisualizationCard";
import { useState } from "react";
import { motion } from "framer-motion";

const FanOutComparison = () => {
  const [followers, setFollowers] = useState(300);

  const isCelebrity = followers > 1000;

  return (
    <VisualizationCard title="Fan-out Strategies" subtitle="Push vs Pull feeds">
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2">
        <div className="rounded-lg border border-foreground/10 bg-background/80 p-4">
          <div className="mb-3 text-sm text-muted">Followers</div>
          <input
            type="range"
            min={50}
            max={10_000}
            step={50}
            value={followers}
            onChange={(e) => setFollowers(Number(e.target.value))}
            aria-label="Followers"
            className="accent-foreground h-2 w-full cursor-pointer appearance-none rounded-full bg-foreground/15"
          />
          <div className="mt-2 text-sm">{followers.toLocaleString()}</div>
        </div>

        <div className="rounded-lg border border-foreground/10 bg-background/80 p-4">
          <div className="mb-2 text-sm text-muted">Strategy</div>
          <div className="text-sm">
            {isCelebrity ? "Pull on read (compute on demand)" : "Push on write (pre-compute feeds)"}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-3 rounded bg-foreground/10 p-3 text-xs"
          >
            {isCelebrity ? (
              <ul className="list-disc pl-4">
                <li>Cheaper writes</li>
                <li>Heavier reads</li>
                <li>Always fresh for high-fanout accounts</li>
              </ul>
            ) : (
              <ul className="list-disc pl-4">
                <li>Fast reads for most users</li>
                <li>More work on writes</li>
                <li>Feeds are ready at open</li>
              </ul>
            )}
          </motion.div>
        </div>
      </div>
    </VisualizationCard>
  );
};

export default FanOutComparison;
