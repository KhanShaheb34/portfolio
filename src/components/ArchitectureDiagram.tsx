'use client';

import { ReactFlow, Background, Controls, Node, Edge, useNodesState, useEdgesState } from 'reactflow';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  Server, 
  Database, 
  Cloud, 
  Globe, 
  Users, 
  Zap, 
  Shield,
  MessageSquare,
  Search,
  BarChart3
} from 'lucide-react';

interface ArchitectureDiagramProps {
  stage: number;
  title?: string;
  className?: string;
}

const getStageData = (stage: number) => {
  switch (stage) {
    case 0:
      return {
        nodes: [
          {
            id: 'users',
            type: 'input',
            position: { x: 250, y: 50 },
            data: { label: '100 Users', icon: Users, color: 'bg-blue-100' }
          },
          {
            id: 'server',
            position: { x: 200, y: 200 },
            data: { 
              label: 'Instagram Server\n(All-in-One)', 
              icon: Server, 
              color: 'bg-green-100',
              details: ['Application Logic', 'PostgreSQL', 'Image Storage']
            }
          }
        ],
        edges: [
          { id: 'users-server', source: 'users', target: 'server', animated: true }
        ]
      };
    
    case 1:
      return {
        nodes: [
          {
            id: 'users',
            type: 'input',
            position: { x: 250, y: 50 },
            data: { label: '10K Users', icon: Users, color: 'bg-blue-100' }
          },
          {
            id: 'lb',
            position: { x: 250, y: 150 },
            data: { label: 'Load Balancer\n(Round Robin)', icon: Zap, color: 'bg-yellow-100' }
          },
          {
            id: 'server1',
            position: { x: 100, y: 300 },
            data: { label: 'Server 1', icon: Server, color: 'bg-green-100' }
          },
          {
            id: 'server2',
            position: { x: 200, y: 300 },
            data: { label: 'Server 2', icon: Server, color: 'bg-green-100' }
          },
          {
            id: 'server3',
            position: { x: 300, y: 300 },
            data: { label: 'Server 3', icon: Server, color: 'bg-green-100' }
          },
          {
            id: 'server4',
            position: { x: 400, y: 300 },
            data: { label: 'Server 4', icon: Server, color: 'bg-green-100' }
          },
          {
            id: 'db',
            position: { x: 250, y: 450 },
            data: { label: 'PostgreSQL\n(Shared)', icon: Database, color: 'bg-purple-100' }
          }
        ],
        edges: [
          { id: 'users-lb', source: 'users', target: 'lb', animated: true },
          { id: 'lb-s1', source: 'lb', target: 'server1', animated: true },
          { id: 'lb-s2', source: 'lb', target: 'server2', animated: true },
          { id: 'lb-s3', source: 'lb', target: 'server3', animated: true },
          { id: 'lb-s4', source: 'lb', target: 'server4', animated: true },
          { id: 's1-db', source: 'server1', target: 'db', animated: false },
          { id: 's2-db', source: 'server2', target: 'db', animated: false },
          { id: 's3-db', source: 'server3', target: 'db', animated: false },
          { id: 's4-db', source: 'server4', target: 'db', animated: false }
        ]
      };

    case 2:
      return {
        nodes: [
          {
            id: 'users',
            type: 'input',
            position: { x: 250, y: 50 },
            data: { label: '100K Users\nWorldwide', icon: Users, color: 'bg-blue-100' }
          },
          {
            id: 'cdn',
            position: { x: 250, y: 150 },
            data: { 
              label: 'CDN (Global Edge)\n200+ Locations', 
              icon: Cloud, 
              color: 'bg-cyan-100',
              details: ['Singapore', 'London', 'Tokyo', 'São Paulo', 'Mumbai', 'New York']
            }
          },
          {
            id: 'lb',
            position: { x: 250, y: 300 },
            data: { label: 'Load Balancer', icon: Zap, color: 'bg-yellow-100' }
          },
          {
            id: 'servers',
            position: { x: 250, y: 400 },
            data: { label: 'App Servers', icon: Server, color: 'bg-green-100' }
          },
          {
            id: 's3',
            position: { x: 100, y: 500 },
            data: { label: 'Amazon S3\n(Image Storage)', icon: Database, color: 'bg-orange-100' }
          },
          {
            id: 'db',
            position: { x: 400, y: 500 },
            data: { label: 'PostgreSQL\n(Metadata only)', icon: Database, color: 'bg-purple-100' }
          }
        ],
        edges: [
          { id: 'users-cdn', source: 'users', target: 'cdn', animated: true },
          { id: 'cdn-lb', source: 'cdn', target: 'lb', animated: false, style: { strokeDasharray: '5,5' } },
          { id: 'lb-servers', source: 'lb', target: 'servers', animated: true },
          { id: 'servers-s3', source: 'servers', target: 's3', animated: false },
          { id: 'servers-db', source: 'servers', target: 'db', animated: false }
        ]
      };

    case 3:
      return {
        nodes: [
          {
            id: 'users',
            type: 'input',
            position: { x: 250, y: 50 },
            data: { label: '500K Users', icon: Users, color: 'bg-blue-100' }
          },
          {
            id: 'lb',
            position: { x: 250, y: 150 },
            data: { label: 'Load Balancer', icon: Zap, color: 'bg-yellow-100' }
          },
          {
            id: 'servers',
            position: { x: 250, y: 250 },
            data: { label: 'App Servers', icon: Server, color: 'bg-green-100' }
          },
          {
            id: 'redis',
            position: { x: 100, y: 350 },
            data: { 
              label: 'Redis Cache\n(In-Memory)', 
              icon: Database, 
              color: 'bg-red-100',
              details: ['85% of reads served from here']
            }
          },
          {
            id: 'primary',
            position: { x: 200, y: 450 },
            data: { label: 'PRIMARY DB\n(Writes Only)', icon: Database, color: 'bg-purple-100' }
          },
          {
            id: 'replica1',
            position: { x: 300, y: 450 },
            data: { label: 'Read\nReplica 1', icon: Database, color: 'bg-blue-100' }
          },
          {
            id: 'replica2',
            position: { x: 400, y: 450 },
            data: { label: 'Read\nReplica 2', icon: Database, color: 'bg-blue-100' }
          },
          {
            id: 'replica3',
            position: { x: 500, y: 450 },
            data: { label: 'Read\nReplica 3', icon: Database, color: 'bg-blue-100' }
          }
        ],
        edges: [
          { id: 'users-lb', source: 'users', target: 'lb', animated: true },
          { id: 'lb-servers', source: 'lb', target: 'servers', animated: true },
          { id: 'servers-redis', source: 'servers', target: 'redis', animated: true },
          { id: 'redis-primary', source: 'redis', target: 'primary', animated: false, style: { strokeDasharray: '5,5' } },
          { id: 'primary-r1', source: 'primary', target: 'replica1', animated: false },
          { id: 'primary-r2', source: 'primary', target: 'replica2', animated: false },
          { id: 'primary-r3', source: 'primary', target: 'replica3', animated: false },
          { id: 'servers-r1', source: 'servers', target: 'replica1', animated: false, style: { strokeDasharray: '5,5' } },
          { id: 'servers-r2', source: 'servers', target: 'replica2', animated: false, style: { strokeDasharray: '5,5' } },
          { id: 'servers-r3', source: 'servers', target: 'replica3', animated: false, style: { strokeDasharray: '5,5' } }
        ]
      };

    case 4:
      return {
        nodes: [
          {
            id: 'users',
            type: 'input',
            position: { x: 250, y: 50 },
            data: { label: '5M Users', icon: Users, color: 'bg-blue-100' }
          },
          {
            id: 'lb',
            position: { x: 250, y: 150 },
            data: { label: 'Load Balancer', icon: Zap, color: 'bg-yellow-100' }
          },
          {
            id: 'servers',
            position: { x: 250, y: 250 },
            data: { label: 'App Servers\n(Shard Router)', icon: Server, color: 'bg-green-100' }
          },
          {
            id: 'redis',
            position: { x: 100, y: 350 },
            data: { label: 'Redis\nCache', icon: Database, color: 'bg-red-100' }
          },
          {
            id: 'kafka',
            position: { x: 400, y: 350 },
            data: { label: 'Message Queue\n(Kafka)', icon: MessageSquare, color: 'bg-orange-100' }
          },
          {
            id: 'workers',
            position: { x: 400, y: 450 },
            data: { label: 'Background\nWorkers', icon: Zap, color: 'bg-yellow-100' }
          },
          {
            id: 'shard1',
            position: { x: 50, y: 550 },
            data: { label: 'Shard 1\nUsers 0-1M', icon: Database, color: 'bg-purple-100' }
          },
          {
            id: 'shard2',
            position: { x: 150, y: 550 },
            data: { label: 'Shard 2\nUsers 1-2M', icon: Database, color: 'bg-purple-100' }
          },
          {
            id: 'shard3',
            position: { x: 250, y: 550 },
            data: { label: 'Shard 3\nUsers 2-3M', icon: Database, color: 'bg-purple-100' }
          },
          {
            id: 'shard4',
            position: { x: 350, y: 550 },
            data: { label: 'Shard 4\nUsers 3-4M', icon: Database, color: 'bg-purple-100' }
          },
          {
            id: 'shard5',
            position: { x: 450, y: 550 },
            data: { label: 'Shard 5\nUsers 4-5M', icon: Database, color: 'bg-purple-100' }
          }
        ],
        edges: [
          { id: 'users-lb', source: 'users', target: 'lb', animated: true },
          { id: 'lb-servers', source: 'lb', target: 'servers', animated: true },
          { id: 'servers-redis', source: 'servers', target: 'redis', animated: true },
          { id: 'servers-kafka', source: 'servers', target: 'kafka', animated: true },
          { id: 'kafka-workers', source: 'kafka', target: 'workers', animated: true },
          { id: 'servers-s1', source: 'servers', target: 'shard1', animated: false },
          { id: 'servers-s2', source: 'servers', target: 'shard2', animated: false },
          { id: 'servers-s3', source: 'servers', target: 'shard3', animated: false },
          { id: 'servers-s4', source: 'servers', target: 'shard4', animated: false },
          { id: 'servers-s5', source: 'servers', target: 'shard5', animated: false }
        ]
      };

    case 5:
      return {
        nodes: [
          {
            id: 'users',
            type: 'input',
            position: { x: 250, y: 50 },
            data: { label: '50M Users', icon: Users, color: 'bg-blue-100' }
          },
          {
            id: 'gateway',
            position: { x: 250, y: 150 },
            data: { label: 'API Gateway\n(Kong)', icon: Shield, color: 'bg-indigo-100' }
          },
          {
            id: 'feed',
            position: { x: 100, y: 300 },
            data: { label: 'Feed\nService', icon: Server, color: 'bg-green-100' }
          },
          {
            id: 'post',
            position: { x: 200, y: 300 },
            data: { label: 'Post\nService', icon: Server, color: 'bg-green-100' }
          },
          {
            id: 'user',
            position: { x: 300, y: 300 },
            data: { label: 'User\nService', icon: Server, color: 'bg-green-100' }
          },
          {
            id: 'notification',
            position: { x: 400, y: 300 },
            data: { label: 'Notification\nService', icon: Server, color: 'bg-green-100' }
          },
          {
            id: 'redis',
            position: { x: 250, y: 400 },
            data: { label: 'Redis Feed Cache\nPre-computed Feeds', icon: Database, color: 'bg-red-100' }
          },
          {
            id: 'kafka',
            position: { x: 250, y: 500 },
            data: { label: 'Kafka Queue', icon: MessageSquare, color: 'bg-orange-100' }
          },
          {
            id: 'shards',
            position: { x: 250, y: 600 },
            data: { label: 'Database Shards', icon: Database, color: 'bg-purple-100' }
          }
        ],
        edges: [
          { id: 'users-gateway', source: 'users', target: 'gateway', animated: true },
          { id: 'gateway-feed', source: 'gateway', target: 'feed', animated: true },
          { id: 'gateway-post', source: 'gateway', target: 'post', animated: true },
          { id: 'gateway-user', source: 'gateway', target: 'user', animated: true },
          { id: 'gateway-notification', source: 'gateway', target: 'notification', animated: true },
          { id: 'feed-redis', source: 'feed', target: 'redis', animated: true },
          { id: 'post-kafka', source: 'post', target: 'kafka', animated: true },
          { id: 'kafka-shards', source: 'kafka', target: 'shards', animated: false },
          { id: 'redis-shards', source: 'redis', target: 'shards', animated: false, style: { strokeDasharray: '5,5' } }
        ]
      };

    case 6:
      return {
        nodes: [
          {
            id: 'users',
            type: 'input',
            position: { x: 250, y: 50 },
            data: { label: '500M Users\nWorldwide', icon: Users, color: 'bg-blue-100' }
          },
          {
            id: 'cdn',
            position: { x: 250, y: 150 },
            data: { 
              label: 'Global CDN\n200+ Edge Locations', 
              icon: Cloud, 
              color: 'bg-cyan-100'
            }
          },
          {
            id: 'dns',
            position: { x: 250, y: 250 },
            data: { label: 'DNS Routing\n(Route 53)', icon: Globe, color: 'bg-indigo-100' }
          },
          {
            id: 'us',
            position: { x: 100, y: 400 },
            data: { label: 'US EAST\nRegion\n180M Users', icon: Server, color: 'bg-green-100' }
          },
          {
            id: 'eu',
            position: { x: 250, y: 400 },
            data: { label: 'EU WEST\nRegion\n150M Users', icon: Server, color: 'bg-green-100' }
          },
          {
            id: 'ap',
            position: { x: 400, y: 400 },
            data: { label: 'AP SOUTHEAST\nRegion\n170M Users', icon: Server, color: 'bg-green-100' }
          }
        ],
        edges: [
          { id: 'users-cdn', source: 'users', target: 'cdn', animated: true },
          { id: 'cdn-dns', source: 'cdn', target: 'dns', animated: true },
          { id: 'dns-us', source: 'dns', target: 'us', animated: true },
          { id: 'dns-eu', source: 'dns', target: 'eu', animated: true },
          { id: 'dns-ap', source: 'dns', target: 'ap', animated: true }
        ]
      };

    case 7:
      return {
        nodes: [
          {
            id: 'users',
            type: 'input',
            position: { x: 250, y: 50 },
            data: { label: '2B Users', icon: Users, color: 'bg-blue-100' }
          },
          {
            id: 'edge',
            position: { x: 250, y: 120 },
            data: { 
              label: 'EDGE LAYER\nCloudFront CDN + Edge Computing', 
              icon: Cloud, 
              color: 'bg-cyan-100'
            }
          },
          {
            id: 'dns',
            position: { x: 250, y: 200 },
            data: { 
              label: 'GLOBAL DNS\nRoute 53 - Geo-based routing', 
              icon: Globe, 
              color: 'bg-indigo-100'
            }
          },
          {
            id: 'gateway',
            position: { x: 250, y: 280 },
            data: { 
              label: 'API GATEWAY LAYER\nKong / Apigee', 
              icon: Shield, 
              color: 'bg-purple-100'
            }
          },
          {
            id: 'microservices',
            position: { x: 250, y: 360 },
            data: { 
              label: 'MICROSERVICES (20+ Services)\nFeed | Post | User | Notification', 
              icon: Server, 
              color: 'bg-green-100'
            }
          },
          {
            id: 'cache',
            position: { x: 100, y: 450 },
            data: { 
              label: 'CACHING LAYER\nRedis Cluster (100+ nodes)', 
              icon: Database, 
              color: 'bg-red-100'
            }
          },
          {
            id: 'queue',
            position: { x: 250, y: 450 },
            data: { 
              label: 'MESSAGE QUEUE LAYER\nApache Kafka (100+ brokers)', 
              icon: MessageSquare, 
              color: 'bg-orange-100'
            }
          },
          {
            id: 'data',
            position: { x: 400, y: 450 },
            data: { 
              label: 'DATA LAYER\nCassandra + PostgreSQL + S3', 
              icon: Database, 
              color: 'bg-purple-100'
            }
          },
          {
            id: 'monitoring',
            position: { x: 250, y: 540 },
            data: { 
              label: 'OBSERVABILITY LAYER\nPrometheus + Grafana + ELK', 
              icon: BarChart3, 
              color: 'bg-gray-100'
            }
          }
        ],
        edges: [
          { id: 'users-edge', source: 'users', target: 'edge', animated: true },
          { id: 'edge-dns', source: 'edge', target: 'dns', animated: true },
          { id: 'dns-gateway', source: 'dns', target: 'gateway', animated: true },
          { id: 'gateway-microservices', source: 'gateway', target: 'microservices', animated: true },
          { id: 'microservices-cache', source: 'microservices', target: 'cache', animated: true },
          { id: 'microservices-queue', source: 'microservices', target: 'queue', animated: true },
          { id: 'microservices-data', source: 'microservices', target: 'data', animated: true },
          { id: 'cache-data', source: 'cache', target: 'data', animated: false, style: { strokeDasharray: '5,5' } },
          { id: 'queue-data', source: 'queue', target: 'data', animated: false, style: { strokeDasharray: '5,5' } },
          { id: 'data-monitoring', source: 'data', target: 'monitoring', animated: false, style: { strokeDasharray: '5,5' } }
        ]
      };

    default:
      return { nodes: [], edges: [] };
  }
};

const CustomNode = ({ data }: { data: any }) => {
  const IconComponent = data.icon;
  
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`${data.color} p-4 rounded-lg border-2 border-gray-200 min-w-[120px] text-center`}
    >
      <div className="flex flex-col items-center space-y-2">
        <IconComponent className="w-6 h-6 text-gray-700" />
        <div className="text-sm font-medium text-gray-800 whitespace-pre-line">
          {data.label}
        </div>
        {data.details && (
          <div className="text-xs text-gray-600 mt-1">
            {data.details.map((detail: string, index: number) => (
              <div key={index}>• {detail}</div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

export default function ArchitectureDiagram({ stage, title, className = '' }: ArchitectureDiagramProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    const stageData = getStageData(stage);
    const processedNodes = stageData.nodes.map(node => ({
      ...node,
      type: 'custom',
      data: {
        ...node.data,
        icon: node.data.icon
      }
    }));
    
    setNodes(processedNodes);
    setEdges(stageData.edges);
  }, [stage, setNodes, setEdges]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`bg-white rounded-xl border border-gray-200 p-6 ${className}`}
    >
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      )}
      <div className="h-96 w-full">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </motion.div>
  );
}