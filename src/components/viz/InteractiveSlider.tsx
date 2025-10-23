"use client";

import * as React from "react";
import VizCard from "@/components/viz/VizCard";

export type InteractiveSliderProps = {
  min: number;
  max: number;
  step?: number;
  initial?: number;
  label: string;
  onChange?: (value: number) => void;
  format?: (value: number) => string;
};

export default function InteractiveSlider({
  min,
  max,
  step = 1,
  initial,
  label,
  onChange,
  format = (v) => v.toLocaleString(),
}: InteractiveSliderProps) {
  const [value, setValue] = React.useState<number>(initial ?? min);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = Number(e.target.value);
    setValue(next);
    onChange?.(next);
  };

  return (
    <VizCard title={label}>
      <div className="flex items-center gap-4">
        <input
          aria-label={label}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className="w-full accent-foreground"
        />
        <output className="min-w-28 text-right text-sm text-muted" aria-live="polite">
          {format(value)}
        </output>
      </div>
    </VizCard>
  );
}
