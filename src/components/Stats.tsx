import React from 'react';
import { CheckCircle2, Clock } from 'lucide-react';
import { useStore } from '../store';

export function Stats() {
  const tasks = useStore((state) => state.tasks);
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Today's Progress</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-green-500" size={20} />
            <span className="text-gray-600 dark:text-gray-300">Tasks Completed</span>
          </div>
          <span className="text-lg font-semibold text-gray-800 dark:text-white">
            {completedTasks}/{totalTasks}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="text-red-500" size={20} />
            <span className="text-gray-600 dark:text-gray-300">Focus Time</span>
          </div>
          <span className="text-lg font-semibold text-gray-800 dark:text-white">
            0h 25m
          </span>
        </div>

        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div
            className="bg-red-500 h-2.5 rounded-full"
            style={{ width: `${(completedTasks / totalTasks) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}