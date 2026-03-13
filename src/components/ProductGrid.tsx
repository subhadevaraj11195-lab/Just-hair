import { useState } from "react";
import { products, categories, genderFilters, WigProduct } from "@/data/products";
import ProductCard from "./ProductCard";
import ProductDetailModal from "./ProductDetailModal";

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeGender, setActiveGender] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<WigProduct | null>(null);

  const filteredProducts = products.filter(p => {
    const categoryMatch = activeCategory === "All" || p.category === activeCategory;
    const genderMatch = activeGender === "All" || p.gender === activeGender;
    return categoryMatch && genderMatch;
  });

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
            Explore our handpicked selection of premium quality wigs for men and women. Each piece is crafted 
            with care to give you the perfect natural look.
          </p>
        </div>

        {/* Gender Filter */}
        <div className="flex justify-center gap-3 mb-6">
          {genderFilters.map((gender) => (
            <button
              key={gender}
              onClick={() => setActiveGender(gender)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                activeGender === gender
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/20"
              }`}
            >
              {gender}
            </button>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-medium text-xs transition-all duration-300 ${
                activeCategory === category
                  ? "bg-accent text-accent-foreground shadow-soft"
                  : "bg-muted text-muted-foreground hover:bg-accent/20"
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

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found in this category.</p>
          </div>
        )}
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
