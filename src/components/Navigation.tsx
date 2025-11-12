import { ShoppingCart, Search, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart } = useCart();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/products" },
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
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex text-white hover:bg-white/10">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="hidden md:flex text-white hover:bg-white/10 relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-accent text-secondary text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cart.length}
                </span>
              </Button>
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex"
            >
              <Button size="icon" className="bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-md">
                <Phone className="h-5 w-5" />
              </Button>
            </a>
            <Button
              variant="outline"
              className="hidden md:inline-flex border-2 border-white text-white hover:bg-white hover:text-primary"
            >
              Sign In
            </Button>
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
          <div className="lg:hidden mt-2 bg-white rounded-2xl shadow-xl p-4 space-y-2">
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
            <div className="pt-2 border-t border-border space-y-2">
              <Button variant="outline" className="w-full">Sign In</Button>
              <Button className="w-full bg-secondary hover:bg-secondary/90">Contact Us</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
