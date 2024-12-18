import React from 'react';
import { cn } from '@/utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'warning' | 'info';
  className?: string;
}

export function Badge({ 
  children, 
  variant = 'info', 
  className 
}: BadgeProps) {
  const variants = {
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-black',
    info: 'bg-blue-500 text-white'
  };

  return (
    <span className={cn(
      'px-3 py-1 rounded-full text-sm font-medium',
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}