import React, { createContext, useContext, useEffect, useState } from "react";

interface CartItem {
  id: string;
  title: string;
  price: number;
  variant: string;
  quantity: number;
  image: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (id: string, variant: string, qty: number) => void;
  removeFromCart: (id: string, variant: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem("esinti_cart");
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("esinti_cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item: CartItem) {
    const idx = cart.findIndex(
      (c) => c.id === item.id && c.variant === item.variant
    );
    if (idx > -1) {
      const copy = [...cart];
      copy[idx].quantity += item.quantity || 1;
      setCart(copy);
    } else {
      setCart((prev) => [...prev, { ...item, quantity: item.quantity || 1 }]);
    }
  }

  function updateQuantity(id: string, variant: string, qty: number) {
    setCart((prev) =>
      prev
        .map((c) =>
          c.id === id && c.variant === variant ? { ...c, quantity: qty } : c
        )
        .filter((c) => c.quantity > 0)
    );
  }

  function removeFromCart(id: string, variant: string) {
    setCart((prev) =>
      prev.filter((c) => !(c.id === id && c.variant === variant))
    );
  }

  function clearCart() {
    setCart([]);
  }

  const value = { cart, addToCart, updateQuantity, removeFromCart, clearCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
