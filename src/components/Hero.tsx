import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Decorative animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-secondary leading-tight">
            Global Products,
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">Local Trust</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            High-quality imported industrial components for modern industries — delivered with reliability and care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
            <Link to="/products">
              <Button 
                size="lg" 
                variant="gold"
                className="text-lg px-10 py-7 rounded-full min-w-[220px] font-semibold"
              >
                Shop Now
              </Button>
            </Link>
            <Link to="/products">
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-10 py-7 rounded-full min-w-[220px] border-2 border-primary text-primary hover:bg-primary hover:text-white"
              >
                Explore Categories
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
