import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Cable, Lightbulb, Zap, Settings, Package, Boxes, Wrench, Circle } from "lucide-react";

const categories = [
  { name: "Heavy Duty Connector", icon: Cable, path: "/products?category=heavy-duty-connector" },
  { name: "UV Lamp", icon: Lightbulb, path: "/products?category=uv-lamp" },
  { name: "Hot Foil Stamping Machine", icon: Settings, path: "/products?category=hot-foil-machine" },
  { name: "Planetary Gear Box", icon: Settings, path: "/products?category=planetary-gearbox" },
  { name: "IR Lamp", icon: Lightbulb, path: "/products?category=ir-lamp" },
  { name: "Encoders & Accessories", icon: Circle, path: "/products?category=encoders" },
  { name: "Diaphragm Pump", icon: Package, path: "/products?category=diaphragm-pump" },
  { name: "Tresu Rubber", icon: Boxes, path: "/products?category=tresu-rubber" },
  { name: "IR Clamps", icon: Wrench, path: "/products?category=ir-clamps" },
  { name: "Electronic Power Supply", icon: Zap, path: "/products?category=ballasts" },
];

const CategoryCarousel = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
            Explore Our Categories
          </h2>
          <p className="text-xl text-muted-foreground">
            Browse through our extensive range of industrial products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 animate-fade-up" style={{ animationDelay: "200ms" }}>
          {categories.map((category, index) => (
            <Link 
              key={category.name} 
              to={category.path}
              className="group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Card className="h-full hover:shadow-indigo hover:scale-105 transition-all duration-300 bg-gradient-card border-2 border-transparent hover:border-primary/20">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow">
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCarousel;
