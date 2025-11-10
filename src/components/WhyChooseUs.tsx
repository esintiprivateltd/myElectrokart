import { Package, DollarSign, Clock, Shield } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Package,
      title: "Global Imports",
      description: "Premium products from trusted international manufacturers",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Competitive rates with no hidden costs",
    },
    {
      icon: Clock,
      title: "Quick Delivery",
      description: "Fast and reliable shipping across India",
    },
    {
      icon: Shield,
      title: "Reliable Quality",
      description: "Guaranteed quality on every product",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">
          Why Choose Us?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Experience excellence in industrial supply with our commitment to quality, affordability, and reliability.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 animate-fade-up border border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
