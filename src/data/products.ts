import wig1 from "@/assets/wigs/wig-1.jpg";
import wig2 from "@/assets/wigs/wig-2.jpg";
import wig3 from "@/assets/wigs/wig-3.jpg";
import wig4 from "@/assets/wigs/wig-4.jpg";
import wig5 from "@/assets/wigs/wig-5.jpg";
import wig6 from "@/assets/wigs/wig-6.jpg";
import wig7 from "@/assets/wigs/wig-7.jpg";
import wig8 from "@/assets/wigs/wig-8.jpg";
import wig9 from "@/assets/wigs/wig-9.jpg";
import wig10 from "@/assets/wigs/wig-10.jpg";
import wig11 from "@/assets/wigs/wig-11.jpg";
import wig12 from "@/assets/wigs/wig-12.jpg";
import wig13 from "@/assets/wigs/wig-13.jpg";
import wig14 from "@/assets/wigs/wig-14.jpg";
import wig15 from "@/assets/wigs/wig-15.jpg";
import wig16 from "@/assets/wigs/wig-16.jpg";
import wig17 from "@/assets/wigs/wig-17.jpg";
import wig18 from "@/assets/wigs/wig-18.jpg";
import wig19 from "@/assets/wigs/wig-19.jpg";
import wig20 from "@/assets/wigs/wig-20.jpg";
import wig21 from "@/assets/wigs/wig-21.jpg";
import wig22 from "@/assets/wigs/wig-22.jpg";
import wig23 from "@/assets/wigs/wig-23.jpg";
import wig24 from "@/assets/wigs/wig-24.jpg";
import wig25 from "@/assets/wigs/wig-25.jpg";
import wig26 from "@/assets/wigs/wig-26.jpg";

export interface WigProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

export const products: WigProduct[] = [
  { 
    id: "1", 
    name: "Natural Scalp Topper", 
    price: 4999, 
    image: wig1, 
    category: "Topper",
    description: "Premium quality natural scalp hair topper with realistic parting. Perfect for adding volume and coverage."
  },
  { 
    id: "2", 
    name: "Silk Base Fringe", 
    price: 3499, 
    image: wig2, 
    category: "Fringe",
    description: "Elegant silk base fringe piece for instant bangs. Lightweight and comfortable for all-day wear."
  },
  { 
    id: "3", 
    name: "Clip-In Crown Piece", 
    price: 3999, 
    image: wig3, 
    category: "Crown",
    description: "Easy clip-in crown volumizer. Adds instant fullness to the crown area."
  },
  { 
    id: "4", 
    name: "Hand-Tied Hair Piece", 
    price: 5499, 
    image: wig4, 
    category: "Hair Piece",
    description: "Meticulously hand-tied for a natural movement and appearance. Premium 100% human hair."
  },
  { 
    id: "5", 
    name: "Lace Front Topper", 
    price: 6299, 
    image: wig5, 
    category: "Topper",
    description: "Invisible lace front topper with natural hairline. Features secure clips for confident wear."
  },
  { 
    id: "6", 
    name: "Full Coverage Topper", 
    price: 6999, 
    image: wig6, 
    category: "Topper",
    description: "Maximum coverage topper with wavy texture. Ideal for significant hair loss or volume needs."
  },
  { 
    id: "7", 
    name: "Silk Top Crown", 
    price: 5499, 
    image: wig7, 
    category: "Crown",
    description: "Silk top construction creates the illusion of natural scalp. Seamless blending guaranteed."
  },
  { 
    id: "8", 
    name: "Volumizing Crown Piece", 
    price: 4799, 
    image: wig8, 
    category: "Crown",
    description: "Instant volume boost for the crown and top of head. Natural-looking density."
  },
  { 
    id: "9", 
    name: "Natural Part Topper", 
    price: 5299, 
    image: wig9, 
    category: "Topper",
    description: "Features a natural center part with realistic scalp appearance. Versatile styling options."
  },
  { 
    id: "10", 
    name: "Luxury Wave Topper", 
    price: 5999, 
    image: wig10, 
    category: "Topper",
    description: "Beautiful natural wave pattern. Premium quality with soft, silky texture."
  },
  { 
    id: "11", 
    name: "Wavy Hair Extension", 
    price: 3299, 
    image: wig11, 
    category: "Extension",
    description: "Premium wavy hair extension for adding length and volume. Easy to blend with natural hair."
  },
  { 
    id: "12", 
    name: "Side Swept Fringe", 
    price: 2999, 
    image: wig12, 
    category: "Fringe",
    description: "Elegant side-swept fringe piece. Perfect for framing the face with soft, natural bangs."
  },
  { 
    id: "13", 
    name: "3-Clip Silk Topper", 
    price: 5799, 
    image: wig13, 
    category: "Topper",
    description: "Secure 3-clip attachment with silk base. Provides excellent coverage with comfortable wear."
  },
  { 
    id: "14", 
    name: "Auburn Wave Topper", 
    price: 6499, 
    image: wig14, 
    category: "Topper",
    description: "Beautiful auburn wavy topper with 4-clip design. Adds gorgeous color and volume."
  },
  { 
    id: "15", 
    name: "Mono Base Topper", 
    price: 5999, 
    image: wig15, 
    category: "Topper",
    description: "Monofilament base for realistic scalp appearance. Breathable and comfortable construction."
  },
  { 
    id: "16", 
    name: "Swiss Lace Toupee", 
    price: 7499, 
    image: wig16, 
    category: "Toupee",
    description: "Premium Swiss lace front with PU back. Undetectable hairline for men and women."
  },
  { 
    id: "17", 
    name: "M1 Mono System", 
    price: 8999, 
    image: wig17, 
    category: "Toupee",
    description: "Professional M1 mono hair replacement system. Durable construction with natural appearance."
  },
  { 
    id: "18", 
    name: "French Lace Toupee", 
    price: 7999, 
    image: wig18, 
    category: "Toupee",
    description: "Delicate French lace with PU perimeter. Offers versatile styling and secure attachment."
  },
  { 
    id: "19", 
    name: "Clip-In Wave Topper", 
    price: 5499, 
    image: wig19, 
    category: "Topper",
    description: "Long wavy topper with secure clip attachment. Natural body wave for effortless style."
  },
  { 
    id: "20", 
    name: "Natural Wave Weft", 
    price: 4299, 
    image: wig20, 
    category: "Extension",
    description: "Premium weft extension with natural wave pattern. Easy clip-in application."
  },
  { 
    id: "21", 
    name: "Halo Wire Extension", 
    price: 4499, 
    image: wig21, 
    category: "Extension",
    description: "Invisible wire halo extension with gorgeous body waves. No clips needed - adjustable wire fits all."
  },
  { 
    id: "22", 
    name: "U-Part Straight Wig", 
    price: 5299, 
    image: wig22, 
    category: "Extension",
    description: "Silky straight U-part wig for natural blending. Leave out your own hair for seamless look."
  },
  { 
    id: "23", 
    name: "I-Tip Hair Strands", 
    price: 3999, 
    image: wig23, 
    category: "Bonding",
    description: "Premium I-tip keratin bonded hair. Single and double drawn options for professional application."
  },
  { 
    id: "24", 
    name: "Full Lace Curly Toupee", 
    price: 8499, 
    image: wig24, 
    category: "Toupee",
    description: "Full lace construction with natural curly pattern. 360-degree parting versatility."
  },
  { 
    id: "25", 
    name: "Micro Loop Extensions", 
    price: 2999, 
    image: wig25, 
    category: "Bonding",
    description: "Pre-looped micro ring extensions. Easy installation without heat or glue."
  },
  { 
    id: "26", 
    name: "Flat Tip Bonded Hair", 
    price: 3499, 
    image: wig26, 
    category: "Bonding",
    description: "Premium flat tip keratin bonds. Discreet attachment for natural movement."
  },
];

export const categories = ["All", "Topper", "Crown", "Fringe", "Toupee", "Extension", "Bonding", "Hair Piece"];

// WhatsApp configuration
export const WHATSAPP_NUMBER = "919876543210"; // Replace with your WhatsApp number

// UPI configuration
export const UPI_ID = "yourname@upi"; // Replace with your UPI ID
