"use client";

import { motion } from "framer-motion";
import * as SimpleIcons from "simple-icons";
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
  aws: { path: (SimpleIcons as any).siAmazonwebservices?.path || "", hex: (SimpleIcons as any).siAmazonwebservices?.hex || "FF9900" },
  postgresql: { path: (SimpleIcons as any).siPostgresql?.path || "", hex: (SimpleIcons as any).siPostgresql?.hex || "4169E1" },
  redis: { path: (SimpleIcons as any).siRedis?.path || "", hex: (SimpleIcons as any).siRedis?.hex || "DC382D" },
  kafka: { path: (SimpleIcons as any).siApachekafka?.path || "", hex: (SimpleIcons as any).siApachekafka?.hex || "231F20" },
  kubernetes: { path: (SimpleIcons as any).siKubernetes?.path || "", hex: (SimpleIcons as any).siKubernetes?.hex || "326CE5" },
  nginx: { path: (SimpleIcons as any).siNginx?.path || "", hex: (SimpleIcons as any).siNginx?.hex || "009639" },
  react: { path: (SimpleIcons as any).siReact?.path || "", hex: (SimpleIcons as any).siReact?.hex || "61DAFB" },
  python: { path: (SimpleIcons as any).siPython?.path || "", hex: (SimpleIcons as any).siPython?.hex || "3776AB" },
  nodejs: { path: (SimpleIcons as any).siNodedotjs?.path || "", hex: (SimpleIcons as any).siNodedotjs?.hex || "339933" },
  elasticsearch: { path: (SimpleIcons as any).siElasticsearch?.path || "", hex: (SimpleIcons as any).siElasticsearch?.hex || "005571" },
  prometheus: { path: (SimpleIcons as any).siPrometheus?.path || "", hex: (SimpleIcons as any).siPrometheus?.hex || "E6522C" },
  grafana: { path: (SimpleIcons as any).siGrafana?.path || "", hex: (SimpleIcons as any).siGrafana?.hex || "F46800" },
  docker: { path: (SimpleIcons as any).siDocker?.path || "", hex: (SimpleIcons as any).siDocker?.hex || "2496ED" },
  terraform: { path: (SimpleIcons as any).siTerraform?.path || "", hex: (SimpleIcons as any).siTerraform?.hex || "7B42BC" },
  cloudflare: { path: (SimpleIcons as any).siCloudflare?.path || "", hex: (SimpleIcons as any).siCloudflare?.hex || "F38020" },
  gcp: { path: (SimpleIcons as any).siGooglecloud?.path || "", hex: (SimpleIcons as any).siGooglecloud?.hex || "4285F4" },
  mongodb: { path: (SimpleIcons as any).siMongodb?.path || "", hex: (SimpleIcons as any).siMongodb?.hex || "47A248" },
  cassandra: { path: (SimpleIcons as any).siApachecassandra?.path || "", hex: (SimpleIcons as any).siApachecassandra?.hex || "1287B1" },
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
