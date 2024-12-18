export type PlayerRarity = 'common' | 'rare' | 'epic' | 'legendary';
export type PlayerPosition = 'DEL' | 'MED' | 'DEF' | 'POR';

export interface PlayerStats {
  velocidad: number;
  tiro: number;
  pase: number;
  regate: number;
}

export interface Player {
  id: number;
  name: string;
  position: PlayerPosition;
  image: string;
  rarity: PlayerRarity;
  rating: number;
  stats: PlayerStats;
  achievements: number;
  level: number;
}