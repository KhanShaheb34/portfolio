'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface Stage {
  id: number;
  users: string;
  title: string;
  description: string;
  technologies: string[];
  cost: string;
  latency: string;
  keyFeatures: string[];
  color: string;
}

const stages: Stage[] = [
  {
    id: 0,
    users: '100',
    title: 'The Dream',
    description: 'Single server running everything',
    technologies: ['Node.js', 'PostgreSQL', 'Local Storage'],
    cost: '$20/month',
    latency: '50ms',
    keyFeatures: ['Simple setup', 'Easy debugging', 'Low cost'],
    color: 'bg-green-100'
  },
  {
    id: 1,
    users: '10K',
    title: 'First Success',
    description: 'Load balancer + multiple servers',
    technologies: ['Load Balancer', '4x Servers', 'PostgreSQL'],
    cost: '$500/month',
    latency: '200ms',
    keyFeatures: ['Horizontal scaling', 'Fault tolerance', 'Load distribution'],
    color: 'bg-blue-100'
  },
  {
    id: 2,
    users: '100K',
    title: 'The Image Problem',
    description: 'CDN for global image delivery',
    technologies: ['CDN', 'S3 Storage', 'Global Edge'],
    cost: '$800/month',
    latency: '50ms',
    keyFeatures: ['Global performance', 'Reduced bandwidth', 'Edge caching'],
    color: 'bg-cyan-100'
  },
  {
    id: 3,
    users: '500K',
    title: 'Database Bottleneck',
    description: 'Redis caching + read replicas',
    technologies: ['Redis', 'Read Replicas', 'Caching Layer'],
    cost: '$3K/month',
    latency: '100ms',
    keyFeatures: ['85% cache hit rate', 'Read optimization', 'Reduced DB load'],
    color: 'bg-purple-100'
  },
  {
    id: 4,
    users: '5M',
    title: 'The Write Problem',
    description: 'Database sharding + message queues',
    technologies: ['Database Sharding', 'Kafka', 'Async Processing'],
    cost: '$15K/month',
    latency: '80ms',
    keyFeatures: ['Distributed writes', 'Background processing', 'Scalable queues'],
    color: 'bg-orange-100'
  },
  {
    id: 5,
    users: '50M',
    title: 'Feed Generation Crisis',
    description: 'Microservices + pre-computed feeds',
    technologies: ['Microservices', 'API Gateway', 'Feed Cache'],
    cost: '$80K/month',
    latency: '150ms',
    keyFeatures: ['Service isolation', 'Hybrid feed strategy', 'Independent scaling'],
    color: 'bg-indigo-100'
  },
  {
    id: 6,
    users: '500M',
    title: 'Global Scale',
    description: 'Multi-region deployment',
    technologies: ['Multi-Region', 'Global DNS', 'Regional Data'],
    cost: '$500K/month',
    latency: '120ms',
    keyFeatures: ['Global latency', 'Regional compliance', 'Disaster recovery'],
    color: 'bg-pink-100'
  },
  {
    id: 7,
    users: '2B',
    title: 'The Final Form',
    description: 'Full-scale production system',
    technologies: ['ML Pipeline', 'Advanced Monitoring', 'Complete Stack'],
    cost: '$180M/month',
    latency: '300ms',
    keyFeatures: ['AI recommendations', 'Real-time features', 'Advanced safety'],
    color: 'bg-red-100'
  }
];

interface TimelineEvolutionProps {
  onStageChange?: (stage: number) => void;
  className?: string;
}

export default function TimelineEvolution({ onStageChange, className = '' }: TimelineEvolutionProps) {
  const [currentStage, setCurrentStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStage(prev => {
          const nextStage = (prev + 1) % stages.length;
          onStageChange?.(nextStage);
          return nextStage;
        });
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, onStageChange]);

  const handleStageChange = (stage: number) => {
    setCurrentStage(stage);
    onStageChange?.(stage);
  };

  const nextStage = () => {
    const next = (currentStage + 1) % stages.length;
    handleStageChange(next);
  };

  const prevStage = () => {
    const prev = currentStage === 0 ? stages.length - 1 : currentStage - 1;
    handleStageChange(prev);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const currentStageData = stages[currentStage];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`bg-white rounded-xl border border-gray-200 p-6 ${className}`}
    >
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Architecture Evolution Timeline
        </h3>
        <p className="text-sm text-gray-600">
          Watch Instagram's architecture evolve from 100 to 2 billion users
        </p>
      </div>

      {/* Timeline Navigation */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevStage}
          disabled={currentStage === 0}
          className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-4">
          <button
            onClick={togglePlay}
            className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
          
          <div className="text-sm text-gray-600">
            Stage {currentStage} of {stages.length - 1}
          </div>
        </div>

        <button
          onClick={nextStage}
          disabled={currentStage === stages.length - 1}
          className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <motion.div
          className="bg-blue-500 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${((currentStage + 1) / stages.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Stage Indicators */}
      <div className="flex justify-between mb-6">
        {stages.map((stage, index) => (
          <button
            key={stage.id}
            onClick={() => handleStageChange(index)}
            className={`w-8 h-8 rounded-full border-2 transition-all ${
              index === currentStage
                ? 'border-blue-500 bg-blue-500 text-white'
                : index < currentStage
                ? 'border-green-500 bg-green-500 text-white'
                : 'border-gray-300 bg-white text-gray-500'
            }`}
          >
            <span className="text-xs font-medium">{index}</span>
          </button>
        ))}
      </div>

      {/* Current Stage Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStage}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className={`${currentStageData.color} rounded-lg p-6`}
        >
          <div className="text-center mb-4">
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {currentStageData.users} Users
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              {currentStageData.title}
            </h4>
            <p className="text-gray-700">{currentStageData.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">{currentStageData.cost}</div>
              <div className="text-sm text-gray-600">Monthly Cost</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">{currentStageData.latency}</div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">{currentStageData.technologies.length}</div>
              <div className="text-sm text-gray-600">Technologies</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-medium text-gray-800 mb-2">Technologies</h5>
              <div className="flex flex-wrap gap-2">
                {currentStageData.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-white bg-opacity-50 rounded text-xs font-medium text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="font-medium text-gray-800 mb-2">Key Features</h5>
              <ul className="space-y-1">
                {currentStageData.keyFeatures.map((feature, index) => (
                  <li key={index} className="text-sm text-gray-700 flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}