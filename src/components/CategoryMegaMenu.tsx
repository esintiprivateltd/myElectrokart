import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Loader2 } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";

export default function CategoryMegaMenu() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCategoryHover = (categorySlug: string) => {
    setIsLoading(true);
    setHoveredCategory(categorySlug);
    // Simulate loading for smooth transition
    setTimeout(() => setIsLoading(false), 150);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
    setIsLoading(false);
  };

  const getCategoryProducts = (categorySlug: string) => {
    if (categorySlug === "all") {
      return PRODUCTS.slice(0, 6);
    }
    return PRODUCTS.filter((p) => p.category === categorySlug).slice(0, 6);
  };

  return (
    <div 
      className="relative group"
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Button */}
      <button className="px-5 py-2 rounded-full transition-all relative group text-white/90 hover:text-white flex items-center gap-1">
        Categories
        <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent group-hover:w-3/4 transition-all duration-300" />
      </button>

      {/* Mega Menu Dropdown */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden w-[900px] max-h-[600px]">
          <div className="grid grid-cols-12 h-full">
            {/* Category List - Left Side */}
            <div className="col-span-4 bg-gray-50 border-r border-gray-200 p-4 overflow-y-auto max-h-[600px]">
              <h3 className="text-sm font-bold text-gray-500 uppercase mb-3 px-3">
                All Categories
              </h3>
              <div className="space-y-1">
                {CATEGORIES.map((category) => (
                  <Link
                    key={category.slug}
                    to={category.slug === "all" ? "/products" : `/category/${category.slug}`}
                    onMouseEnter={() => handleCategoryHover(category.slug)}
                    className={`block px-3 py-2.5 rounded-lg transition-all text-sm ${
                      hoveredCategory === category.slug
                        ? "bg-gradient-primary text-white shadow-md"
                        : "text-gray-700 hover:bg-white hover:shadow-sm"
                    }`}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Product Preview - Right Side */}
            <div className="col-span-8 p-6 overflow-y-auto max-h-[600px]">
              {hoveredCategory ? (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-secondary">
                      {CATEGORIES.find((c) => c.slug === hoveredCategory)?.name}
                    </h3>
                    <Link
                      to={hoveredCategory === "all" ? "/products" : `/category/${hoveredCategory}`}
                      className="text-sm text-primary hover:underline font-medium"
                    >
                      View All →
                    </Link>
                  </div>

                  {isLoading ? (
                    <div className="flex items-center justify-center py-12">
                      <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 gap-4">
                      {getCategoryProducts(hoveredCategory).map((product) => (
                        <Link
                          key={product.id}
                          to={`/product/${product.id}`}
                          className="group/item"
                        >
                          <Card className="overflow-hidden hover:shadow-lg transition-all">
                            <div className="aspect-square overflow-hidden">
                              <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <CardContent className="p-3">
                              <h4 className="font-semibold text-sm text-secondary line-clamp-2 mb-1 group-hover/item:text-primary transition-colors">
                                {product.title}
                              </h4>
                              <p className="text-primary font-bold text-sm">
                                ₹{product.price.toFixed(2)}
                              </p>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <ChevronDown className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-2">
                    Hover over a category
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    See products instantly without clicking
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
