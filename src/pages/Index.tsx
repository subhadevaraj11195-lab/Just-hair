import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WomenToppersCarousel from "@/components/WomenToppersCarousel";
import MenToppersSection from "@/components/MenToppersSection";
import ProductGrid from "@/components/ProductGrid";
import PaymentSection from "@/components/PaymentSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WomenToppersCarousel />
      <MenToppersSection />
      <ProductGrid />
      <PaymentSection />
      <Footer />
    </div>
  );
};

export default Index;
