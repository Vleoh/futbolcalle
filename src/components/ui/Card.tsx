import React from 'react';
import { cn } from '@/utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn("bg-gray-800 rounded-xl overflow-hidden", className)}>
      {children}
    </div>
  );
}

interface CardImageProps {
  src: string;
  alt: string;
  children?: React.ReactNode;
}

export function CardImage({ src, alt, children }: CardImageProps) {
  return (
    <div className="relative h-48">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
      {children}
    </div>
  );
}

export function CardContent({ children, className }: CardProps) {
  return (
    <div className={cn("p-6", className)}>
      {children}
    </div>
  );
}