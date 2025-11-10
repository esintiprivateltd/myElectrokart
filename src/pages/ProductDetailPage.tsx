import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Star, ShoppingCart, CreditCard } from "lucide-react";

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];

  const [variant, setVariant] = useState("4");
  const [qty, setQty] = useState(1);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      variant,
      quantity: qty,
      image: product.image,
    });
  };

  const handleBuyNow = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      variant,
      quantity: qty,
      image: product.image,
    });
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-gradient-card rounded-2xl shadow-card overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-secondary mb-2">
                {product.title}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
                <span className="text-muted-foreground ml-2">(48 reviews)</span>
              </div>
              {product.badges && (
                <div className="flex gap-2 mb-4">
                  {product.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-primary">
                ₹{product.price}
              </span>
              {product.oldPrice && (
                <span className="text-xl line-through text-muted-foreground">
                  ₹{product.oldPrice}
                </span>
              )}
            </div>

            <p className="text-foreground/80 leading-relaxed">
              {product.description}
            </p>

            {/* Pin Variant Selector */}
            <div>
              <label className="block text-sm font-medium mb-3">
                Pin Variant
              </label>
              <select
                value={variant}
                onChange={(e) => setVariant(e.target.value)}
                className="w-full px-4 py-3 border-2 border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              >
                {[4, 6, 10, 16, 24, 32, 36, 48].map((v) => (
                  <option key={v} value={v}>
                    {v} Pin
                  </option>
                ))}
              </select>
            </div>

            {/* Quantity Selector */}
            <div>
              <label className="block text-sm font-medium mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="px-4 py-3 hover:bg-muted transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <div className="px-6 py-3 border-x-2 border-border font-semibold">
                    {qty}
                  </div>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="px-4 py-3 hover:bg-muted transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                onClick={handleAddToCart}
                variant="default"
                size="lg"
                className="flex-1"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                onClick={handleBuyNow}
                variant="gold"
                size="lg"
                className="flex-1"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Buy Now
              </Button>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-700 font-medium">
                ✅ In Stock – Fast Shipping Available
              </span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
