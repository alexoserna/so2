import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const baseStyles = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';
  
  const variants = {
    default: 'bg-accent-purple text-background hover:bg-accent-purple/80',
    secondary: 'bg-accent-green text-background hover:bg-accent-green/80',
    destructive: 'bg-red-600 text-white hover:bg-red-700',
    outline: 'border border-accent-purple text-accent-purple hover:bg-accent-purple hover:text-background',
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)}>
      {children}
    </div>
  );
}