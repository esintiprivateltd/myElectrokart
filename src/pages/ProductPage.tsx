import { useEffect, useState } from "react";
import { useParams, useNavigate, useSearchParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { ShoppingCart, Search, Heart, Loader2, SlidersHorizontal } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { useProductFilters } from "@/hooks/useProductFilters";
import { useToast } from "@/hooks/use-toast";

const ProductPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const initialCategory = slug || searchParams.get("category") || "all";
  const { filters, filteredProducts, updateFilter, resetFilters } = useProductFilters(initialCategory);
  
  const [isLoading, setIsLoading] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Update category when URL changes
  useEffect(() => {
    const newCategory = slug || searchParams.get("category") || "all";
    if (newCategory !== filters.category) {
      updateFilter("category", newCategory);
    }
  }, [slug, searchParams]);

  // Simulate loading state for smooth transitions
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [filters.category, filters.searchQuery, filters.sortBy]);

  const handleCategoryChange = (categorySlug: string) => {
    if (categorySlug === "all") {
      navigate("/products");
    } else {
      navigate(`/category/${categorySlug}`);
    }
  };

  const handleAddToCart = (product: typeof PRODUCTS[0]) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      variant: "default",
      quantity: 1,
      image: product.image,
    });
    toast({
      title: "Added to Cart",
      description: `${product.title} has been added to your cart.`,
    });
  };

  const currentCategory = CATEGORIES.find(c => c.slug === filters.category);
  const maxPrice = Math.max(...PRODUCTS.map(p => p.price));

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-28 pb-12">
        {/* Header with breadcrumb */}
        <div className="mb-8 animate-fade-up">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-primary">Products</Link>
            {currentCategory && currentCategory.slug !== "all" && (
              <>
                <span>/</span>
                <span className="text-secondary font-medium">{currentCategory.name}</span>
              </>
            )}
          </div>
          <h1 className="text-4xl font-bold text-secondary">
            {currentCategory?.name || "All Products"}
          </h1>
          <p className="text-muted-foreground mt-2">
            {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"} found
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={`lg:w-72 flex-shrink-0 ${mobileFiltersOpen ? "block" : "hidden lg:block"}`}>
            <Card className="sticky top-24 rounded-2xl shadow-card">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-secondary">Filters</h3>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={resetFilters}
                    className="text-primary"
                  >
                    Reset
                  </Button>
                </div>
                
                {/* Search */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search products..."
                      className="pl-10 rounded-full"
                      value={filters.searchQuery}
                      onChange={(e) => updateFilter("searchQuery", e.target.value)}
                    />
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Categories</label>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {CATEGORIES.map((category) => (
                      <button
                        key={category.slug}
                        onClick={() => handleCategoryChange(category.slug)}
                        className={`w-full text-left px-4 py-2.5 rounded-lg transition-all duration-300 text-sm ${
                          filters.category === category.slug
                            ? "bg-gradient-primary text-white shadow-glow"
                            : "hover:bg-primary/10 text-foreground hover:translate-x-1"
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    Price Range: ₹{filters.priceRange[0]} - ₹{filters.priceRange[1]}
                  </label>
                  <Slider
                    min={0}
                    max={maxPrice}
                    step={100}
                    value={filters.priceRange}
                    onValueChange={(value) => updateFilter("priceRange", value as [number, number])}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>₹0</span>
                    <span>₹{maxPrice}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 animate-fade-up">
              <Button
                variant="outline"
                className="lg:hidden"
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              >
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                {mobileFiltersOpen ? "Hide" : "Show"} Filters
              </Button>
              
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <label className="text-sm font-medium whitespace-nowrap">Sort by:</label>
                <Select
                  value={filters.sortBy}
                  onValueChange={(value: any) => updateFilter("sortBy", value)}
                >
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="name">Name: A to Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Loading State */}
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
              </div>
            ) : filteredProducts.length === 0 ? (
              <Card className="text-center py-16 animate-fade-up">
                <CardContent>
                  <div className="max-w-md mx-auto">
                    <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <h2 className="text-2xl font-bold text-secondary mb-2">No Products Found</h2>
                    <p className="text-muted-foreground mb-6">
                      We couldn't find any products matching your criteria. Try adjusting your filters.
                    </p>
                    <Button onClick={resetFilters} variant="gold">
                      Clear All Filters
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <>
                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {filteredProducts.map((product) => (
                    <Card
                      key={product.id}
                      className="group hover:shadow-hover hover:scale-105 transition-all duration-300 rounded-2xl overflow-hidden animate-fade-up border border-border"
                    >
                      <Link to={`/product/${product.id}`}>
                        <div className="aspect-square overflow-hidden relative">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              if (isInWishlist(product.id)) {
                                removeFromWishlist(product.id);
                              } else {
                                addToWishlist({
                                  id: product.id,
                                  title: product.title,
                                  price: product.price,
                                  image: product.image,
                                });
                              }
                            }}
                            className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-md transition-all hover:scale-110 z-10"
                          >
                            <Heart
                              className={`w-5 h-5 ${
                                isInWishlist(product.id)
                                  ? "fill-red-500 text-red-500"
                                  : "text-gray-600"
                              }`}
                            />
                          </button>
                        </div>
                      </Link>
                      <CardContent className="p-4">
                        <Link to={`/product/${product.id}`}>
                          <h3 className="font-semibold mb-2 text-secondary line-clamp-2 hover:text-primary transition-colors">
                            {product.title}
                          </h3>
                        </Link>
                        {product.badges && product.badges.length > 0 && (
                          <div className="flex flex-wrap gap-1 mb-2">
                            {product.badges.map((badge) => (
                              <span
                                key={badge}
                                className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                              >
                                {badge}
                              </span>
                            ))}
                          </div>
                        )}
                        {product.description && (
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                            {product.description}
                          </p>
                        )}
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-xl font-bold text-primary">₹{product.price.toFixed(2)}</span>
                          {product.oldPrice && (
                            <span className="text-sm text-gray-400 line-through">₹{product.oldPrice.toFixed(2)}</span>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <Button 
                            variant="gold" 
                            className="flex-1 rounded-full"
                            onClick={() => handleAddToCart(product)}
                          >
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Add
                          </Button>
                          <Link to={`/product/${product.id}`} className="flex-1">
                            <Button variant="outline" className="w-full rounded-full">
                              View
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Featured Section */}
                {filters.category === "all" && filters.searchQuery === "" && (
                  <div className="bg-card rounded-2xl p-8 shadow-card animate-fade-up">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold text-secondary">
                        Featured Products
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {PRODUCTS.slice(0, 3).map((product) => (
                        <Link key={product.id} to={`/product/${product.id}`}>
                          <Card className="rounded-2xl overflow-hidden hover:shadow-glow transition-all">
                            <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                            <CardContent className="p-4">
                              <h4 className="font-semibold text-secondary hover:text-primary transition-colors line-clamp-2">
                                {product.title}
                              </h4>
                              <p className="text-primary font-bold mt-2">₹{product.price}</p>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductPage;
