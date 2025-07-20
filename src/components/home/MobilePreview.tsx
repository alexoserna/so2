'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { GlitchText } from '@/components/ui/GlitchText';

export function MobilePreview() {
  return (
    <section className="py-section px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <div className="mb-16">
          <GlitchText className="text-3xl md:text-4xl mb-4" trigger="hover">
            Digital Catalog
          </GlitchText>
          <p className="text-text-gray text-lg max-w-2xl mx-auto">
            Experience our collection in a beautifully designed mobile interface
          </p>
        </div>

        {/* Mobile Device Mockup */}
        <div className="relative mx-auto max-w-sm">
          {/* Phone Frame */}
          <div className="bg-text-gray/20 rounded-[2.5rem] p-2 shadow-2xl">
            <div className="bg-background rounded-[2rem] overflow-hidden border-4 border-accent-purple/30">
              {/* Status Bar */}
              <div className="bg-background px-6 py-2 flex justify-between items-center text-xs text-text-gray">
                <span>9:41</span>
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-2 bg-accent-green rounded-sm" />
                  <span>100%</span>
                </div>
              </div>

              {/* App Content */}
              <div className="px-6 py-8 min-h-[600px] bg-gradient-to-b from-background to-accent-purple/5">
                {/* App Header */}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-accent-purple mb-2">CATALOG</h3>
                  <div className="w-12 h-1 bg-accent-purple mx-auto rounded" />
                </div>

                {/* Featured Product Cards */}
                <div className="space-y-4 mb-8">
                  <div className="bg-accent-purple/10 rounded-lg p-4 border border-accent-purple/20">
                    <div className="w-full h-32 bg-accent-purple/20 rounded mb-3" />
                    <h4 className="text-sm font-semibold text-text-primary">Power of Darkness Tee</h4>
                    <p className="text-xs text-text-gray">From $29.99</p>
                  </div>
                  
                  <div className="bg-accent-green/10 rounded-lg p-4 border border-accent-green/20">
                    <div className="w-full h-32 bg-accent-green/20 rounded mb-3" />
                    <h4 className="text-sm font-semibold text-text-primary">Chainsaw Wisdom Hoodie</h4>
                    <p className="text-xs text-text-gray">From $54.99</p>
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-accent-purple rounded-full" />
                  <div className="w-2 h-2 bg-inactive-dot rounded-full" />
                  <div className="w-2 h-2 bg-inactive-dot rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-accent-pink animate-pulse" />
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent-green/30 rounded-full animate-bounce" 
               style={{ animationDelay: '0.5s' }} />
        </div>

        {/* CTA */}
        <div className="mt-16">
          <Button size="lg" variant="primary">
            <Link href="/shop">
              Browse Full Collection
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}