import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Arduino Mega 2560 R3",
    price: 38.99,
    rating: 4.8,
    reviews: 342,
    badge: "Best Seller",
    stock: "In Stock"
  },
  {
    id: 2,
    name: "Raspberry Pi 4 Model B",
    price: 55.00,
    rating: 4.9,
    reviews: 521,
    badge: "Popular",
    stock: "In Stock"
  },
  {
    id: 3,
    name: "ESP32 Development Board",
    price: 12.99,
    rating: 4.7,
    reviews: 287,
    badge: "New",
    stock: "In Stock"
  },
  {
    id: 4,
    name: "STM32 Nucleo Board",
    price: 22.50,
    rating: 4.6,
    reviews: 156,
    badge: null,
    stock: "In Stock"
  },
  {
    id: 5,
    name: "Breadboard Jumper Wires",
    price: 8.99,
    rating: 4.5,
    reviews: 643,
    badge: null,
    stock: "In Stock"
  },
  {
    id: 6,
    name: "LM2596 Buck Converter",
    price: 4.99,
    rating: 4.4,
    reviews: 412,
    badge: "Deal",
    stock: "In Stock"
  },
  {
    id: 7,
    name: "DHT22 Temperature Sensor",
    price: 9.99,
    rating: 4.6,
    reviews: 298,
    badge: null,
    stock: "Low Stock"
  },
  {
    id: 8,
    name: "HC-SR04 Ultrasonic Sensor",
    price: 3.99,
    rating: 4.5,
    reviews: 512,
    badge: null,
    stock: "In Stock"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground">Top picks from our extensive catalog</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-glow transition-all duration-300 bg-card border-border overflow-hidden">
              <div className="relative">
                {/* Product Image Placeholder */}
                <div className="aspect-square bg-secondary/50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-primary opacity-20" />
                  <span className="text-6xl opacity-30">⚡</span>
                  {product.badge && (
                    <Badge className="absolute top-3 right-3 bg-primary">
                      {product.badge}
                    </Badge>
                  )}
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                  </div>
                  <span className={`text-xs ${product.stock === "In Stock" ? "text-accent" : "text-destructive"}`}>
                    {product.stock}
                  </span>
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button className="w-full" variant="default">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
