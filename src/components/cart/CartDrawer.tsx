'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { CartItem } from './CartItem';
import { useCart } from '@/hooks/useCart';
import { cn } from '@/lib/utils';

export function CartDrawer() {
  const { cart, isCartOpen, toggleCart, getFormattedTotal } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50"
          onClick={toggleCart}
        />
      )}

      {/* Cart Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-background border-l border-accent-purple/20 z-50 transform transition-transform duration-300 ease-in-out flex flex-col',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-accent-purple/20">
          <h2 className="text-lg font-semibold text-text-primary">
            Shopping Cart ({cart.itemCount})
          </h2>
          <Button variant="ghost" size="sm" onClick={toggleCart}>
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.items.length === 0 ? (
            <div className="text-center py-12">
              <svg
                className="mx-auto h-12 w-12 text-text-gray mb-4"
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
              <p className="text-text-gray">Your cart is empty</p>
              <Button
                variant="primary"
                className="mt-4"
                onClick={toggleCart}
              >
                <Link href="/shop">Start Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.items.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.items.length > 0 && (
          <div className="border-t border-accent-purple/20 p-6 space-y-4">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total:</span>
              <span className="text-accent-purple">{getFormattedTotal()}</span>
            </div>
            <div className="space-y-2">
              <Button
                variant="primary"
                className="w-full"
                onClick={toggleCart}
              >
                <Link href="/cart" className="w-full">
                  View Cart
                </Link>
              </Button>
              <Button
                variant="secondary"
                className="w-full"
                onClick={toggleCart}
              >
                Checkout
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}