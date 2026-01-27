import heroImage from "@/assets/hero-wig.jpg";
import { Scissors } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Premium hair wigs" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            <Scissors className="w-5 h-5 text-primary" />
            <p className="text-primary font-medium tracking-widest uppercase text-sm">
              Premium Quality Wigs
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            Discover Your
            <span className="block text-gradient">Perfect Look</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
            Transform your style with our exquisite collection of premium hair wigs for men and women. 
            Natural, beautiful, and crafted for perfection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
            <a 
              href="#collection" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-all duration-300 shadow-soft hover:shadow-hover"
            >
              Shop Collection
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-foreground font-medium rounded-lg border-2 border-primary/40 hover:border-primary hover:text-primary transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
