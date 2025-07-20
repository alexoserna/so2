'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/hooks/useCart';

export function CartSummary() {
  const { cart, getFormattedTotal } = useCart();

  const shipping = cart.total >= 5000 ? 0 : 999; // Free shipping over $50
  const tax = Math.round(cart.total * 0.08); // 8% tax
  const finalTotal = cart.total + shipping + tax;

  const formatPrice = (price: number) => `$${(price / 100).toFixed(2)}`;

  return (
    <div className="bg-accent-purple/5 rounded-lg p-6 border border-accent-purple/20">
      <h2 className="text-xl font-semibold text-text-primary mb-6">Order Summary</h2>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-text-gray">
          <span>Subtotal ({cart.itemCount} items)</span>
          <span>{getFormattedTotal()}</span>
        </div>
        
        <div className="flex justify-between text-text-gray">
          <span>Shipping</span>
          <span>
            {shipping === 0 ? (
              <span className="text-accent-green">Free</span>
            ) : (
              formatPrice(shipping)
            )}
          </span>
        </div>
        
        <div className="flex justify-between text-text-gray">
          <span>Tax</span>
          <span>{formatPrice(tax)}</span>
        </div>
        
        {cart.total < 5000 && (
          <div className="text-sm text-accent-green bg-accent-green/10 p-3 rounded-md">
            Add {formatPrice(5000 - cart.total)} more for free shipping!
          </div>
        )}
        
        <div className="border-t border-accent-purple/20 pt-3">
          <div className="flex justify-between text-lg font-semibold text-text-primary">
            <span>Total</span>
            <span className="text-accent-purple">{formatPrice(finalTotal)}</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Button variant="primary" className="w-full" size="lg">
          Proceed to Checkout
        </Button>
        <Button variant="ghost" className="w-full">
          Continue Shopping
        </Button>
      </div>

      <div className="mt-6 text-xs text-text-gray space-y-1">
        <div>• Secure checkout with SSL encryption</div>
        <div>• 30-day return policy</div>
        <div>• Customer support available 24/7</div>
      </div>
    </div>
  );
}