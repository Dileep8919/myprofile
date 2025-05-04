export interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
}

export interface Settings {
  workDuration: number;
  breakDuration: number;
  autoStartBreak: boolean;
  theme: 'tomato' | 'mint' | 'midnight';
}

export interface TimerState {
  isRunning: boolean;
  timeLeft: number;
  isBreak: boolean;
  currentTaskId: string | null;
}