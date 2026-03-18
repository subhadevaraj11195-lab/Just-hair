import { useState } from "react";
import { products, WigProduct } from "@/data/products";
import ExteriorInteriorSlider from "./ExteriorInteriorSlider";
import ProductDetailModal from "./ProductDetailModal";

import wig16Interior from "@/assets/wigs/wig-16-interior.jpg";
import wig17Interior from "@/assets/wigs/wig-17-interior.jpg";
import wig18Interior from "@/assets/wigs/wig-18-interior.jpg";
import wig24Interior from "@/assets/wigs/wig-24-interior.jpg";
import wig27Interior from "@/assets/wigs/wig-27-interior.jpg";
import wig28Interior from "@/assets/wigs/wig-28-interior.jpg";

const interiorImages: Record<string, string> = {
  "16": wig16Interior,
  "17": wig17Interior,
  "18": wig18Interior,
  "24": wig24Interior,
  "27": wig27Interior,
  "28": wig28Interior,
};

const menToppers = products.filter(
  (p) => p.category === "Topper" && p.gender === "Men"
);

const MenToppersSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<WigProduct | null>(null);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            Men's Collection
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-3">
            Hair Systems
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-primary">
            ₹7,999 – ₹14,999
          </p>
          <p className="text-muted-foreground mt-3 text-sm">
            Drag the slider to see the interior base construction
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {menToppers.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500 animate-fade-in opacity-0"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <ExteriorInteriorSlider
                exteriorImage={product.image}
                interiorImage={interiorImages[product.id]}
                alt={product.name}
              />

              <div className="p-5">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {product.name}
                </span>
                <p className="text-lg font-bold text-primary mt-1">
                  {product.priceDisplay || formatPrice(product.price)}
                </p>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 px-3 py-2 text-xs font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => window.open("https://wa.me/918124859037", "_blank")}
                    className="flex-1 px-3 py-2 text-xs font-medium bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Order on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          ))}
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

export default MenToppersSection;
