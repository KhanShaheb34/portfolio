"use client";

import { motion } from "framer-motion";
import { Camera, Heart, Share2, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface CounterItemProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  rate: number;
  unit: string;
}

function CounterItem({ icon: Icon, label, rate, unit }: CounterItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + rate);
    }, 1000);

    return () => clearInterval(interval);
  }, [rate]);

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-6 text-white shadow-xl"
    >
      <div className="flex items-center gap-3 mb-3">
        <Icon className="w-6 h-6" />
        <h4 className="font-semibold text-lg">{label}</h4>
      </div>
      <div className="text-3xl font-bold mb-2">{count.toLocaleString()}</div>
      <div className="text-sm opacity-90">
        {rate.toLocaleString()} {unit}
      </div>
    </motion.div>
  );
}

export default function InteractiveCounter() {
  return (
    <div className="my-8">
      <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        Instagram Activity (Every Second)
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <CounterItem icon={Camera} label="Photos Uploaded" rate={1000} unit="per second" />
        <CounterItem icon={Heart} label="Likes" rate={4200} unit="per second" />
        <CounterItem icon={Share2} label="Photos Shared" rate={65} unit="per second" />
        <CounterItem icon={MessageCircle} label="Comments" rate={80} unit="per second" />
      </div>
      <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
        These counters simulate real-time Instagram activity based on reported statistics
      </p>
    </div>
  );
}
