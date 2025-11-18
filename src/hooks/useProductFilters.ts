import { useMemo, useState } from "react";
import { PRODUCTS } from "@/data/products";

export interface FilterOptions {
  category: string;
  searchQuery: string;
  priceRange: [number, number];
  sortBy: "default" | "price-low" | "price-high" | "name";
  inStock: boolean;
}

export function useProductFilters(initialCategory: string = "all") {
  const [filters, setFilters] = useState<FilterOptions>({
    category: initialCategory,
    searchQuery: "",
    priceRange: [0, 20000],
    sortBy: "default",
    inStock: false,
  });

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Category filter
    if (filters.category !== "all") {
      result = result.filter((p) => p.category === filters.category);
    }

    // Search filter
    if (filters.searchQuery.trim()) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description?.toLowerCase().includes(query) ||
          p.badges?.some((b) => b.toLowerCase().includes(query))
      );
    }

    // Price range filter
    result = result.filter(
      (p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );

    // In stock filter (for demo, all products are in stock)
    // if (filters.inStock) {
    //   result = result.filter((p) => p.inStock);
    // }

    // Sorting
    switch (filters.sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        // Keep default order
        break;
    }

    return result;
  }, [filters]);

  const updateFilter = <K extends keyof FilterOptions>(
    key: K,
    value: FilterOptions[K]
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({
      category: initialCategory,
      searchQuery: "",
      priceRange: [0, 20000],
      sortBy: "default",
      inStock: false,
    });
  };

  return {
    filters,
    filteredProducts,
    updateFilter,
    resetFilters,
    setFilters,
  };
}
