'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

interface ProductFiltersProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  showInStockOnly: boolean;
  onInStockToggle: () => void;
  onClearFilters: () => void;
}

export function ProductFilters({
  categories,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  showInStockOnly,
  onInStockToggle,
  onClearFilters,
}: ProductFiltersProps) {
  const sortOptions = [
    { value: 'name', label: 'Name A-Z' },
    { value: 'name-desc', label: 'Name Z-A' },
    { value: 'price', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'featured', label: 'Featured First' },
  ];

  const hasActiveFilters = selectedCategory || showInStockOnly || sortBy !== 'featured';

  return (
    <div className="space-y-6">
      {/* Sort By */}
      <div>
        <h3 className="text-sm font-semibold text-text-primary mb-3">Sort By</h3>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full bg-background border border-accent-purple/20 rounded-md px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-purple focus:border-transparent"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-sm font-semibold text-text-primary mb-3">Categories</h3>
        <div className="space-y-2">
          <Button
            variant={selectedCategory === null ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => onCategoryChange(null)}
            className="w-full justify-start"
          >
            All Categories
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => onCategoryChange(category)}
              className="w-full justify-start capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div>
        <h3 className="text-sm font-semibold text-text-primary mb-3">Availability</h3>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showInStockOnly}
            onChange={onInStockToggle}
            className="w-4 h-4 text-accent-purple bg-background border-accent-purple/20 rounded focus:ring-accent-purple focus:ring-2"
          />
          <span className="text-sm text-text-gray">In stock only</span>
        </label>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <div className="pt-4 border-t border-accent-purple/20">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="w-full text-accent-purple hover:text-accent-purple/80"
          >
            Clear All Filters
          </Button>
        </div>
      )}

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div>
          <h4 className="text-xs font-semibold text-text-primary mb-2 uppercase tracking-wide">
            Active Filters
          </h4>
          <div className="flex flex-wrap gap-2">
            {selectedCategory && (
              <Badge variant="outline" className="text-xs">
                {selectedCategory}
                <button
                  onClick={() => onCategoryChange(null)}
                  className="ml-1 hover:text-red-400"
                >
                  ×
                </button>
              </Badge>
            )}
            {showInStockOnly && (
              <Badge variant="outline" className="text-xs">
                In Stock
                <button
                  onClick={onInStockToggle}
                  className="ml-1 hover:text-red-400"
                >
                  ×
                </button>
              </Badge>
            )}
            {sortBy !== 'featured' && (
              <Badge variant="outline" className="text-xs">
                {sortOptions.find(opt => opt.value === sortBy)?.label}
              </Badge>
            )}
          </div>
        </div>
      )}
    </div>
  );
}