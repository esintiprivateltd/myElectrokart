import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function OrderCompletePage() {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="bg-card rounded-2xl shadow-card p-12 text-center max-w-2xl">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-20 h-20 text-green-500" />
          </div>
          <h1 className="text-4xl font-bold text-secondary mb-4">
            Thank You for Your Order!
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            Order ID: <strong className="text-primary">#{id}</strong>
          </p>
          <p className="text-muted-foreground mb-8">
            We've received your order and will send you a confirmation email
            shortly. Your items will be shipped within 2-3 business days.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/">
              <Button variant="default" size="lg">
                Continue Shopping
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
