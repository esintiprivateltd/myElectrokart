import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "ABC Manufacturing Ltd.",
      location: "Mumbai, Maharashtra",
      rating: 5,
      text: "Excellent quality products and prompt delivery. The heavy-duty connectors we purchased have been performing flawlessly in our industrial setup. Highly recommended!",
      image: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=7c3aed&color=fff"
    },
    {
      name: "Priya Sharma",
      company: "Tech Solutions Pvt. Ltd.",
      location: "Bangalore, Karnataka",
      rating: 5,
      text: "Outstanding customer service and technical support. The team helped us choose the right encoders for our automation project. Very satisfied with the purchase.",
      image: "https://ui-avatars.com/api/?name=Priya+Sharma&background=7c3aed&color=fff"
    },
    {
      name: "Amit Patel",
      company: "Sunrise Industries",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      text: "Best prices in the market with genuine products. We've been ordering UV lamps and IR lamps for our printing business. Never disappointed!",
      image: "https://ui-avatars.com/api/?name=Amit+Patel&background=7c3aed&color=fff"
    },
    {
      name: "Sunita Reddy",
      company: "Precision Engineering Co.",
      location: "Hyderabad, Telangana",
      rating: 5,
      text: "Reliable supplier with consistent quality. The planetary gearboxes we ordered are working perfectly. Great after-sales support too!",
      image: "https://ui-avatars.com/api/?name=Sunita+Reddy&background=7c3aed&color=fff"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by thousands of businesses across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="rounded-2xl hover:shadow-hover transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              <CardContent className="p-6">
                <Quote className="h-10 w-10 text-primary/20 absolute top-4 right-4" />
                
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full"
                  />
                  <div>
                    <h3 className="font-bold text-secondary">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
