import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type Player } from '../types';
import { PlayerCard } from '../PlayerCard';

interface CardRevealProps {
  player: Player;
  onClose: () => void;
}

export function CardReveal({ player, onClose }: CardRevealProps) {
  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
          className="relative"
        >
          <div className="absolute inset-0 animate-pulse-light" />
          <PlayerCard player={player} />
          
          <motion.button
            className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 
                     px-6 py-2 bg-white text-gray-900 rounded-full font-semibold
                     hover:bg-gray-100 transition-colors"
            onClick={onClose}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Continuar
          </motion.button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}