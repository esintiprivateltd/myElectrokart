import { Shield, Truck, HeadphonesIcon, Award, Lock, CheckCircle } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% Secure Transactions"
    },
    {
      icon: Truck,
      title: "PAN India Delivery",
      description: "Fast & Reliable Shipping"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Dedicated Customer Care"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Certified Products"
    },
    {
      icon: Lock,
      title: "Data Protection",
      description: "Your Privacy Matters"
    },
    {
      icon: CheckCircle,
      title: "Verified Seller",
      description: "GST Registered"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-secondary mb-8 sm:mb-12">
          Why Trust Esinti?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-3 sm:mb-4">
                <badge.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-secondary mb-1">
                {badge.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
