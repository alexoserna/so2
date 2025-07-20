import { useCart as useCartContext } from '@/contexts/CartContext';
import { Product } from '@/types';

export function useCart() {
  const context = useCartContext();
  
  const getItemQuantity = (productId: string): number => {
    const item = context.cart.items.find(item => item.product.id === productId);
    return item?.quantity || 0;
  };

  const isInCart = (productId: string): boolean => {
    return context.cart.items.some(item => item.product.id === productId);
  };

  const getTotalItems = (): number => {
    return context.cart.itemCount;
  };

  const getTotalPrice = (): number => {
    return context.cart.total;
  };

  const getFormattedTotal = (): string => {
    return `$${(context.cart.total / 100).toFixed(2)}`;
  };

  const addToCartWithFeedback = (product: Product, quantity: number = 1) => {
    if (!product.inStock) {
      return { success: false, message: 'Product is out of stock' };
    }
    
    context.addToCart(product, quantity);
    return { success: true, message: `Added ${product.name} to cart` };
  };

  return {
    ...context,
    getItemQuantity,
    isInCart,
    getTotalItems,
    getTotalPrice,
    getFormattedTotal,
    addToCartWithFeedback,
  };
}