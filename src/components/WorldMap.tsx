'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Zap, Clock } from 'lucide-react';

interface Region {
  id: string;
  name: string;
  x: number;
  y: number;
  users: number;
  latency: number;
  dataCenters: string[];
  color: string;
}

const regions: Region[] = [
  {
    id: 'us-east',
    name: 'US East',
    x: 20,
    y: 40,
    users: 180,
    latency: 50,
    dataCenters: ['Virginia', 'Oregon'],
    color: 'bg-green-500'
  },
  {
    id: 'eu-west',
    name: 'EU West',
    x: 50,
    y: 30,
    users: 150,
    latency: 80,
    dataCenters: ['Ireland', 'Frankfurt'],
    color: 'bg-blue-500'
  },
  {
    id: 'ap-southeast',
    name: 'AP Southeast',
    x: 75,
    y: 45,
    users: 170,
    latency: 100,
    dataCenters: ['Singapore', 'Mumbai', 'Tokyo'],
    color: 'bg-purple-500'
  }
];

interface WorldMapProps {
  selectedRegion?: string;
  onRegionSelect?: (region: string) => void;
  showLatency?: boolean;
  className?: string;
}

export default function WorldMap({ 
  selectedRegion, 
  onRegionSelect, 
  showLatency = true,
  className = '' 
}: WorldMapProps) {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const formatUsers = (users: number): string => {
    return `${users}M`;
  };

  const getLatencyColor = (latency: number): string => {
    if (latency < 60) return 'text-green-600';
    if (latency < 100) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`bg-white rounded-xl border border-gray-200 p-6 ${className}`}
    >
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Global Infrastructure
        </h3>
        <p className="text-sm text-gray-600">
          Instagram serves 500M+ users across 3 major regions
        </p>
      </div>

      {/* World Map Container */}
      <div className="relative w-full h-64 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg overflow-hidden">
        {/* Simplified World Map Background */}
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 100 60" className="w-full h-full">
            {/* Simplified continents */}
            <path
              d="M10,20 Q20,15 30,20 Q40,25 50,20 Q60,15 70,20 Q80,25 85,20 L85,40 Q80,45 70,40 Q60,35 50,40 Q40,45 30,40 Q20,35 10,40 Z"
              fill="currentColor"
              className="text-gray-300"
            />
          </svg>
        </div>

        {/* Regions */}
        {regions.map((region) => (
          <motion.div
            key={region.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: regions.indexOf(region) * 0.2 }}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer ${
              selectedRegion === region.id ? 'z-20' : 'z-10'
            }`}
            style={{ left: `${region.x}%`, top: `${region.y}%` }}
            onClick={() => onRegionSelect?.(region.id)}
            onMouseEnter={() => setHoveredRegion(region.id)}
            onMouseLeave={() => setHoveredRegion(null)}
          >
            {/* Region Circle */}
            <motion.div
              className={`w-8 h-8 ${region.color} rounded-full border-4 border-white shadow-lg flex items-center justify-center`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Users className="w-4 h-4 text-white" />
            </motion.div>

            {/* Pulse Animation */}
            <motion.div
              className={`absolute inset-0 ${region.color} rounded-full opacity-30`}
              animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Region Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
            >
              <div className="bg-white rounded-lg px-2 py-1 shadow-md text-xs font-medium text-gray-700">
                {region.name}
              </div>
            </motion.div>
          </motion.div>
        ))}

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {regions.map((region, index) => {
            const nextRegion = regions[(index + 1) % regions.length];
            return (
              <motion.line
                key={`line-${index}`}
                x1={`${region.x}%`}
                y1={`${region.y}%`}
                x2={`${nextRegion.x}%`}
                y2={`${nextRegion.y}%`}
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="2,2"
                className="text-gray-300"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            );
          })}
        </svg>
      </div>

      {/* Region Details */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {regions.map((region) => (
          <motion.div
            key={region.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: regions.indexOf(region) * 0.1 }}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedRegion === region.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 bg-gray-50'
            }`}
          >
            <div className="flex items-center space-x-2 mb-2">
              <div className={`w-3 h-3 ${region.color} rounded-full`} />
              <h4 className="font-medium text-gray-900">{region.name}</h4>
            </div>
            
            <div className="space-y-1 text-sm">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600">{formatUsers(region.users)} users</span>
              </div>
              
              {showLatency && (
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className={`${getLatencyColor(region.latency)}`}>
                    {region.latency}ms latency
                  </span>
                </div>
              )}
              
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600">
                  {region.dataCenters.join(', ')}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Global Stats */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-gray-900">
              {regions.reduce((sum, region) => sum + region.users, 0)}M
            </div>
            <div className="text-xs text-gray-600">Total Users</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">
              {Math.round(regions.reduce((sum, region) => sum + region.latency, 0) / regions.length)}ms
            </div>
            <div className="text-xs text-gray-600">Avg Latency</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}