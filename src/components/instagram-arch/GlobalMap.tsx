"use client";

import { motion } from "framer-motion";
import { Server, Users, MapPin } from "lucide-react";
import { useState } from "react";

interface Region {
  id: string;
  name: string;
  location: string;
  users: string;
  latency: string;
  position: { top: string; left: string };
}

const regions: Region[] = [
  {
    id: "us-east",
    name: "US East",
    location: "Virginia + Oregon",
    users: "180M",
    latency: "50ms",
    position: { top: "30%", left: "20%" },
  },
  {
    id: "eu-west",
    name: "EU West",
    location: "Ireland + Frankfurt",
    users: "150M",
    latency: "80ms",
    position: { top: "25%", left: "50%" },
  },
  {
    id: "ap-southeast",
    name: "AP Southeast",
    location: "Singapore + Mumbai + Tokyo",
    users: "170M",
    latency: "100ms",
    position: { top: "45%", left: "75%" },
  },
];

export default function GlobalMap() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  return (
    <div className="my-8">
      <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        Global Multi-Region Deployment
      </h3>

      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-8 relative min-h-[500px]">
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <svg viewBox="0 0 1000 500" className="w-full h-full">
            <path
              d="M 0,250 Q 250,150 500,250 T 1000,250"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-blue-500"
            />
            <path
              d="M 250,100 Q 500,200 750,100"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-purple-500"
            />
          </svg>
        </div>

        <div className="relative">
          {regions.map((region) => (
            <motion.button
              key={region.id}
              type="button"
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ top: region.position.top, left: region.position.left }}
              onClick={() => setSelectedRegion(region.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedRegion(region.id);
                }
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`flex flex-col items-center gap-2 p-4 rounded-lg ${
                  selectedRegion === region.id
                    ? "bg-purple-600 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                } shadow-lg border-2 ${
                  selectedRegion === region.id
                    ? "border-purple-700"
                    : "border-gray-200 dark:border-gray-700"
                }`}
              >
                <MapPin className="w-6 h-6" />
                <div className="text-center">
                  <div className="font-bold text-sm">{region.name}</div>
                  <div className="text-xs opacity-80">{region.location}</div>
                </div>
              </div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: selectedRegion === region.id ? 1 : 0 }}
                className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 border border-gray-200 dark:border-gray-700 w-48 z-10"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Users className="w-4 h-4" />
                      <span className="text-xs">Users</span>
                    </div>
                    <span className="font-bold text-sm text-purple-600 dark:text-purple-400">
                      {region.users}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Server className="w-4 h-4" />
                      <span className="text-xs">Latency</span>
                    </div>
                    <span className="font-bold text-sm text-green-600 dark:text-green-400">
                      {region.latency}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.button>
          ))}
        </div>

        <div className="mt-96 pt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Click on any region to see details
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {regions.map((region) => (
          <motion.div
            key={region.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4"
          >
            <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
              {region.name}
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Location:</span>
                <span className="font-medium text-gray-900 dark:text-white">{region.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Users:</span>
                <span className="font-medium text-purple-600 dark:text-purple-400">
                  {region.users}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Latency:</span>
                <span className="font-medium text-green-600 dark:text-green-400">
                  {region.latency}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
        <h4 className="font-bold mb-2 text-blue-900 dark:text-blue-100">Key Insight:</h4>
        <p className="text-sm text-blue-800 dark:text-blue-200">
          When you open Instagram in Dhaka, your request goes to Singapore - not California.
          That's why it feels instant. Instagram has the same infrastructure deployed in 3 major
          regions, serving 500 million users with less than 150ms latency worldwide.
        </p>
      </div>
    </div>
  );
}
