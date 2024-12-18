import React from 'react';
import { cn } from '@/utils/cn';
import { type PlayerStats as Stats } from './types';

interface PlayerStatsProps {
  stats: Stats;
  className?: string;
}

export function PlayerStats({ stats = {}, className }: PlayerStatsProps) {
  return (
    <div className={cn("grid grid-cols-2 gap-2", className)}>
      {stats && Object.entries(stats).map(([key, value]) => (
        <div key={key} className="bg-gray-800 rounded-lg p-2">
          <div className="text-xs text-gray-400 uppercase">{key}</div>
          <div className="text-lg font-bold text-white">{value}</div>
        </div>
      ))}
    </div>
  );
}