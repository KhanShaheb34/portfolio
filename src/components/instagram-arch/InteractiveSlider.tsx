"use client";

import { motion } from "framer-motion";
import { Users, Server, Zap } from "lucide-react";
import { useState } from "react";

interface InteractiveSliderProps {
  min: number;
  max: number;
  label: string;
  onValueChange?: (value: number) => void;
}

export default function InteractiveSlider({
  min,
  max,
  label,
  onValueChange,
}: InteractiveSliderProps) {
  const [value, setValue] = useState(min);

  const handleChange = (newValue: number) => {
    setValue(newValue);
    onValueChange?.(newValue);
  };

  const getServerCount = (users: number) => {
    if (users <= 1000) return 1;
    if (users <= 10000) return 4;
    if (users <= 100000) return 10;
    return Math.ceil(users / 10000);
  };

  const getResponseTime = (users: number) => {
    if (users <= 1000) return "50ms";
    if (users <= 10000) return "200ms";
    if (users <= 100000) return "500ms";
    return "800ms";
  };

  const serverCount = getServerCount(value);
  const responseTime = getResponseTime(value);

  return (
    <div className="my-8 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{label}</h3>

      <div className="space-y-6">
        <div>
          <label htmlFor="user-slider" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Number of Users: <span className="text-purple-600 dark:text-purple-400 font-bold">{value.toLocaleString()}</span>
          </label>
          <input
            id="user-slider"
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={(e) => handleChange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>{min.toLocaleString()}</span>
            <span>{max.toLocaleString()}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            key={`users-${value}`}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Active Users</span>
            </div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {value.toLocaleString()}
            </div>
          </motion.div>

          <motion.div
            key={`servers-${serverCount}`}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <Server className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Servers Needed</span>
            </div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {serverCount}
            </div>
          </motion.div>

          <motion.div
            key={`response-${responseTime}`}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Response Time</span>
            </div>
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {responseTime}
            </div>
          </motion.div>
        </div>

        <div className="flex gap-2 flex-wrap">
          {Array.from({ length: Math.min(serverCount, 20) }).map((_, i) => (
            <motion.div
              key={`server-icon-${i}-${serverCount}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded flex items-center justify-center text-white text-xs font-bold"
              title={`Server ${i + 1}`}
            >
              {i + 1}
            </motion.div>
          ))}
          {serverCount > 20 && (
            <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded flex items-center justify-center text-xs">
              +{serverCount - 20}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
