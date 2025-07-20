'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { GlitchText } from '@/components/ui/GlitchText';
import { CartItem } from '@/components/cart/CartItem';
import { CartSummary } from '@/components/cart/CartSummary';
import { useCart } from '@/hooks/useCart';

export default function CartPage() {
  const { cart, clearCart } = useCart();

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <svg
            className="mx-auto h-24 w-24 text-text-gray mb-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 2.5M7 13l2.5 2.5m6 0a2 2 0 100 4 2 2 0 000-4zm-6 4a2 2 0 100 4 2 2 0 000-4z"
            />
          </svg>
          
          <GlitchText className="text-2xl md:text-3xl mb-4" trigger="hover">
            Your Cart is Empty
          </GlitchText>
          
          <p className="text-text-gray mb-8">
            Looks like you haven&apos;t added any wisdom to your cart yet. 
            Discover our collection of anime-inspired items.
          </p>
          
          <Button variant="primary" size="lg">
            <Link href="/shop">
              Start Shopping
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-background to-accent-purple/5 border-b border-accent-purple/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <GlitchText className="text-4xl md:text-5xl mb-4" trigger="hover">
              Shopping Cart
            </GlitchText>
            <p className="text-text-gray text-lg">
              Review your selected items before checkout
            </p>
            <div className="mt-6 text-sm text-text-gray">
              <span className="text-accent-purple font-semibold">{cart.itemCount}</span> {cart.itemCount === 1 ? 'item' : 'items'} in your cart
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-semibold text-text-primary">
                Items in Your Cart
              </h2>
              <Button
                variant="ghost"
                onClick={clearCart}
                className="text-red-400 hover:text-red-300"
              >
                Clear Cart
              </Button>
            </div>

            <div className="space-y-4">
              {cart.items.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>

            {/* Continue Shopping */}
            <div className="mt-8 pt-8 border-t border-accent-purple/20">
              <Button variant="ghost" size="lg">
                <Link href="/shop" className="flex items-center space-x-2">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span>Continue Shopping</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <CartSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}