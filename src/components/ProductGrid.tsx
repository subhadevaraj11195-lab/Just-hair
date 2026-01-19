import { useState } from "react";
import { products, categories, WigProduct } from "@/data/products";
import ProductCard from "./ProductCard";
import ProductDetailModal from "./ProductDetailModal";

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<WigProduct | null>(null);

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleProductClick = (product: WigProduct) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section id="collection" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            Our Collection
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Premium Hair Wigs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked selection of premium quality wigs. Each piece is crafted 
            with care to give you the perfect natural look.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal 
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default ProductGrid;
