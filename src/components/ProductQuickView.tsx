import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  description?: string;
  badges?: string[];
}

interface ProductQuickViewProps {
  product: Product;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductQuickView = ({ product, open, onOpenChange }: ProductQuickViewProps) => {
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      variant: "default",
      quantity: qty,
      image: product.image,
    });
    toast({
      title: "Added to Cart",
      description: `${product.title} has been added to your cart.`,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-secondary">
            Quick View
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          {/* Image */}
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">{product.title}</h2>
            
            {product.badges && (
              <div className="flex gap-2 flex-wrap">
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

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-primary">
                ₹{product.price.toFixed(2)}
              </span>
              {product.oldPrice && (
                <span className="text-lg line-through text-muted-foreground">
                  ₹{product.oldPrice.toFixed(2)}
                </span>
              )}
            </div>

            {product.description && (
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            )}

            <div className="flex gap-3 pt-4">
              <Button
                onClick={handleAddToCart}
                variant="gold"
                className="flex-1"
                size="lg"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Link to={`/product/${product.id}`} className="flex-1">
                <Button
                  variant="outline"
                  className="w-full"
                  size="lg"
                  onClick={() => onOpenChange(false)}
                >
                  <Eye className="mr-2 h-5 w-5" />
                  Full Details
                </Button>
              </Link>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                ✅ In Stock - Fast Shipping Available
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                🚚 PAN India Delivery
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                🔒 Secure Payment
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductQuickView;
