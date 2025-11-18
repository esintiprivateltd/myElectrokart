import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Package, Truck, CheckCircle, Clock } from "lucide-react";

export default function OrderTrackingPage() {
  const [orderId, setOrderId] = useState("");
  const [tracking, setTracking] = useState<any>(null);

  const handleTrack = () => {
    // Simulate tracking data
    setTracking({
      orderId: orderId,
      status: "In Transit",
      estimatedDelivery: "Jan 20, 2025",
      timeline: [
        { status: "Order Placed", date: "Jan 15, 2025", completed: true },
        { status: "Processing", date: "Jan 16, 2025", completed: true },
        { status: "Shipped", date: "Jan 17, 2025", completed: true },
        { status: "In Transit", date: "Jan 18, 2025", completed: true },
        { status: "Out for Delivery", date: "Jan 20, 2025", completed: false },
        { status: "Delivered", date: "Jan 20, 2025", completed: false },
      ],
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 pt-28 pb-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-secondary mb-8">Track Your Order</h1>

          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="orderId">Order ID</Label>
                  <Input
                    id="orderId"
                    placeholder="Enter your order ID (e.g., ESNT123456)"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    className="rounded-full"
                  />
                </div>
                <Button onClick={handleTrack} variant="gold" className="w-full">
                  Track Order
                </Button>
              </div>
            </CardContent>
          </Card>

          {tracking && (
            <Card>
              <CardContent className="p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-secondary mb-2">
                    Order #{tracking.orderId}
                  </h2>
                  <p className="text-muted-foreground">
                    Current Status: <span className="font-semibold text-primary">{tracking.status}</span>
                  </p>
                  <p className="text-muted-foreground">
                    Estimated Delivery: <span className="font-semibold">{tracking.estimatedDelivery}</span>
                  </p>
                </div>

                <div className="space-y-6">
                  {tracking.timeline.map((item: any, index: number) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            item.completed
                              ? "bg-green-500 text-white"
                              : "bg-gray-200 text-gray-400"
                          }`}
                        >
                          {item.completed ? (
                            <CheckCircle className="w-5 h-5" />
                          ) : (
                            <Clock className="w-5 h-5" />
                          )}
                        </div>
                        {index < tracking.timeline.length - 1 && (
                          <div
                            className={`w-0.5 h-12 ${
                              item.completed ? "bg-green-500" : "bg-gray-200"
                            }`}
                          />
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <h3
                          className={`font-semibold ${
                            item.completed ? "text-secondary" : "text-muted-foreground"
                          }`}
                        >
                          {item.status}
                        </h3>
                        <p className="text-sm text-muted-foreground">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
