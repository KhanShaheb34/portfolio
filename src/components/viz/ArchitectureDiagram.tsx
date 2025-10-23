"use client";

import * as React from "react";
import ReactFlow, { Background, Controls, type Edge, type Node } from "reactflow";
import "reactflow/dist/style.css";
import VizCard from "@/components/viz/VizCard";

export type ArchitectureDiagramProps = {
  stage: number;
  nodes: Node[];
  edges: Edge[];
  height?: number;
};

export default function ArchitectureDiagram({ stage, nodes, edges, height = 380 }: ArchitectureDiagramProps) {
  const [rfNodes, setNodes] = React.useState<Node[]>(nodes);
  const [rfEdges, setEdges] = React.useState<Edge[]>(edges);

  React.useEffect(() => {
    setNodes(nodes);
    setEdges(edges);
  }, [nodes, edges]);

  return (
    <VizCard title={`Architecture – Stage ${stage}`} className="p-0 overflow-hidden">
      <div style={{ height }} className="w-full">
        <ReactFlow nodes={rfNodes} edges={rfEdges} fitView>
          <Background />
          <Controls showInteractive={false} position="bottom-right" />
        </ReactFlow>
      </div>
    </VizCard>
  );
}
