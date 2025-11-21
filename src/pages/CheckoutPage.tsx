import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    gst: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  function placeOrder() {
    const orderId = "ESNT" + Math.floor(Math.random() * 1000000);
    clearCart();
    navigate(`/order-complete/${orderId}`);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-8 sm:pb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-6 sm:mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 bg-card rounded-2xl shadow-card p-4 sm:p-6 lg:p-8">
            {/* Step Indicator */}
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-semibold text-sm sm:text-base ${
                      step >= s
                        ? "bg-gradient-primary text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {s}
                  </div>
                  {s < 3 && (
                    <div
                      className={`w-12 sm:w-20 h-1 mx-1 sm:mx-2 ${
                        step > s ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step 1: Shipping */}
            {step === 1 && (
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl font-semibold">Shipping Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <Label>First Name</Label>
                    <Input
                      value={form.firstName}
                      onChange={(e) =>
                        setForm({ ...form, firstName: e.target.value })
                      }
                      placeholder="Enter first name"
                    />
                  </div>
                  <div>
                    <Label>Last Name</Label>
                    <Input
                      value={form.lastName}
                      onChange={(e) =>
                        setForm({ ...form, lastName: e.target.value })
                      }
                      placeholder="Enter last name"
                    />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="Enter email address"
                    />
                  </div>
                  <div>
                    <Label>Phone</Label>
                    <Input
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      placeholder="Enter phone number"
                    />
                  </div>
                  <div>
                    <Label>Company Name</Label>
                    <Input
                      value={form.company}
                      onChange={(e) =>
                        setForm({ ...form, company: e.target.value })
                      }
                      placeholder="Enter company name (optional)"
                    />
                  </div>
                  <div>
                    <Label>GST</Label>
                    <Input
                      value={form.gst}
                      onChange={(e) =>
                        setForm({ ...form, gst: e.target.value })
                      }
                      placeholder="Enter GST number (optional)"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Label>Address</Label>
                    <Input
                      value={form.address}
                      onChange={(e) =>
                        setForm({ ...form, address: e.target.value })
                      }
                      placeholder="Enter full address"
                    />
                  </div>
                  <div>
                    <Label>City</Label>
                    <Input
                      value={form.city}
                      onChange={(e) =>
                        setForm({ ...form, city: e.target.value })
                      }
                      placeholder="Enter city"
                    />
                  </div>
                  <div>
                    <Label>State</Label>
                    <Input
                      value={form.state}
                      onChange={(e) =>
                        setForm({ ...form, state: e.target.value })
                      }
                      placeholder="Enter state"
                    />
                  </div>
                  <div>
                    <Label>ZIP Code</Label>
                    <Input
                      value={form.zip}
                      onChange={(e) => setForm({ ...form, zip: e.target.value })}
                      placeholder="Enter ZIP code"
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button onClick={() => setStep(2)} size="lg">
                    Continue to Payment
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Payment Method</h2>
                <div className="space-y-4">
                  {[
                    "Credit/Debit Card",
                    "UPI (GPay/PhonePe/Paytm)",
                    "Net Banking",
                    "Cash on Delivery",
                  ].map((method) => (
                    <label
                      key={method}
                      className="flex items-center p-4 border-2 border-border rounded-lg hover:border-primary cursor-pointer transition-colors"
                    >
                      <input type="radio" name="payment" className="mr-3" />
                      <span className="font-medium">{method}</span>
                    </label>
                  ))}
                </div>
                <div className="flex justify-between">
                  <Button onClick={() => setStep(1)} variant="outline">
                    Back
                  </Button>
                  <Button onClick={() => setStep(3)} size="lg">
                    Review Order
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Review */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Review & Confirm</h2>
                <p className="text-muted-foreground">
                  Please review your order details before placing the order.
                </p>
                <div className="flex justify-between">
                  <Button onClick={() => setStep(2)} variant="outline">
                    Back
                  </Button>
                  <Button onClick={placeOrder} variant="gold" size="lg">
                    Place Order
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-card rounded-2xl shadow-card p-4 sm:p-6 lg:p-8 h-fit">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Order Summary</h3>
            <div className="space-y-3 sm:space-y-4">
              {cart.map((item, idx) => (
                <div key={idx} className="flex justify-between py-2 gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm sm:text-base line-clamp-2">{item.title}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      {item.variant} Pin × {item.quantity}
                    </div>
                  </div>
                  <div className="font-semibold text-sm sm:text-base flex-shrink-0">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-border mt-6 pt-6 space-y-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-xl font-bold pt-3 border-t border-border">
                <span>Total</span>
                <span className="text-primary">₹{subtotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
