import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CategoryCarousel from "@/components/CategoryCarousel";
import ProductHighlights from "@/components/ProductHighlights";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <CategoryCarousel />
      <ProductHighlights />
      <WhyChooseUs />
      
      {/* CTA Banner */}
      <section className="py-24 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover Quality. Delivered with Trust.
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who trust Esinti for their industrial component needs
          </p>
          <Link to="/products">
            <Button 
              size="lg" 
              variant="gold"
              className="text-lg px-12 py-7 rounded-full shadow-gold hover:shadow-xl"
            >
              Start Shopping Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
