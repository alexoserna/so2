'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/hooks/useCart';
import { CartItem as CartItemType } from '@/types';
import { formatPrice } from '@/lib/utils';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(product.id);
    } else {
      updateQuantity(product.id, newQuantity);
    }
  };

  return (
    <div className="flex items-center space-x-4 p-4 border border-accent-purple/20 rounded-lg">
      {/* Product Image */}
      <div className="flex-shrink-0 w-16 h-16 bg-text-gray/10 rounded-md overflow-hidden">
        <Image
          src={product.images[0] || '/images/placeholder.jpg'}
          alt={product.name}
          width={64}
          height={64}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium text-text-primary truncate">
          {product.name}
        </h3>
        <p className="text-sm text-text-gray">
          {formatPrice(product.price)}
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center space-x-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleQuantityChange(quantity - 1)}
          className="h-8 w-8 p-0"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </Button>
        
        <span className="text-sm font-medium text-text-primary w-8 text-center">
          {quantity}
        </span>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleQuantityChange(quantity + 1)}
          className="h-8 w-8 p-0"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </Button>
      </div>

      {/* Remove Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => removeFromCart(product.id)}
        className="text-red-400 hover:text-red-300 h-8 w-8 p-0"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </Button>
    </div>
  );
}