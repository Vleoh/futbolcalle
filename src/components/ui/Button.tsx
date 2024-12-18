import React from 'react';
import { cn } from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md', 
  ...props 
}: ButtonProps) {
  const baseStyles = "rounded-full font-semibold transition-colors";
  
  const variants = {
    primary: "bg-green-500 hover:bg-green-600 text-white",
    secondary: "bg-white/10 hover:bg-white/20 text-white",
    ghost: "hover:bg-white/10 text-white"
  };
  
  const sizes = {
    sm: "px-4 py-2",
    md: "px-6 py-2",
    lg: "px-8 py-3"
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}