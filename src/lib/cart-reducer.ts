import { Cart, CartAction, CartItem, Product } from '@/types';

export const initialCart: Cart = {
  items: [],
  total: 0,
  itemCount: 0,
};

function calculateCartTotals(items: CartItem[]): { total: number; itemCount: number } {
  return items.reduce(
    (acc, item) => ({
      total: acc.total + item.product.price * item.quantity,
      itemCount: acc.itemCount + item.quantity,
    }),
    { total: 0, itemCount: 0 }
  );
}

export function cartReducer(state: Cart, action: CartAction): Cart {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, quantity } = action.payload;
      const existingItemIndex = state.items.findIndex(
        item => item.product.id === product.id
      );

      let newItems: CartItem[];
      
      if (existingItemIndex >= 0) {
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        newItems = [...state.items, { product, quantity }];
      }

      const { total, itemCount } = calculateCartTotals(newItems);

      return {
        items: newItems,
        total,
        itemCount,
      };
    }

    case 'REMOVE_FROM_CART': {
      const { productId } = action.payload;
      const newItems = state.items.filter(item => item.product.id !== productId);
      const { total, itemCount } = calculateCartTotals(newItems);

      return {
        items: newItems,
        total,
        itemCount,
      };
    }

    case 'UPDATE_QUANTITY': {
      const { productId, quantity } = action.payload;
      
      if (quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_FROM_CART', payload: { productId } });
      }

      const newItems = state.items.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      );

      const { total, itemCount } = calculateCartTotals(newItems);

      return {
        items: newItems,
        total,
        itemCount,
      };
    }

    case 'CLEAR_CART': {
      return initialCart;
    }

    case 'LOAD_CART': {
      return action.payload;
    }

    default:
      return state;
  }
}