import React, { useState } from 'react';
import { Star, Trophy, Activity } from 'lucide-react';
import { cn } from '@/utils/cn';
import { Badge } from '../ui/Badge';
import { PlayerStats } from './PlayerStats';
import { CardModal } from './CardDetails/CardModal';
import { type Player } from './types';

interface PlayerCardProps {
  player: Player;
  className?: string;
}

export function PlayerCard({ player, className }: PlayerCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const rarityColors = {
    common: 'from-gray-500 to-gray-700',
    rare: 'from-blue-500 to-blue-700',
    epic: 'from-purple-500 to-purple-700',
    legendary: 'from-yellow-400 to-yellow-600'
  };

  return (
    <>
      <div 
        className={cn(
          'relative group perspective-1000 cursor-pointer',
          'transform transition-all duration-300 hover:scale-105',
          className
        )}
        onClick={() => setIsModalOpen(true)}
      >
        <div className={cn(
          'relative w-72 h-96 rounded-xl overflow-hidden bg-gradient-to-br',
          rarityColors[player.rarity]
        )}>
          <div className="absolute inset-0.5 bg-gray-900 rounded-xl overflow-hidden">
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-white">{player.name}</h3>
                <Badge variant="info" className="bg-opacity-80">
                  {player.position}
                </Badge>
              </div>
              
              <div className="mt-4 relative h-48">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-2 right-2 flex items-center space-x-1">
                  {[...Array(player.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <PlayerStats stats={player.stats} className="mt-4" />
              
              <div className="mt-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  <span className="text-white">{player.achievements} logros</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Activity className="w-5 h-5 text-green-400" />
                  <span className="text-white">Nivel {player.level}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CardModal 
        player={player}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}