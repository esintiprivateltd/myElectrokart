import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const [couponCode, setCouponCode] = useState("");

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const taxes = subtotal * 0.18; // 18% GST
  const total = subtotal + taxes;

  const handleUpdateQuantity = (id: string, variant: string, newQty: number) => {
    if (newQty > 0) {
      updateQuantity(id, variant, newQty);
    }
  };

  const handleRemoveItem = (id: string, variant: string) => {
    removeFromCart(id, variant);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-24">
        <div className="mb-8 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-2">Shopping Cart</h1>
          <p className="text-muted-foreground">Review your items before checkout</p>
        </div>

        {cart.length === 0 ? (
          <Card className="text-center py-16 animate-fade-up">
            <CardContent className="space-y-4">
              <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground" />
              <h2 className="text-2xl font-bold text-secondary">Your cart is empty</h2>
              <p className="text-muted-foreground">Add some products to get started</p>
              <Link to="/products">
                <Button variant="default" size="lg" className="rounded-full mt-4">
                  Continue Shopping
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4 animate-fade-up">
              {cart.map((item, idx) => (
                <Card key={`${item.id}-${item.variant}-${idx}`} className="overflow-hidden hover:shadow-hover transition-all">
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-28 h-28 object-cover rounded-xl"
                      />
                      
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-secondary mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">Variant: {item.variant}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Button 
                              variant="outline" 
                              size="icon" 
                              className="h-8 w-8 rounded-full"
                              onClick={() => handleUpdateQuantity(item.id, item.variant, item.quantity - 1)}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="font-semibold w-8 text-center">{item.quantity}</span>
                            <Button 
                              variant="outline" 
                              size="icon" 
                              className="h-8 w-8 rounded-full"
                              onClick={() => handleUpdateQuantity(item.id, item.variant, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          
                          <div className="text-right">
                            <p className="text-2xl font-bold text-primary">₹{(item.price * item.quantity).toFixed(2)}</p>
                            <p className="text-sm text-muted-foreground">₹{item.price.toFixed(2)} each</p>
                          </div>
                        </div>
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="text-destructive hover:text-destructive"
                        onClick={() => handleRemoveItem(item.id, item.variant)}
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
              <Card className="sticky top-24 shadow-card hover:shadow-hover transition-all">
                <CardContent className="p-8 space-y-6">
                  <h2 className="text-2xl font-bold text-secondary">Order Summary</h2>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Delivery</span>
                      <span>—</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-semibold">₹{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxes (18% GST)</span>
                      <span className="font-semibold">₹{taxes.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-border pt-3 flex justify-between text-lg">
                      <span className="font-bold">Total</span>
                      <span className="font-bold text-primary text-2xl">₹{total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Input 
                      placeholder="Gift card or discount code"
                      className="rounded-full"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <Button variant="outline" className="w-full rounded-full">
                      Apply
                    </Button>
                  </div>

                  <div className="space-y-3 pt-4">
                    <Link to="/checkout">
                      <Button variant="default" size="lg" className="w-full rounded-full">
                        Checkout
                      </Button>
                    </Link>
                    <Link to="/products">
                      <Button variant="outline" size="lg" className="w-full rounded-full">
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>

                  <p className="text-sm text-center text-muted-foreground">
                    Secure Checkout — Powered by Esinti
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CartPage;
