import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Task, Settings, TimerState } from '../types';

interface Store {
  tasks: Task[];
  settings: Settings;
  timer: TimerState;
  addTask: (title: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  updateSettings: (settings: Partial<Settings>) => void;
  startTimer: (taskId: string) => void;
  pauseTimer: () => void;
  resetTimer: () => void;
  updateTimer: () => void;
}

export const useStore = create<Store>()(
  persist(
    (set) => ({
      tasks: [],
      settings: {
        workDuration: 25,
        breakDuration: 5,
        autoStartBreak: true,
        theme: 'tomato',
      },
      timer: {
        isRunning: false,
        timeLeft: 25 * 60,
        isBreak: false,
        currentTaskId: null,
      },
      addTask: (title) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              id: crypto.randomUUID(),
              title,
              completed: false,
              createdAt: Date.now(),
            },
          ],
        })),
      toggleTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        })),
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),
      startTimer: (taskId) =>
        set((state) => ({
          timer: {
            ...state.timer,
            isRunning: true,
            currentTaskId: taskId,
            timeLeft: state.timer.isBreak
              ? state.settings.breakDuration * 60
              : state.settings.workDuration * 60,
          },
        })),
      pauseTimer: () =>
        set((state) => ({
          timer: { ...state.timer, isRunning: false },
        })),
      resetTimer: () =>
        set((state) => ({
          timer: {
            ...state.timer,
            isRunning: false,
            timeLeft: state.settings.workDuration * 60,
            isBreak: false,
            currentTaskId: null,
          },
        })),
      updateTimer: () =>
        set((state) => {
          if (!state.timer.isRunning) return state;
          
          const newTimeLeft = state.timer.timeLeft - 1;
          if (newTimeLeft <= 0) {
            return {
              timer: {
                ...state.timer,
                isRunning: state.settings.autoStartBreak,
                timeLeft: state.timer.isBreak
                  ? state.settings.workDuration * 60
                  : state.settings.breakDuration * 60,
                isBreak: !state.timer.isBreak,
              },
            };
          }
          
          return {
            timer: { ...state.timer, timeLeft: newTimeLeft },
          };
        }),
    }),
    {
      name: 'pomodoro-store',
    }
  )
);