import { Smartphone, CreditCard, MessageCircle, Shield } from "lucide-react";
import { UPI_ID, WHATSAPP_NUMBER } from "@/data/products";

const PaymentSection = () => {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Hi! I'd like to inquire about payment options for ordering wigs."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section id="payment" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            Easy Payments
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            How to Order
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We accept UPI payments for quick and secure transactions. 
            Contact us on WhatsApp to place your order.
          </p>
        </div>

        {/* Payment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="bg-card p-8 rounded-xl shadow-soft text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
              1. Contact Us
            </h3>
            <p className="text-muted-foreground text-sm">
              Click the WhatsApp button on any product to start a conversation with us.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-card p-8 rounded-xl shadow-soft text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Smartphone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
              2. Pay via UPI
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Make payment using any UPI app - Google Pay, PhonePe, Paytm, etc.
            </p>
            <div className="bg-secondary rounded-lg p-4">
              <p className="text-xs text-muted-foreground mb-1">Our UPI ID</p>
              <p className="text-foreground font-mono font-semibold">{UPI_ID}</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-card p-8 rounded-xl shadow-soft text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
              3. Receive Your Wig
            </h3>
            <p className="text-muted-foreground text-sm">
              Share payment screenshot on WhatsApp. We'll ship your order within 2-3 days.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={handleWhatsAppContact}
            className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-all duration-300 shadow-soft hover:shadow-hover"
          >
            <MessageCircle size={20} />
            Chat with Us on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
