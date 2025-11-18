import { ShoppingCart, Search, Menu, Phone, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import SearchDialog from "@/components/SearchDialog";
import CategoryMegaMenu from "@/components/CategoryMegaMenu";
import MobileCategoryMenu from "@/components/MobileCategoryMenu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { cart } = useCart();
  const { wishlist, removeFromWishlist } = useWishlist();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Help", path: "/help" },
    { name: "Contact Us", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-primary/95 backdrop-blur-lg shadow-indigo border-b border-white/10 bg-gradient-hero">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white hover:scale-105 transition-transform">
            Esinti
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2 rounded-full transition-all relative group ${
                  location.pathname === link.path
                    ? "bg-white/20 text-white font-medium"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent group-hover:w-3/4 transition-all duration-300" />
              </Link>
            ))}
            
            {/* Categories Mega Menu */}
            <CategoryMegaMenu />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex text-white hover:bg-white/10"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
            
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="hidden md:flex text-white hover:bg-white/10 relative">
                  <Heart className="h-5 w-5" />
                  {wishlist.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                      {wishlist.length}
                    </span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Wishlist</h3>
                  {wishlist.length === 0 ? (
                    <p className="text-muted-foreground text-sm">Your wishlist is empty</p>
                  ) : (
                    <>
                      {wishlist.map((item) => (
                        <div key={item.id} className="flex gap-3 items-center">
                          <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded" />
                          <div className="flex-1 min-w-0">
                            <Link to={`/product/${item.id}`} className="text-sm font-medium hover:text-primary line-clamp-1">
                              {item.title}
                            </Link>
                            <p className="text-sm text-primary font-semibold">₹{item.price}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => removeFromWishlist(item.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </PopoverContent>
            </Popover>

            <Link to="/cart">
              <Button variant="ghost" size="icon" className="hidden md:flex text-white hover:bg-white/10 relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-accent text-secondary text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cart.length}
                </span>
              </Button>
            </Link>
            <a
              href="https://wa.me/919056264535"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex"
            >
              <Button size="icon" className="bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-md">
                <Phone className="h-5 w-5" />
              </Button>
            </a>
            <Link to="/auth">
              <Button
                variant="outline"
                className="hidden md:inline-flex border-2 border-white text-white hover:bg-white hover:text-primary"
              >
                Sign In
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="gold" className="hidden md:inline-flex">
                Contact Us
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-white rounded-2xl shadow-xl p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-all ${
                  location.pathname === link.path
                    ? "bg-primary text-white"
                    : "text-foreground hover:bg-accent"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="border-t border-border pt-4">
              <MobileCategoryMenu onClose={() => setMobileMenuOpen(false)} />
            </div>
            
            <div className="pt-2 border-t border-border space-y-2">
              <Link to="/auth" className="block">
                <Button variant="outline" className="w-full">Sign In</Button>
              </Link>
              <Link to="/contact" className="block">
                <Button className="w-full bg-secondary hover:bg-secondary/90">Contact Us</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
      
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </nav>
  );
};

export default Navigation;
