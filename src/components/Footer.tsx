import { MessageCircle, Instagram, Mail, MapPin } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/products";

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary text-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-2xl font-serif font-bold">
                Just<span className="text-primary">Hair</span>
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Premium quality hair wigs for men and women. 
              Transform your look with our exquisite collection.
            </p>
            <div className="flex gap-4">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={18} />
              </a>
              <a 
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-pink-500 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="mailto:hello@justhair.com"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#collection" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Our Collection
                </a>
              </li>
              <li>
                <a href="#payment" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  How to Order
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MessageCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span>WhatsApp: +91 81248 59037</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span>hello@justhair.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span>Chennai, Tamilnadu, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 JustHair. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
