import React, { useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { useStore } from '../store';

export function Timer() {
  const { timer, settings, startTimer, pauseTimer, resetTimer, updateTimer } = useStore();

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer.isRunning) {
        updateTimer();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer.isRunning, updateTimer]);

  const minutes = Math.floor(timer.timeLeft / 60);
  const seconds = timer.timeLeft % 60;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
      <div className="relative w-48 h-48 mx-auto mb-4">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-gray-200 dark:text-gray-700"
            strokeWidth="4"
            stroke="currentColor"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
          />
          <circle
            className="text-red-500"
            strokeWidth="4"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
            strokeDasharray="283"
            strokeDashoffset={283 * (1 - timer.timeLeft / (settings.workDuration * 60))}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-gray-800 dark:text-white">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </span>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => timer.isRunning ? pauseTimer() : startTimer(timer.currentTaskId || '')}
          className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
        >
          {timer.isRunning ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <button
          onClick={resetTimer}
          className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors dark:bg-gray-700 dark:text-gray-300"
        >
          <RotateCcw size={24} />
        </button>
      </div>
    </div>
  );
}