'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { GlitchText } from '@/components/ui/GlitchText';
import { useComponents } from '@/hooks/useDesign';

export function HeroBanner() {
  const components = useComponents();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-texture">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent-purple/10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 border border-accent-green animate-pulse" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-accent-pink animate-bounce" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent-purple/20 rotate-45 animate-spin" 
             style={{ animationDuration: '10s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Japanese Subtitle */}
        <div className="mb-6">
          <span className="text-accent-green text-sm md:text-base font-mono opacity-80 tracking-widest">
            先輩の言葉 • SENPAI NO KOTOBA
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-hero font-black uppercase tracking-wider mb-8">
          <GlitchText trigger="always" intensity="high">
            Sayings of Senpai
          </GlitchText>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-text-gray mb-8 font-mono leading-relaxed max-w-3xl mx-auto">
          Discover the profound wisdom hidden in anime. From life-changing philosophy 
          to everyday motivation, wear the words that shaped generations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" variant="primary" className="min-w-48">
            <Link href="/shop">
              Explore Collection
            </Link>
          </Button>
          <Button size="lg" variant="ghost" className="min-w-48">
            <Link href="/about">
              Our Philosophy
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 text-center opacity-80">
          <div>
            <div className="text-2xl font-bold text-accent-purple">100+</div>
            <div className="text-sm text-text-gray uppercase tracking-wide">Anime Series</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-accent-green">500+</div>
            <div className="text-sm text-text-gray uppercase tracking-wide">Wise Sayings</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-accent-pink">∞</div>
            <div className="text-sm text-text-gray uppercase tracking-wide">Inspiration</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent-purple rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent-purple rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}