'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useCart } from '@/hooks/useCart';
import { Product } from '@/types';
import { formatPrice, truncateText } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCartWithFeedback, isInCart, getItemQuantity } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const result = addToCartWithFeedback(product);
    if (result.success) {
      // Could add toast notification here
      console.log(result.message);
    }
  };

  const isOnSale = product.originalPrice && product.originalPrice > product.price;
  const inCart = isInCart(product.id);
  const cartQuantity = getItemQuantity(product.id);

  return (
    <Link href={`/product/${product.slug}`}>
      <div className="group relative bg-background border border-accent-purple/20 rounded-lg overflow-hidden hover:border-accent-purple/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent-purple/10">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden bg-text-gray/5">
          <Image
            src={product.images[0] || '/images/placeholder.jpg'}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Overlay badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {!product.inStock && (
              <Badge variant="destructive">Out of Stock</Badge>
            )}
            {isOnSale && (
              <Badge variant="secondary">Sale</Badge>
            )}
            {product.featured && (
              <Badge variant="default">Featured</Badge>
            )}
          </div>

          {/* Cart indicator */}
          {inCart && (
            <div className="absolute top-3 right-3">
              <div className="bg-accent-purple text-background text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                {cartQuantity}
              </div>
            </div>
          )}

          {/* Quick add overlay */}
          <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button
              variant="primary"
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
            >
              {inCart ? 'Add More' : 'Add to Cart'}
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="mb-2">
            <h3 className="font-semibold text-text-primary group-hover:text-accent-purple transition-colors line-clamp-2">
              {product.name}
            </h3>
          </div>

          <p className="text-sm text-text-gray mb-3 line-clamp-2">
            {truncateText(product.description, 80)}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-accent-purple">
                {formatPrice(product.price)}
              </span>
              {isOnSale && (
                <span className="text-sm text-text-gray line-through">
                  {formatPrice(product.originalPrice!)}
                </span>
              )}
            </div>

            <div className="text-xs text-text-gray uppercase tracking-wide">
              {product.category}
            </div>
          </div>

          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-3">
              {product.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-accent-purple/10 text-accent-purple px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
              {product.tags.length > 2 && (
                <span className="text-xs text-text-gray">
                  +{product.tags.length - 2} more
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}