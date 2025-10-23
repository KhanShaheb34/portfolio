"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Camera, Heart, Share2, MessageCircle } from "lucide-react";

export const LiveCounter = () => {
  const [counters, setCounters] = useState({
    photos: 0,
    likes: 0,
    shares: 0,
    comments: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) => ({
        photos: prev.photos + 1000,
        likes: prev.likes + 4200000,
        shares: prev.shares + 65000,
        comments: prev.comments + 80000,
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Camera, label: "Photos Uploaded", value: counters.photos, color: "text-purple-400" },
    { icon: Heart, label: "Posts Liked", value: counters.likes, color: "text-red-400" },
    { icon: Share2, label: "Photos Shared", value: counters.shares, color: "text-blue-400" },
    { icon: MessageCircle, label: "Comments Posted", value: counters.comments, color: "text-green-400" },
  ];

  return (
    <div className="not-prose my-8 rounded-xl border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-6 backdrop-blur-sm">
      <h3 className="mb-6 text-center font-semibold text-white text-xl">
        Instagram Activity (Every Second)
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center rounded-lg border border-white/5 bg-white/5 p-4 text-center backdrop-blur-sm"
          >
            <stat.icon className={`mb-3 h-8 w-8 ${stat.color}`} />
            <div className="mb-1 font-mono font-bold text-2xl text-white">
              {stat.value.toLocaleString()}
            </div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
