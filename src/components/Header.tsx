import { Menu, X, Scissors } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <Scissors className="w-6 h-6 md:w-7 md:h-7 text-primary" />
            <span className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              Just<span className="text-primary">Hair</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#collection" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Collection
            </a>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#payment" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Payment
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <a 
                href="#collection" 
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Collection
              </a>
              <a 
                href="#about" 
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a 
                href="#payment" 
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Payment
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
