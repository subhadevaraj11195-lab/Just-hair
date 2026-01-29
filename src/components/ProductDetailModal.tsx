import { MessageCircle, X, Check } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { WigProduct, WHATSAPP_NUMBER } from "@/data/products";

interface ProductDetailModalProps {
  product: WigProduct | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetailModal = ({ product, isOpen, onClose }: ProductDetailModalProps) => {
  if (!product) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi! I'm interested in ordering:\n\n*${product.name}*\nPrice: ${formatPrice(product.price)}\n\nPlease provide more details.`
  )}`;

  const features = [
    "100% Human Hair",
    "Natural Hairline",
    "Breathable Cap",
    "Heat Resistant",
    "Easy to Style",
    "Long Lasting",
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card">
        <DialogTitle className="sr-only">{product.name} - Product Details</DialogTitle>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
        >
          <X size={20} className="text-foreground" />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative aspect-square md:aspect-auto bg-muted">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="p-6 md:p-8 flex flex-col">
            <span className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
              {product.category}
            </span>
            
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
              {product.name}
            </h2>
            
            <p className="text-3xl font-bold text-primary mb-6">
              {formatPrice(product.price)}
            </p>

            {product.description && (
              <p className="text-muted-foreground mb-6">
                {product.description}
              </p>
            )}

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                Features
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Order Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto flex items-center justify-center gap-2 px-6 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={20} />
              Order on WhatsApp
            </a>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Click to chat with us and place your order
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;
