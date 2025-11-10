import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

const ProductHighlights = () => {
  const { addToCart } = useCart();
  const featuredProducts = PRODUCTS.slice(0, 6);

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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">Featured Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover our comprehensive range of industrial components, sourced globally and delivered locally.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <Card
              key={product.id}
              className="group overflow-hidden rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 border border-border bg-card animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link to={`/product/${product.id}`}>
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
                  {product.oldPrice && (
                    <div className="absolute top-4 right-4 bg-accent text-secondary px-3 py-1 rounded-full text-sm font-bold shadow-gold">
                      Save ₹{(product.oldPrice - product.price).toFixed(2)}
                    </div>
                  )}
                </div>
              </Link>
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < 4
                          ? "fill-accent text-accent"
                          : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">(4.8)</span>
                </div>
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-bold text-lg mb-2 text-secondary line-clamp-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                </Link>
                {product.description && (
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {product.description}
                  </p>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-primary">₹{product.price.toFixed(2)}</span>
                  {product.oldPrice && (
                    <span className="text-sm text-muted-foreground line-through">₹{product.oldPrice.toFixed(2)}</span>
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
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/products">
            <Button variant="hero" size="lg" className="rounded-full text-lg px-12">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
