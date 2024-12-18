import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/utils/cn';

interface NavLinkProps {
  icon: LucideIcon;
  text: string;
  className?: string;
}

export function NavLink({ icon: Icon, text, className }: NavLinkProps) {
  return (
    <a 
      href="#" 
      className={cn(
        "flex items-center space-x-1 hover:text-green-400 transition-colors",
        className
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{text}</span>
    </a>
  );
}