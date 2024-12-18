import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Share2, Trophy } from 'lucide-react';
import { type Player } from '../types';
import { PlayerStats } from '../PlayerStats';
import { Badge } from '../../ui/Badge';

interface CardModalProps {
  player: Player;
  isOpen: boolean;
  onClose: () => void;
}

export function CardModal({ player, isOpen, onClose }: CardModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="bg-gray-900 rounded-xl max-w-2xl w-full overflow-hidden"
        >
          <div className="relative h-64">
            <img
              src={player.image}
              alt={player.name}
              className="w-full h-full object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-black/50 rounded-full
                       hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{player.name}</h2>
                <div className="flex space-x-2">
                  <Badge variant="info">{player.position}</Badge>
                  <Badge 
                    variant={
                      player.rarity === 'legendary' ? 'warning' :
                      player.rarity === 'epic' ? 'success' : 'info'
                    }
                  >
                    {player.rarity ? player.rarity.toUpperCase() : 'UNKNOWN'}
                  </Badge>
                </div>
              </div>
              <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                <Share2 className="w-5 h-5 text-white" />
              </button>
            </div>

            <PlayerStats stats={player.stats} className="mb-6" />

            <div className="border-t border-gray-800 pt-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Trophy className="w-5 h-5 text-yellow-400 mr-2" />
                Logros Desbloqueados
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[...Array(player.achievements)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-gray-800 p-3 rounded-lg text-sm text-gray-300"
                  >
                    Logro #{i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}