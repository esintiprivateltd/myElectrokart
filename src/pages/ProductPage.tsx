import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Search } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { CATEGORIES, PRODUCTS } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

const ProductPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    if (categoryParam !== selectedCategory) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug);
    setSearchParams({ category: slug });
  };

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product: typeof PRODUCTS[0]) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      variant: "default",
      quantity: 1,
      image: product.image,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <Card className="sticky top-24 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-secondary">Categories</h3>
                
                {/* Search Bar */}
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="pl-10 rounded-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Category List */}
                <div className="space-y-2">
                  {CATEGORIES.map((category) => (
                    <button
                      key={category.slug}
                      onClick={() => handleCategoryChange(category.slug)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                        selectedCategory === category.slug
                          ? "bg-secondary text-white shadow-glow"
                          : "hover:bg-primary/10 text-foreground hover:scale-105"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <h1 className="text-3xl font-bold mb-8 text-secondary">
              {CATEGORIES.find(c => c.slug === selectedCategory)?.name || "All Products"}
            </h1>
            
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                {filteredProducts.map((product, index) => (
                  <Card
                    key={product.id}
                    className="group hover:shadow-hover hover:scale-105 transition-all duration-300 rounded-2xl overflow-hidden animate-fade-up border border-border"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <Link to={`/product/${product.id}`}>
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </Link>
                    <CardContent className="p-4">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-semibold mb-2 text-secondary line-clamp-2 hover:text-primary transition-colors">
                          {product.title}
                        </h3>
                      </Link>
                      {product.badges && product.badges.length > 0 && (
                        <p className="text-xs text-muted-foreground mb-2">{product.badges.join(" • ")}</p>
                      )}
                      {product.description && (
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {product.description}
                        </p>
                      )}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xl font-bold text-primary">₹{product.price}</span>
                        {product.oldPrice && (
                          <span className="text-sm text-gray-400 line-through">₹{product.oldPrice}</span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="gold" 
                          className="flex-1 rounded-full"
                          onClick={() => handleAddToCart(product)}
                        >
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Add to Cart
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
            )}

            {/* Latest Content Section */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-secondary">
                  Our Latest Content — Check what's new!
                </h2>
                <Button variant="link" className="text-primary">
                  See All
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {PRODUCTS.slice(0, 3).map((product, index) => (
                  <Link key={product.id} to={`/product/${product.id}`}>
                    <Card className="rounded-2xl overflow-hidden hover:shadow-glow transition-all">
                      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-secondary hover:text-primary transition-colors">{product.title}</h4>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductPage;
