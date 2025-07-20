'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { GlitchText } from '@/components/ui/GlitchText';
import { useCart } from '@/hooks/useCart';
import { Product } from '@/types';
import { formatPrice } from '@/lib/utils';

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCartWithFeedback, isInCart, getItemQuantity } = useCart();

  const isOnSale = product.originalPrice && product.originalPrice > product.price;
  const inCart = isInCart(product.id);
  const cartQuantity = getItemQuantity(product.id);

  const handleAddToCart = () => {
    const result = addToCartWithFeedback(product, quantity);
    if (result.success) {
      // Reset quantity after adding
      setQuantity(1);
    }
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Product Images */}
      <div className="space-y-4">
        {/* Main Image */}
        <div className="aspect-square overflow-hidden bg-text-gray/5 rounded-lg border border-accent-purple/20">
          <Image
            src={product.images[selectedImageIndex] || '/images/placeholder.jpg'}
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Thumbnail Images */}
        {product.images.length > 1 && (
          <div className="flex space-x-2 overflow-x-auto">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-colors ${
                  selectedImageIndex === index
                    ? 'border-accent-purple'
                    : 'border-accent-purple/20 hover:border-accent-purple/40'
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="text-xs uppercase">
              {product.category}
            </Badge>
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

          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            <GlitchText trigger="hover">
              {product.name}
            </GlitchText>
          </h1>

          {/* Price */}
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-3xl font-bold text-accent-purple">
              {formatPrice(product.price)}
            </span>
            {isOnSale && (
              <span className="text-xl text-text-gray line-through">
                {formatPrice(product.originalPrice!)}
              </span>
            )}
            {isOnSale && (
              <Badge variant="secondary" className="text-xs">
                Save {formatPrice(product.originalPrice! - product.price)}
              </Badge>
            )}
          </div>
        </div>

        {/* Description */}
        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-3">Description</h3>
          <p className="text-text-gray leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Tags */}
        {product.tags && product.tags.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-accent-purple/10 text-accent-purple px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Quantity & Add to Cart */}
        <div className="space-y-4">
          {/* Quantity Selector */}
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-2">
              Quantity
            </label>
            <div className="flex items-center space-x-3 w-32">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 1}
                className="h-10 w-10 p-0"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </Button>
              
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                className="w-16 text-center bg-background border border-accent-purple/20 rounded-md py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-purple focus:border-transparent"
              />
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleQuantityChange(quantity + 1)}
                className="h-10 w-10 p-0"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button
            variant="primary"
            size="lg"
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="w-full md:w-auto min-w-48"
          >
            {!product.inStock 
              ? 'Out of Stock' 
              : inCart 
                ? `Add More (${cartQuantity} in cart)`
                : 'Add to Cart'
            }
          </Button>

          {/* Stock Status */}
          <div className="text-sm">
            {product.inStock ? (
              <span className="text-accent-green">✓ In stock and ready to ship</span>
            ) : (
              <span className="text-red-400">✗ Currently out of stock</span>
            )}
          </div>
        </div>

        {/* Additional Info */}
        <div className="space-y-3 text-sm text-text-gray border-t border-accent-purple/20 pt-6">
          <div>• Free shipping on orders over $50</div>
          <div>• 30-day return policy</div>
          <div>• Secure checkout with encryption</div>
          <div>• Customer support available 24/7</div>
        </div>
      </div>
    </div>
  );
}