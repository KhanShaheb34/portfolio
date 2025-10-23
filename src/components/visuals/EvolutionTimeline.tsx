"use client";

import VisualizationCard from "@/components/visuals/VisualizationCard";
import { useState } from "react";
import ArchitectureDiagram from "@/components/visuals/ArchitectureDiagram";

const stages = [
  { id: 0, label: "Stage 0 – 100 users" },
  { id: 1, label: "Stage 1 – 10K users" },
  { id: 2, label: "Stage 2 – 100K users" },
  { id: 3, label: "Stage 3 – 500K users" },
  { id: 4, label: "Stage 4 – 5M users" },
  { id: 5, label: "Stage 5 – 50M users" },
  { id: 6, label: "Stage 6 – 500M users" },
  { id: 7, label: "Stage 7 – 2B users" },
];

const EvolutionTimeline = () => {
  const [stage, setStage] = useState(0);

  return (
    <VisualizationCard title="Evolution Timeline" subtitle="Slide across stages to see changes">
      <div className="flex flex-col gap-4 p-4">
        <input
          type="range"
          min={0}
          max={7}
          step={1}
          value={stage}
          onChange={(e) => setStage(Number(e.target.value))}
          aria-label="Architecture stage"
          className="accent-foreground h-2 w-full cursor-pointer appearance-none rounded-full bg-foreground/15"
        />
        <div className="text-sm text-muted">{stages.find((s) => s.id === stage)?.label}</div>
        <ArchitectureDiagram stage={stage} />
      </div>
    </VisualizationCard>
  );
};

export default EvolutionTimeline;
