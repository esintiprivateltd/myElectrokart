import React, { createContext, useContext, useEffect, useState } from "react";

interface WishlistItem {
  id: string;
  title: string;
  price: number;
  image: string;
}

interface WishlistContextType {
  wishlist: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within WishlistProvider");
  }
  return context;
}

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<WishlistItem[]>(() => {
    try {
      const stored = localStorage.getItem("esinti_wishlist");
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("esinti_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  function addToWishlist(item: WishlistItem) {
    setWishlist((prev) => {
      if (prev.some((w) => w.id === item.id)) {
        return prev;
      }
      return [...prev, item];
    });
  }

  function removeFromWishlist(id: string) {
    setWishlist((prev) => prev.filter((w) => w.id !== id));
  }

  function isInWishlist(id: string) {
    return wishlist.some((w) => w.id === id);
  }

  const value = { wishlist, addToWishlist, removeFromWishlist, isInWishlist };
  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}
