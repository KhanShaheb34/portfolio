"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Server, Users, Activity } from "lucide-react";
import { useState, useEffect } from "react";

interface ServerState {
  id: number;
  load: number;
  color: string;
}

export default function LoadBalancerDemo() {
  const [servers, setServers] = useState<ServerState[]>([
    { id: 1, load: 0, color: "bg-green-500" },
    { id: 2, load: 0, color: "bg-green-500" },
    { id: 3, load: 0, color: "bg-green-500" },
    { id: 4, load: 0, color: "bg-green-500" },
  ]);
  const [activeRequests, setActiveRequests] = useState<Array<{ id: number; targetServer: number }>>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [algorithm, setAlgorithm] = useState<"round-robin" | "least-connections">("round-robin");
  const [currentServer, setCurrentServer] = useState(0);

  const getNextServer = () => {
    if (algorithm === "round-robin") {
      const next = currentServer;
      setCurrentServer((prev) => (prev + 1) % servers.length);
      return next;
    }
    const leastLoadedIndex = servers.reduce(
      (minIdx, server, idx) => (server.load < servers[minIdx].load ? idx : minIdx),
      0
    );
    return leastLoadedIndex;
  };

  const sendRequest = () => {
    const targetServer = getNextServer();
    const requestId = Date.now();

    setActiveRequests((prev) => [...prev, { id: requestId, targetServer }]);
    setServers((prev) =>
      prev.map((server, idx) => {
        if (idx === targetServer) {
          const newLoad = server.load + 20;
          return {
            ...server,
            load: newLoad,
            color: newLoad > 80 ? "bg-red-500" : newLoad > 50 ? "bg-yellow-500" : "bg-green-500",
          };
        }
        return server;
      })
    );

    setTimeout(() => {
      setActiveRequests((prev) => prev.filter((req) => req.id !== requestId));
      setServers((prev) =>
        prev.map((server, idx) => {
          if (idx === targetServer) {
            const newLoad = Math.max(0, server.load - 20);
            return {
              ...server,
              load: newLoad,
              color:
                newLoad > 80 ? "bg-red-500" : newLoad > 50 ? "bg-yellow-500" : "bg-green-500",
            };
          }
          return server;
        })
      );
    }, 1000);
  };

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      sendRequest();
    }, 500);

    return () => clearInterval(interval);
  }, [isRunning, algorithm, currentServer, servers]);

  return (
    <div className="my-8 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
        Load Balancer Simulation
      </h3>

      <div className="mb-6 flex flex-wrap gap-4 items-center">
        <button
          type="button"
          onClick={() => setIsRunning(!isRunning)}
          className={`px-4 py-2 rounded-lg font-semibold ${
            isRunning
              ? "bg-red-600 hover:bg-red-700 text-white"
              : "bg-green-600 hover:bg-green-700 text-white"
          }`}
        >
          {isRunning ? "Stop" : "Start"} Simulation
        </button>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setAlgorithm("round-robin")}
            className={`px-4 py-2 rounded-lg font-semibold ${
              algorithm === "round-robin"
                ? "bg-purple-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            Round Robin
          </button>
          <button
            type="button"
            onClick={() => setAlgorithm("least-connections")}
            className={`px-4 py-2 rounded-lg font-semibold ${
              algorithm === "least-connections"
                ? "bg-purple-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            Least Connections
          </button>
        </div>

        <button
          type="button"
          onClick={sendRequest}
          className="px-4 py-2 rounded-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white"
        >
          Send Request
        </button>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col items-center gap-4">
          <div className="bg-purple-100 dark:bg-purple-900/20 rounded-lg p-4 flex items-center gap-3">
            <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            <span className="font-semibold text-gray-900 dark:text-white">
              10,000 Users
            </span>
          </div>

          <div className="w-0.5 h-8 bg-gray-400 dark:bg-gray-500" />

          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-4 text-white font-semibold">
            <Activity className="w-6 h-6 mx-auto mb-2" />
            Load Balancer
            <div className="text-xs opacity-90 mt-1">
              {algorithm === "round-robin" ? "Round Robin" : "Least Connections"}
            </div>
          </div>

          <div className="relative w-full h-32">
            <AnimatePresence>
              {activeRequests.map((request) => (
                <motion.div
                  key={request.id}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{
                    y: 100,
                    x: `${(request.targetServer - 1.5) * 120}px`,
                    opacity: 1,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute top-0 left-1/2 w-3 h-3 bg-blue-500 rounded-full"
                />
              ))}
            </AnimatePresence>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {servers.map((server) => (
              <div
                key={server.id}
                className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-center mb-3">
                  <div className={`w-12 h-12 ${server.color} rounded-lg flex items-center justify-center`}>
                    <Server className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-sm text-gray-900 dark:text-white">
                    Server {server.id}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Load: {server.load}%
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                    <motion.div
                      className={`h-2 rounded-full ${server.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${server.load}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm text-gray-600 dark:text-gray-400">
        <p>
          <strong>Round Robin:</strong> Distributes requests evenly across all servers (Server 1 → 2 → 3 → 4 → repeat)
        </p>
        <p className="mt-2">
          <strong>Least Connections:</strong> Sends requests to the server with the lowest current load
        </p>
      </div>
    </div>
  );
}
