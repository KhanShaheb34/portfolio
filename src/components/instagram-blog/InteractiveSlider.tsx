"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Activity } from "lucide-react";

interface InteractiveSliderProps {
  min: number;
  max: number;
  defaultValue: number;
  label: string;
  onValueChange?: (value: number) => void;
}

export const InteractiveSlider = ({
  min,
  max,
  defaultValue,
  label,
  onValueChange,
}: InteractiveSliderProps) => {
  const [value, setValue] = useState(defaultValue);
  const [serverLoad, setServerLoad] = useState(12);

  const handleChange = (newValue: number) => {
    setValue(newValue);
    // Simulate server load calculation
    const load = Math.min(100, (newValue / max) * 100 * 1.5);
    setServerLoad(Math.round(load));
    onValueChange?.(newValue);
  };

  const getLoadColor = (load: number) => {
    if (load < 50) return "text-green-400";
    if (load < 80) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="not-prose my-8 rounded-xl border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-6 backdrop-blur-sm"
    >
      <div className="mb-6">
        <h3 className="mb-2 font-semibold text-white text-xl">{label}</h3>
        <p className="text-gray-400 text-sm">
          Adjust the slider to simulate different user loads
        </p>
      </div>

      <div className="space-y-6">
        {/* Slider */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-400" />
              <span className="font-mono font-bold text-2xl text-white">
                {value.toLocaleString()}
              </span>
              <span className="text-gray-400 text-sm">users</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-purple-400" />
              <span className={`font-mono font-bold text-xl ${getLoadColor(serverLoad)}`}>
                {serverLoad}%
              </span>
              <span className="text-gray-400 text-sm">CPU</span>
            </div>
          </div>

          <input
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={(e) => handleChange(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-blue-500"
            style={{
              backgroundImage: `linear-gradient(to right, rgb(59, 130, 246) 0%, rgb(59, 130, 246) ${(value / max) * 100}%, rgba(255,255,255,0.1) ${(value / max) * 100}%, rgba(255,255,255,0.1) 100%)`,
            }}
          />

          <div className="flex justify-between text-gray-500 text-xs">
            <span>{min.toLocaleString()}</span>
            <span>{max.toLocaleString()}</span>
          </div>
        </div>

        {/* Load visualization */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Server Load</span>
            <span className={`font-mono ${getLoadColor(serverLoad)}`}>{serverLoad}%</span>
          </div>
          <div className="h-4 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: "12%" }}
              animate={{ width: `${serverLoad}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`h-full ${
                serverLoad < 50
                  ? "bg-green-400"
                  : serverLoad < 80
                    ? "bg-yellow-400"
                    : "bg-red-400"
              }`}
            />
          </div>
          <div className="text-center text-gray-500 text-xs">
            {serverLoad < 50 && "✅ System running smoothly"}
            {serverLoad >= 50 && serverLoad < 80 && "⚠️ System under moderate load"}
            {serverLoad >= 80 && "🔥 System overloaded - need to scale!"}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
