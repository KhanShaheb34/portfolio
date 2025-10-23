'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Heart, Share, MessageCircle, Eye, Upload } from 'lucide-react';

interface Activity {
  id: string;
  type: 'upload' | 'like' | 'share' | 'comment' | 'view';
  timestamp: number;
  count: number;
}

const activityConfig = {
  upload: { icon: Upload, color: 'text-blue-500', bgColor: 'bg-blue-100' },
  like: { icon: Heart, color: 'text-red-500', bgColor: 'bg-red-100' },
  share: { icon: Share, color: 'text-green-500', bgColor: 'bg-green-100' },
  comment: { icon: MessageCircle, color: 'text-yellow-500', bgColor: 'bg-yellow-100' },
  view: { icon: Eye, color: 'text-purple-500', bgColor: 'bg-purple-100' }
};

export default function RealtimeCounter() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [totalCounts, setTotalCounts] = useState({
    uploads: 0,
    likes: 0,
    shares: 0,
    comments: 0,
    views: 0
  });

  useEffect(() => {
    const generateActivity = () => {
      const activityTypes: Array<keyof typeof activityConfig> = ['upload', 'like', 'share', 'comment', 'view'];
      const randomType = activityTypes[Math.floor(Math.random() * activityTypes.length)];
      
      const newActivity: Activity = {
        id: Math.random().toString(36).substr(2, 9),
        type: randomType,
        timestamp: Date.now(),
        count: Math.floor(Math.random() * 100) + 1
      };

      setActivities(prev => [newActivity, ...prev.slice(0, 9)]);
      
      setTotalCounts(prev => ({
        ...prev,
        [randomType + 's']: prev[randomType + 's' as keyof typeof prev] + newActivity.count
      }));
    };

    const interval = setInterval(generateActivity, 2000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-gray-200 p-6"
    >
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Instagram Activity (Live)
        </h3>
        <p className="text-sm text-gray-600">
          Every second, millions of actions happen on Instagram
        </p>
      </div>

      {/* Total Counts */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        {Object.entries(totalCounts).map(([key, value]) => {
          const type = key.slice(0, -1) as keyof typeof activityConfig;
          const config = activityConfig[type];
          const IconComponent = config.icon;
          
          return (
            <motion.div
              key={key}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={`${config.bgColor} rounded-lg p-4 text-center`}
            >
              <IconComponent className={`w-6 h-6 ${config.color} mx-auto mb-2`} />
              <div className={`text-lg font-bold ${config.color}`}>
                {formatNumber(value)}
              </div>
              <div className="text-xs text-gray-600 capitalize">
                {key}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Live Activity Feed */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Recent Activity</h4>
        <div className="space-y-1 max-h-32 overflow-y-auto">
          <AnimatePresence>
            {activities.map((activity, index) => {
              const config = activityConfig[activity.type];
              const IconComponent = config.icon;
              
              return (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center space-x-3 p-2 bg-white rounded-lg shadow-sm"
                >
                  <div className={`${config.bgColor} p-1 rounded-full`}>
                    <IconComponent className={`w-4 h-4 ${config.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">
                      {activity.count.toLocaleString()} {activity.type}s
                    </div>
                    <div className="text-xs text-gray-500">
                      {new Date(activity.timestamp).toLocaleTimeString()}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-gray-900">
              {formatNumber(totalCounts.uploads + totalCounts.likes + totalCounts.shares + totalCounts.comments + totalCounts.views)}
            </div>
            <div className="text-xs text-gray-600">Total Actions</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">
              {activities.length > 0 ? Math.round(activities.reduce((sum, activity) => sum + activity.count, 0) / activities.length) : 0}
            </div>
            <div className="text-xs text-gray-600">Avg per Activity</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}