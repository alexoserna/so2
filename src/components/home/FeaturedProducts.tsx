'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { GlitchText } from '@/components/ui/GlitchText';
import { ProductCard } from '@/components/product/ProductCard';
import { getFeaturedProducts } from '@/lib/products';

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-section px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent-purple/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <GlitchText className="text-3xl md:text-4xl mb-4" trigger="hover">
            Featured Wisdom
          </GlitchText>
          <p className="text-text-gray text-lg max-w-2xl mx-auto mb-8">
            Handpicked pieces that embody the deepest insights from anime and manga
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-purple to-accent-green mx-auto rounded" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button size="lg" variant="secondary">
            <Link href="/shop">
              View All Products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}