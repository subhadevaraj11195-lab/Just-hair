import { MessageCircle } from "lucide-react";
import { WigProduct, WHATSAPP_NUMBER } from "@/data/products";

interface ProductCardProps {
  product: WigProduct;
  index: number;
  onClick?: () => void;
}

const ProductCard = ({ product, index, onClick }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const whatsappUrl = "https://wa.me/8124859037";

  return (
    <div 
      className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500 animate-fade-in opacity-0 cursor-pointer"
      style={{ animationDelay: `${0.1 * index}s` }}
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
        
        {/* Quick Order Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white font-medium rounded-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-green-600"
        >
          <MessageCircle size={18} />
          Order on WhatsApp
        </a>
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="text-xs font-medium text-primary uppercase tracking-wider">
          {product.category}
        </span>
        <h3 className="text-lg font-serif font-semibold text-foreground mt-1 mb-2">
          {product.name}
        </h3>
        <p className="text-xl font-bold text-primary">
          {formatPrice(product.price)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
