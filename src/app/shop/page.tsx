'use client';

import React, { useState, useMemo } from 'react';
import { ProductGrid } from '@/components/product/ProductGrid';
import { ProductFilters } from '@/components/product/ProductFilters';
import { GlitchText } from '@/components/ui/GlitchText';
import { Button } from '@/components/ui/Button';
import { getAllProducts, getCategories } from '@/lib/products';
import { Product } from '@/types';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('featured');
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const allProducts = getAllProducts();
  const categories = getCategories();

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...allProducts];

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by stock
    if (showInStockOnly) {
      filtered = filtered.filter(product => product.inStock);
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'price':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'featured':
        default:
          // Featured first, then by name
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [allProducts, selectedCategory, sortBy, showInStockOnly]);

  const handleClearFilters = () => {
    setSelectedCategory(null);
    setSortBy('featured');
    setShowInStockOnly(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-background to-accent-purple/5 border-b border-accent-purple/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <GlitchText className="text-4xl md:text-5xl mb-4" trigger="hover">
              Shop Collection
            </GlitchText>
            <p className="text-text-gray text-lg max-w-2xl mx-auto">
              Discover wisdom-infused apparel and accessories inspired by the greatest anime moments
            </p>
            <div className="mt-6 text-sm text-text-gray">
              <span className="text-accent-purple font-semibold">{filteredAndSortedProducts.length}</span> products found
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              onClick={() => setShowFilters(!showFilters)}
              className="w-full justify-between"
            >
              <span>Filters & Sort</span>
              <svg
                className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Button>
          </div>

          {/* Filters Sidebar */}
          <div className={`lg:w-64 lg:flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-24 bg-background border border-accent-purple/20 rounded-lg p-6">
              <ProductFilters
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                sortBy={sortBy}
                onSortChange={setSortBy}
                showInStockOnly={showInStockOnly}
                onInStockToggle={() => setShowInStockOnly(!showInStockOnly)}
                onClearFilters={handleClearFilters}
              />
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <ProductGrid products={filteredAndSortedProducts} />
          </div>
        </div>
      </div>
    </div>
  );
}