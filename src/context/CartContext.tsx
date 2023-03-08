import React, { createContext, useCallback, useContext, useState } from 'react';
import { CartItem } from '../types/CartItem';
import { Product } from '../types/Product';

interface CartContextProps {
  cartItems: CartItem[];
  handleAddItemToCart: (itemToAdd: Product) => void;
  handleRemoveItemFromCart: (itemToRemove: Product) => void;
}

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const findExistingItem = (cartItems: CartItem[], itemToAdd: Product) => {
    return cartItems.find((item) => item.product._id === itemToAdd._id);
  };

  const updateExistingItem = (
    cartItems: CartItem[],
    existingItem: CartItem,
  ) => {
    return cartItems.map((item) => {
      if (item.product._id === existingItem.product._id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
  };

  const addNewItem = (cartItems: CartItem[], itemToAdd: Product) => {
    return [...cartItems, { product: itemToAdd, quantity: 1 }];
  };

  const removeItem = (cartItems: CartItem[], itemToRemove: Product) => {
    const existingItem = findExistingItem(cartItems, itemToRemove);
    if (!existingItem) return [];

    if (existingItem.quantity > 1) {
      return cartItems.map((item) => {
        if (item.product._id === existingItem.product._id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    } else {
      return cartItems.filter(
        (item) => item.product._id !== existingItem.product._id,
      );
    }
  };

  const handleAddItemToCart = useCallback((itemToAdd: Product) => {
    setCartItems((prevState) => {
      const existingItem = findExistingItem(prevState, itemToAdd);
      return existingItem
        ? updateExistingItem(prevState, existingItem)
        : addNewItem(prevState, itemToAdd);
    });
  }, []);

  const handleRemoveItemFromCart = useCallback((itemToRemove: Product) => {
    setCartItems((prevState) => removeItem(prevState, itemToRemove));
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        handleAddItemToCart,
        handleRemoveItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
