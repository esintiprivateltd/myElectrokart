import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-8 sm:pb-0">
      {/* Decorative animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-primary/30 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-up">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-secondary leading-tight px-2">
            Global Products,
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">Local Trust</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            High-quality imported industrial components for modern industries — delivered with reliability and care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4 sm:pt-6 px-4">
            <Link to="/products" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="gold"
                className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-full min-w-[200px] sm:min-w-[220px] font-semibold"
              >
                Shop Now
              </Button>
            </Link>
            <Link to="/products" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-full min-w-[200px] sm:min-w-[220px] border-2 border-primary text-primary hover:bg-primary hover:text-white"
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
