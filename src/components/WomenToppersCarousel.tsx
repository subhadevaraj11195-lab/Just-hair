import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products, WigProduct } from "@/data/products";
import ProductDetailModal from "./ProductDetailModal";

const womenToppers = products.filter(
  (p) => p.category === "Topper" && p.gender === "Women"
);

const WomenToppersCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<WigProduct | null>(null);

  const next = () => setCurrent((i) => (i + 1) % womenToppers.length);
  const prev = () => setCurrent((i) => (i - 1 + womenToppers.length) % womenToppers.length);

  const product = womenToppers[current];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            Women's Collection
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-3">
            Hair Toppers
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-primary">
            ₹14,320 – ₹30,000
          </p>
        </div>

        <div className="relative max-w-lg mx-auto">
          {/* Image */}
          <div
            className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-hover bg-muted cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-foreground/70 to-transparent p-6">
              <h3 className="text-lg font-serif font-semibold text-white">
                {product.name}
              </h3>
              <p className="text-white/80 text-sm">
                {product.priceDisplay || `₹${product.price.toLocaleString("en-IN")}`}
              </p>
            </div>
          </div>

          {/* Nav Buttons */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm shadow-soft hover:bg-background transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm shadow-soft hover:bg-background transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {womenToppers.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <ProductDetailModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};

export default WomenToppersCarousel;
