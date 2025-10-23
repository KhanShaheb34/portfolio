'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface InteractiveSliderProps {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  label: string;
  formatValue?: (value: number) => string;
  className?: string;
}

const formatUserCount = (value: number): string => {
  if (value >= 1000000000) {
    return `${(value / 1000000000).toFixed(1)}B`;
  } else if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K`;
  }
  return value.toString();
};

export default function InteractiveSlider({ 
  min, 
  max, 
  value, 
  onChange, 
  label, 
  formatValue = formatUserCount,
  className = '' 
}: InteractiveSliderProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleChange = (newValue: number) => {
    onChange(newValue);
  };

  const getStageFromValue = (val: number) => {
    if (val <= 100) return 0;
    if (val <= 10000) return 1;
    if (val <= 100000) return 2;
    if (val <= 500000) return 3;
    if (val <= 5000000) return 4;
    if (val <= 50000000) return 5;
    if (val <= 500000000) return 6;
    return 7;
  };

  const getStageDescription = (stage: number) => {
    const descriptions = [
      'Single server, simple setup',
      'Load balancer + multiple servers',
      'CDN for global image delivery',
      'Redis caching + read replicas',
      'Database sharding + message queues',
      'Microservices architecture',
      'Multi-region deployment',
      'Full-scale production system'
    ];
    return descriptions[stage] || '';
  };

  const currentStage = getStageFromValue(value);
  const stageDescription = getStageDescription(currentStage);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`bg-white rounded-xl border border-gray-200 p-6 ${className}`}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
          </label>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">{formatValue(min)}</span>
            <div className="flex-1 relative">
              <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={(e) => handleChange(Number(e.target.value))}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((value - min) / (max - min)) * 100}%, #e5e7eb ${((value - min) / (max - min)) * 100}%, #e5e7eb 100%)`
                }}
              />
            </div>
            <span className="text-sm text-gray-500">{formatValue(max)}</span>
          </div>
        </div>

        <motion.div
          key={value}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="text-center"
        >
          <div className="text-2xl font-bold text-blue-600 mb-1">
            {formatValue(value)} users
          </div>
          <div className="text-sm text-gray-600">
            Stage {currentStage}: {stageDescription}
          </div>
        </motion.div>

        <div className="flex justify-between text-xs text-gray-500">
          <span>Stage 0</span>
          <span>Stage 1</span>
          <span>Stage 2</span>
          <span>Stage 3</span>
          <span>Stage 4</span>
          <span>Stage 5</span>
          <span>Stage 6</span>
          <span>Stage 7</span>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </motion.div>
  );
}