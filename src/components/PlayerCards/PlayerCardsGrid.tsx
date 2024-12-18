import React from 'react';
import { PlayerCard } from './PlayerCard';
import { type Player } from './types';

interface PlayerCardsGridProps {
  players: Player[];
}

export function PlayerCardsGrid({ players }: PlayerCardsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {players.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
}