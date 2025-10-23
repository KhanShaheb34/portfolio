"use client";

import { useId, useState } from "react";
import { motion } from "framer-motion";
import VisualizationCard from "@/components/visuals/VisualizationCard";

export type InteractiveSliderProps = {
  min: number;
  max: number;
  step?: number;
  label: string;
  format?: (value: number) => string;
  onChange?: (value: number) => void;
};

const InteractiveSlider = ({ min, max, step = 1, label, format, onChange }: InteractiveSliderProps) => {
  const [value, setValue] = useState(min);
  const id = useId();

  const formatValue = (v: number) => (format ? format(v) : v.toLocaleString());

  const handleChange = (next: number) => {
    setValue(next);
    if (onChange) onChange(next);
  };

  return (
    <VisualizationCard
      title={label}
      subtitle="Drag to see impact across the system"
      actions={
        <span className="rounded bg-foreground/10 px-2 py-1 text-xs text-foreground">
          {formatValue(value)}
        </span>
      }
    >
      <div className="flex flex-col gap-4 p-4">
        <label htmlFor={id} className="sr-only">
          {label}
        </label>
        <input
          id={id}
          type="range"
          role="slider"
          min={min}
          max={max}
          step={step}
          value={value}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          onChange={(e) => handleChange(Number(e.target.value))}
          className="accent-foreground h-2 w-full cursor-pointer appearance-none rounded-full bg-foreground/15"
        />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${((value - min) / (max - min)) * 100}%` }}
          className="h-1 rounded-full bg-foreground/60"
          aria-hidden
        />
        <div className="flex items-center justify-between text-xs text-muted">
          <span>{formatValue(min)}</span>
          <span>{formatValue(max)}</span>
        </div>
      </div>
    </VisualizationCard>
  );
};

export default InteractiveSlider;
