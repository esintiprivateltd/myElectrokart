import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-footer text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about" 
                  className="text-sm text-white/80 hover:text-accent transition-all duration-300 relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-sm text-white/80 hover:text-accent transition-all duration-300 relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  Our Vision
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-sm text-white/80 hover:text-accent transition-all duration-300 relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Policy */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Customer Policy</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/privacy" 
                  className="text-sm text-white/80 hover:text-accent transition-all duration-300 relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy" 
                  className="text-sm text-white/80 hover:text-accent transition-all duration-300 relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link 
                  to="/help" 
                  className="text-sm text-white/80 hover:text-accent transition-all duration-300 relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  to="/track-order" 
                  className="text-sm text-white/80 hover:text-accent transition-all duration-300 relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Connect With Us</h3>
            <ul className="space-y-2 text-sm text-white/80 mb-4">
              <li>📧 hr@sparesshop.net</li>
              <li>🌐 www.myelectrokart.com</li>
              <li>📍 301, 3rd Floor, B-Block CCC, VIP Road, Zirakpur</li>
              <li>🏭 Plot No.6, Balaji Complex, Saidpura, DeraBassi</li>
              <li>🧾 GST: 03AAICE8326L1ZG</li>
            </ul>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-secondary transition-all duration-300 hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-secondary transition-all duration-300 hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-secondary transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-secondary transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/80">
            © 2025 Esinti Private Limited. All rights reserved. | GST: 03AAICE8326L1ZG
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
