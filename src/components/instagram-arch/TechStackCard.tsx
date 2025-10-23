"use client";

import { motion } from "framer-motion";
import {
  siAmazonaws,
  siPostgresql,
  siRedis,
  siApachekafka,
  siKubernetes,
  siNginx,
  siReact,
  siPython,
  siNodedotjs,
  siElasticsearch,
  siPrometheus,
  siGrafana,
  siDocker,
  siTerraform,
  siCloudflare,
  siGooglecloud,
  siMongodb,
  siCassandra,
} from "simple-icons";
import type { ReactNode } from "react";

interface TechItem {
  name: string;
  description: string;
  icon?: string;
}

interface TechStackCardProps {
  title: string;
  items: TechItem[];
  color?: string;
  children?: ReactNode;
}

const iconMap: Record<string, { path: string; hex: string }> = {
  aws: { path: siAmazonaws.path, hex: siAmazonaws.hex },
  postgresql: { path: siPostgresql.path, hex: siPostgresql.hex },
  redis: { path: siRedis.path, hex: siRedis.hex },
  kafka: { path: siApachekafka.path, hex: siApachekafka.hex },
  kubernetes: { path: siKubernetes.path, hex: siKubernetes.hex },
  nginx: { path: siNginx.path, hex: siNginx.hex },
  react: { path: siReact.path, hex: siReact.hex },
  python: { path: siPython.path, hex: siPython.hex },
  nodejs: { path: siNodedotjs.path, hex: siNodedotjs.hex },
  elasticsearch: { path: siElasticsearch.path, hex: siElasticsearch.hex },
  prometheus: { path: siPrometheus.path, hex: siPrometheus.hex },
  grafana: { path: siGrafana.path, hex: siGrafana.hex },
  docker: { path: siDocker.path, hex: siDocker.hex },
  terraform: { path: siTerraform.path, hex: siTerraform.hex },
  cloudflare: { path: siCloudflare.path, hex: siCloudflare.hex },
  gcp: { path: siGooglecloud.path, hex: siGooglecloud.hex },
  mongodb: { path: siMongodb.path, hex: siMongodb.hex },
  cassandra: { path: siCassandra.path, hex: siCassandra.hex },
};

export default function TechStackCard({ title, items, color = "blue", children }: TechStackCardProps) {
  const colorClasses = {
    blue: "border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20",
    purple: "border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20",
    green: "border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20",
    orange: "border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20",
  };

  return (
    <div className={`my-6 rounded-lg border p-6 ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`}>
      <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">{title}</h4>
      <div className="space-y-3">
        {items.map((item, index) => {
          const iconData = item.icon ? iconMap[item.icon.toLowerCase()] : null;

          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm"
            >
              {iconData && (
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    style={{ fill: `#${iconData.hex}` }}
                  >
                    <title>{item.name}</title>
                    <path d={iconData.path} />
                  </svg>
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm text-gray-900 dark:text-white">
                  {item.name}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {item.description}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      {children}
    </div>
  );
}
