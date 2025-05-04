import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';
import { useStore } from '../store';

export function Settings() {
  const { settings, updateSettings } = useStore();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <SettingsIcon className="text-gray-600 dark:text-gray-300" size={20} />
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Settings</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Work Duration (minutes)
          </label>
          <input
            type="number"
            value={settings.workDuration}
            onChange={(e) => updateSettings({ workDuration: Number(e.target.value) })}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Break Duration (minutes)
          </label>
          <input
            type="number"
            value={settings.breakDuration}
            onChange={(e) => updateSettings({ breakDuration: Number(e.target.value) })}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="autoStartBreak"
            checked={settings.autoStartBreak}
            onChange={(e) => updateSettings({ autoStartBreak: e.target.checked })}
            className="rounded text-red-500 focus:ring-red-500 dark:bg-gray-700"
          />
          <label
            htmlFor="autoStartBreak"
            className="ml-2 text-sm text-gray-700 dark:text-gray-300"
          >
            Auto-start breaks
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Theme
          </label>
          <select
            value={settings.theme}
            onChange={(e) => updateSettings({ theme: e.target.value as any })}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white"
          >
            <option value="tomato">Tomato Red</option>
            <option value="mint">Mint Green</option>
            <option value="midnight">Midnight Dark</option>
          </select>
        </div>
      </div>
    </div>
  );
}