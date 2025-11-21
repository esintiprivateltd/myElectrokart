import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { useRecentlyViewed } from "@/contexts/RecentlyViewedContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import RecentlyViewed from "@/components/RecentlyViewed";
import SEOHead from "@/components/SEOHead";
import ProductReviews from "@/components/ProductReviews";
import ProductImageGallery from "@/components/ProductImageGallery";
import ProductVariantSelector from "@/components/ProductVariantSelector";
import ProductShareButtons from "@/components/ProductShareButtons";
import ProductDescription from "@/components/ProductDescription";
import ProductFeaturesApplications from "@/components/ProductFeaturesApplications";
import TechnicalSpecifications from "@/components/TechnicalSpecifications";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Minus, Plus, Star, ShoppingCart, CreditCard, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToRecentlyViewed } = useRecentlyViewed();
  const { toast } = useToast();
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  
  // Add to recently viewed when product loads
  useEffect(() => {
    addToRecentlyViewed({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    });
  }, [product.id]);

  const [selectedVariantId, setSelectedVariantId] = useState(
    product.hasVariants && product.variants ? product.variants[0].id : "default"
  );
  const [qty, setQty] = useState(1);
  const inWishlist = isInWishlist(product.id);

  // Get current variant details
  const currentVariant = product.hasVariants && product.variants
    ? product.variants.find(v => v.id === selectedVariantId) || product.variants[0]
    : null;

  // Update price and details based on selected variant
  const displayPrice = currentVariant ? currentVariant.price : product.price;
  const displayOldPrice = currentVariant ? currentVariant.oldPrice : product.oldPrice;
  const displaySku = currentVariant ? currentVariant.sku : product.id;
  const isInStock = currentVariant ? currentVariant.inStock : true;

  // Get images for current variant or fallback to product images
  const displayImages = currentVariant && currentVariant.images && currentVariant.images.length > 0
    ? currentVariant.images
    : product.images || [product.image];

  // Reset quantity when variant changes
  useEffect(() => {
    setQty(1);
  }, [selectedVariantId]);

  const handleAddToCart = () => {
    if (!isInStock) {
      toast({
        title: "Out of Stock",
        description: "This variant is currently unavailable.",
        variant: "destructive",
      });
      return;
    }

    const variantLabel = currentVariant ? currentVariant.label : "Default";
    addToCart({
      id: product.id,
      title: `${product.title} - ${variantLabel}`,
      price: displayPrice,
      variant: variantLabel,
      quantity: qty,
      image: product.image,
    });
    
    toast({
      title: "Added to Cart",
      description: `${product.title} (${variantLabel}) has been added to your cart.`,
    });
  };

  const handleBuyNow = () => {
    if (!isInStock) {
      toast({
        title: "Out of Stock",
        description: "This variant is currently unavailable.",
        variant: "destructive",
      });
      return;
    }

    const variantLabel = currentVariant ? currentVariant.label : "Default";
    addToCart({
      id: product.id,
      title: `${product.title} - ${variantLabel}`,
      price: displayPrice,
      variant: variantLabel,
      quantity: qty,
      image: product.image,
    });
    navigate("/checkout");
  };

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
      toast({
        title: "Removed from Wishlist",
        description: `${product.title} has been removed from your wishlist.`,
      });
    } else {
      addToWishlist({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      });
      toast({
        title: "Added to Wishlist",
        description: `${product.title} has been added to your wishlist.`,
      });
    }
  };

  const category = CATEGORIES.find(c => c.slug === product.category);
  
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title={`${product.title} - Buy Online`}
        description={product.description || `Buy ${product.title} online at best price. ${category?.name || 'Industrial products'} with fast delivery across India.`}
        keywords={`${product.title}, ${category?.name}, buy online, industrial products`}
        image={product.image}
        type="product"
      />
      <Navigation />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-8 sm:pb-12">
        <Breadcrumbs 
          items={[
            { label: "Products", path: "/products" },
            { label: category?.name || "Category", path: `/category/${product.category}` },
            { label: product.title }
          ]}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Product Image Gallery */}
          <div>
            <ProductImageGallery 
              images={displayImages} 
              productTitle={product.title}
              key={selectedVariantId}
            />
          </div>

          {/* Product Info */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-secondary mb-2">
                {product.title}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
                <span className="text-muted-foreground ml-2">(48 reviews)</span>
              </div>
              {product.badges && (
                <div className="flex gap-2 mb-4">
                  {product.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-baseline gap-2 sm:gap-3">
              <span className="text-3xl sm:text-4xl font-bold text-primary">
                ₹{displayPrice.toFixed(2)}
              </span>
              {displayOldPrice && (
                <span className="text-lg sm:text-xl line-through text-muted-foreground">
                  ₹{displayOldPrice.toFixed(2)}
                </span>
              )}
            </div>
            
            {/* SKU Display */}
            {displaySku && (
              <div className="text-sm text-muted-foreground mt-2">
                SKU: <span className="font-mono font-semibold">{displaySku}</span>
              </div>
            )}

            <p className="text-foreground/80 leading-relaxed">
              {currentVariant && currentVariant.description ? currentVariant.description : product.description}
            </p>

            {/* Variant Selector */}
            {product.hasVariants && product.variants && (
              <ProductVariantSelector
                variants={product.variants}
                selectedVariant={selectedVariantId}
                onVariantChange={setSelectedVariantId}
                label={product.id === "ir-heating-lamp" ? "Total Length" : "Pin Configuration"}
              />
            )}

            {/* Quantity Selector */}
            <div>
              <label className="block text-sm font-medium mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="px-4 py-3 hover:bg-muted transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <div className="px-6 py-3 border-x-2 border-border font-semibold">
                    {qty}
                  </div>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="px-4 py-3 hover:bg-muted transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 sm:space-y-4 pt-4">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  onClick={handleAddToCart}
                  variant="default"
                  size="lg"
                  className="flex-1 w-full"
                  disabled={!isInStock}
                >
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  {isInStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
                <Button
                  onClick={handleBuyNow}
                  variant="gold"
                  size="lg"
                  className="flex-1 w-full"
                  disabled={!isInStock}
                >
                  <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Buy Now
                </Button>
              </div>
              <Button
                onClick={handleWishlistToggle}
                variant="outline"
                size="lg"
                className="w-full"
              >
                <Heart className={`w-5 h-5 mr-2 ${inWishlist ? "fill-red-500 text-red-500" : ""}`} />
                {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
              </Button>
            </div>

            {/* Stock Status */}
            <div className={`flex items-center gap-2 p-4 rounded-lg border ${
              isInStock 
                ? 'bg-green-50 border-green-200' 
                : 'bg-red-50 border-red-200'
            }`}>
              <div className={`w-2 h-2 rounded-full ${
                isInStock 
                  ? 'bg-green-500 animate-pulse' 
                  : 'bg-red-500'
              }`} />
              <span className={`font-medium ${
                isInStock 
                  ? 'text-green-700' 
                  : 'text-red-700'
              }`}>
                {isInStock 
                  ? '✅ In Stock – Fast Shipping Available' 
                  : '❌ Out of Stock – Select Another Variant'}
              </span>
            </div>

            {/* Share Buttons */}
            <div className="pt-6 border-t border-border">
              <ProductShareButtons 
                productUrl={typeof window !== 'undefined' ? window.location.href : ''}
                productTitle={product.title}
              />
            </div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mb-6 sm:mb-8 gap-1 h-auto p-1">
              <TabsTrigger value="description" className="text-xs sm:text-sm py-2 sm:py-3">Description</TabsTrigger>
              <TabsTrigger value="specifications" className="text-xs sm:text-sm py-2 sm:py-3">Specifications</TabsTrigger>
              <TabsTrigger value="features" className="text-xs sm:text-sm py-2 sm:py-3 col-span-2 sm:col-span-1">Features & Applications</TabsTrigger>
              <TabsTrigger value="reviews" className="text-xs sm:text-sm py-2 sm:py-3 col-span-2 sm:col-span-1">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="space-y-6">
              <ProductDescription variant={selectedVariantId} productId={product.id} />
            </TabsContent>
            
            <TabsContent value="specifications" className="space-y-6">
              <TechnicalSpecifications variant={selectedVariantId} productId={product.id} />
            </TabsContent>
            
            <TabsContent value="features" className="space-y-6">
              <ProductFeaturesApplications productId={product.id} variant={selectedVariantId} />
            </TabsContent>
            
            <TabsContent value="reviews" className="space-y-6">
              <ProductReviews />
            </TabsContent>
          </Tabs>
        </div>

        {/* Recently Viewed Products */}
        <RecentlyViewed />
      </main>
      <Footer />
    </div>
  );
}
