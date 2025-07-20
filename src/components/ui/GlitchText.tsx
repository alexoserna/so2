'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface GlitchTextProps {
  children: string;
  className?: string;
  intensity?: 'low' | 'medium' | 'high' | 'always';
  trigger?: 'hover' | 'always' | 'none';
}

export function GlitchText({ 
  children, 
  className, 
  intensity = 'medium',
  trigger = 'hover' 
}: GlitchTextProps) {
  const baseStyles = 'relative inline-block font-condensed font-black uppercase tracking-wider';
  
  const intensityStyles = {
    low: 'animate-pulse',
    medium: 'hover:animate-glitch',
    high: 'animate-glitch',
    always: 'animate-glitch',
  };

  const triggerStyles = {
    hover: 'hover:animate-glitch',
    always: 'animate-glitch',
    none: '',
  };

  return (
    <span
      className={cn(
        baseStyles,
        intensity === 'always' ? intensityStyles.always : '',
        trigger !== 'none' ? triggerStyles[trigger] : '',
        className
      )}
      data-text={children}
    >
      <span className="relative z-10 text-accent-purple">
        {children}
      </span>
      <span 
        className="absolute top-0 left-0 w-full h-full text-accent-green opacity-75 animate-pulse"
        style={{ 
          clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
          animationDelay: '0.1s',
          transform: 'translateX(-2px)',
        }}
        aria-hidden="true"
      >
        {children}
      </span>
      <span 
        className="absolute top-0 left-0 w-full h-full text-accent-pink opacity-75 animate-pulse"
        style={{ 
          clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
          animationDelay: '0.2s',
          transform: 'translateX(2px)',
        }}
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  );
}