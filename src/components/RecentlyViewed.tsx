import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { useRecentlyViewed } from "@/contexts/RecentlyViewedContext";
import { Clock } from "lucide-react";

const RecentlyViewed = () => {
  const { recentlyViewed } = useRecentlyViewed();

  if (recentlyViewed.length === 0) return null;

  return (
    <div className="mt-16 animate-fade-up">
      <div className="flex items-center gap-3 mb-6">
        <Clock className="h-6 w-6 text-primary" />
        <h2 className="text-2xl sm:text-3xl font-bold text-secondary">
          Recently Viewed Products
        </h2>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {recentlyViewed.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <Card className="group hover:shadow-hover transition-all duration-300 rounded-2xl overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-3">
                <h3 className="font-semibold text-sm text-secondary line-clamp-2 group-hover:text-primary transition-colors mb-2">
                  {product.title}
                </h3>
                <p className="text-primary font-bold text-sm">₹{product.price.toFixed(2)}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
