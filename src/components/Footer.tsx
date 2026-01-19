import { MessageCircle, Instagram, Mail, MapPin } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/products";

const Footer = () => {
  return (
    <footer id="contact" className="bg-charcoal text-warm-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">
              Luxe<span className="text-rose-gold">Wigs</span>
            </h3>
            <p className="text-warm-white/70 text-sm leading-relaxed mb-6">
              Premium quality hair wigs for the modern woman. 
              Transform your look with our exquisite collection.
            </p>
            <div className="flex gap-4">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-warm-white/10 flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <MessageCircle size={18} />
              </a>
              <a 
                href="#"
                className="w-10 h-10 rounded-full bg-warm-white/10 flex items-center justify-center hover:bg-pink-500 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="mailto:hello@luxewigs.com"
                className="w-10 h-10 rounded-full bg-warm-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#collection" className="text-warm-white/70 hover:text-rose-gold transition-colors text-sm">
                  Our Collection
                </a>
              </li>
              <li>
                <a href="#payment" className="text-warm-white/70 hover:text-rose-gold transition-colors text-sm">
                  How to Order
                </a>
              </li>
              <li>
                <a href="#about" className="text-warm-white/70 hover:text-rose-gold transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-warm-white/70 hover:text-rose-gold transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-warm-white/70">
                <MessageCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span>WhatsApp: +91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-warm-white/70">
                <Mail size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span>hello@luxewigs.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-warm-white/70">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-warm-white/10 text-center">
          <p className="text-warm-white/50 text-sm">
            © 2024 LuxeWigs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
