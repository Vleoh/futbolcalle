import React from 'react';
import { Package } from 'lucide-react';
import { cn } from '@/utils/cn';
import { Button } from '../../ui/Button';

interface CardPackProps {
  onOpen: () => void;
  className?: string;
}

export function CardPack({ onOpen, className }: CardPackProps) {
  return (
    <div className={cn(
      "relative group cursor-pointer",
      "w-72 h-96 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600",
      "rounded-xl overflow-hidden shadow-xl",
      "transform transition-all duration-300 hover:scale-105",
      className
    )}>
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Package className="w-24 h-24 text-white mb-4" />
        <Button 
          variant="primary"
          size="lg"
          onClick={onOpen}
          className="animate-pulse"
        >
          Abrir Sobre
        </Button>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
    </div>
  );
}