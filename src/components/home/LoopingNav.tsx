'use client';

import React from 'react';
import { useComponents } from '@/hooks/useDesign';

export function LoopingNav() {
  const components = useComponents();
  const text = "★ SAYINGS OF SENPAI ★ 先輩の言葉 ★ WISDOM FROM ANIME ★ ";

  return (
    <div className="w-full bg-accent-purple/10 border-y border-accent-purple/20 py-4 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <div
          className="flex items-center text-nav-loop-text text-lg font-bold tracking-widest animate-marquee"
          style={{
            animationDuration: '20s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
          }}
        >
          {/* Repeat the text multiple times for seamless loop */}
          {Array.from({ length: 10 }, (_, i) => (
            <span key={i} className="mx-8">
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}