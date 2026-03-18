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
import wig27 from "@/assets/wigs/wig-27.jpg";
import wig28 from "@/assets/wigs/wig-28.jpg";
import wig29 from "@/assets/wigs/wig-29.jpg";
import wig30 from "@/assets/wigs/wig-30.jpg";

export interface WigProduct {
  id: string;
  name: string;
  price: number;
  priceDisplay?: string;
  image: string;
  category: string;
  gender: "Women" | "Men";
  description?: string;
}

export const products: WigProduct[] = [
  // === TOPPERS - Women ===
  { 
    id: "1", 
    name: "Natural Scalp Topper", 
    price: 14320, 
    image: wig1, 
    category: "Topper",
    gender: "Women",
    description: "Premium quality natural scalp hair topper with realistic parting. Perfect for adding volume and coverage."
  },
  { 
    id: "5", 
    name: "Lace Front Topper", 
    price: 15499, 
    image: wig5, 
    category: "Topper",
    gender: "Women",
    description: "Invisible lace front topper with natural hairline. Features secure clips for confident wear."
  },
  { 
    id: "6", 
    name: "Full Coverage Topper", 
    price: 16999, 
    image: wig6, 
    category: "Topper",
    gender: "Women",
    description: "Maximum coverage topper with wavy texture. Ideal for significant hair loss or volume needs."
  },
  { 
    id: "9", 
    name: "Natural Part Topper", 
    price: 17999, 
    image: wig9, 
    category: "Topper",
    gender: "Women",
    description: "Features a natural center part with realistic scalp appearance. Versatile styling options."
  },
  { 
    id: "10", 
    name: "Luxury Wave Topper", 
    price: 18999, 
    image: wig10, 
    category: "Topper",
    gender: "Women",
    description: "Beautiful natural wave pattern. Premium quality with soft, silky texture."
  },
  { 
    id: "13", 
    name: "3-Clip Silk Topper", 
    price: 19999, 
    image: wig13, 
    category: "Topper",
    gender: "Women",
    description: "Secure 3-clip attachment with silk base. Provides excellent coverage with comfortable wear."
  },
  { 
    id: "14", 
    name: "Auburn Wave Topper", 
    price: 20999, 
    image: wig14, 
    category: "Topper",
    gender: "Women",
    description: "Beautiful auburn wavy topper with 4-clip design. Adds gorgeous color and volume."
  },
  { 
    id: "15", 
    name: "Mono Base Topper", 
    price: 21999, 
    image: wig15, 
    category: "Topper",
    gender: "Women",
    description: "Monofilament base for realistic scalp appearance. Breathable and comfortable construction."
  },
  { 
    id: "19", 
    name: "Clip-In Wave Topper", 
    price: 22999, 
    image: wig19, 
    category: "Topper",
    gender: "Women",
    description: "Long wavy topper with secure clip attachment. Natural body wave for effortless style."
  },
  { 
    id: "29", 
    name: "Silk Base Topper", 
    price: 16500, 
    image: wig29, 
    category: "Topper",
    gender: "Women",
    description: "Premium silk base topper with natural center parting. Realistic scalp appearance with soft, flowing hair."
  },
  { 
    id: "30", 
    name: "3-Clip Mono Topper", 
    price: 17500, 
    image: wig30, 
    category: "Topper",
    gender: "Women",
    description: "Monofilament base topper with 3-clip secure attachment. Showcases realistic base construction for confident wear."
  },
  // === TOPPERS - Men ===
  { 
    id: "16", 
    name: "Mono Hair system", 
    price: 24999, 
    image: wig16, 
    category: "Topper",
    gender: "Men",
    description: "Premium Swiss lace front with PU back. Undetectable hairline for men."
  },
  { 
    id: "17", 
    name: "Swiss Lace Hair system", 
    price: 25999, 
    image: wig17, 
    category: "Topper",
    gender: "Men",
    description: "Professional M1 mono hair replacement system. Durable construction with natural appearance."
  },
  { 
    id: "18", 
    name: "Mirage Hair System", 
    price: 26999, 
    image: wig18, 
    category: "Topper",
    gender: "Men",
    description: "Delicate French lace with PU perimeter. Offers versatile styling and secure attachment."
  },
  { 
    id: "24", 
    name: "Front Lace Hair System", 
    price: 27999, 
    image: wig24, 
    category: "Topper",
    gender: "Men",
    description: "Full lace construction with natural curly pattern. 360-degree parting versatility."
  },
  { 
    id: "28", 
    name: "Full Lace Hair System", 
    price: 28999, 
    image: wig28, 
    category: "Topper",
    gender: "Men",
    description: "Premium full lace construction with grey/salt & pepper blend. Breathable base with 360-degree styling freedom."
  },
  { 
    id: "27", 
    name: "Skin Hair System", 
    price: 30000, 
    image: wig27, 
    category: "Topper",
    gender: "Men",
    description: "Ultra-thin PU skin base for undetectable wear. Secure adhesive attachment with natural scalp appearance."
  },
  // === OTHER CATEGORIES ===
  { 
    id: "2", 
    name: "Silk Base Fringe", 
    price: 950, 
    priceDisplay: "₹950 - 1600",
    image: wig2, 
    category: "Fringe",
    gender: "Women",
    description: "Elegant silk base fringe piece for instant bangs. Lightweight and comfortable for all-day wear."
  },
  { 
    id: "3", 
    name: "Clip-In Crown Piece", 
    price: 3999, 
    image: wig3, 
    category: "Crown",
    gender: "Women",
    description: "Easy clip-in crown volumizer. Adds instant fullness to the crown area."
  },
  { 
    id: "4", 
    name: "Hand-Tied Hair Piece", 
    price: 5499, 
    image: wig4, 
    category: "Hair Piece",
    gender: "Women",
    description: "Meticulously hand-tied for a natural movement and appearance. Premium 100% human hair."
  },
  { 
    id: "7", 
    name: "Silk Top Crown", 
    price: 5499, 
    image: wig7, 
    category: "Crown",
    gender: "Women",
    description: "Silk top construction creates the illusion of natural scalp. Seamless blending guaranteed."
  },
  { 
    id: "8", 
    name: "Volumizing Crown Piece", 
    price: 4799, 
    image: wig8, 
    category: "Crown",
    gender: "Women",
    description: "Instant volume boost for the crown and top of head. Natural-looking density."
  },
  { 
    id: "11", 
    name: "Wavy Hair Extension", 
    price: 3299, 
    image: wig11, 
    category: "Extension",
    gender: "Women",
    description: "Premium wavy hair extension for adding length and volume. Easy to blend with natural hair."
  },
  { 
    id: "12", 
    name: "Side Swept Fringe", 
    price: 2999, 
    image: wig12, 
    category: "Fringe",
    gender: "Women",
    description: "Elegant side-swept fringe piece. Perfect for framing the face with soft, natural bangs."
  },
  { 
    id: "20", 
    name: "Natural Weft Extension", 
    price: 12000, 
    priceDisplay: "₹12000 - 26000",
    image: wig20, 
    category: "Extension",
    gender: "Women",
    description: "Premium weft extension with natural wave pattern. Easy clip-in application."
  },
  { 
    id: "21", 
    name: "Halo  Extension", 
    price: 14000, 
    priceDisplay: "₹14000 - 28000",
    image: wig21, 
    category: "Extension",
    gender: "Women",
    description: "Invisible wire halo extension with gorgeous body waves. No clips needed - adjustable wire fits all."
  },
  { 
    id: "22", 
    name: "U-Part Straight Wig", 
    price: 5299, 
    image: wig22, 
    category: "Extension",
    gender: "Women",
    description: "Silky straight U-part wig for natural blending. Leave out your own hair for seamless look."
  },
  { 
    id: "23", 
    name: "I-Tip Hair Strands", 
    price: 6000, 
    priceDisplay: "₹6000 - 23000",
    image: wig23, 
    category: "Bonding",
    gender: "Women",
    description: "Premium I-tip keratin bonded hair. Single and double drawn options for professional application."
  },
  { 
    id: "25", 
    name: "Micro Loop Extensions", 
    price: 8000, 
    priceDisplay: "₹8000 - 28000",
    image: wig25, 
    category: "Bonding",
    gender: "Women",
    description: "Pre-looped micro ring extensions. Easy installation without heat or glue."
  },
  { 
    id: "26", 
    name: "Flat Tip Extension", 
    price: 10000, 
    priceDisplay: "₹10,000 - 30000",
    image: wig26, 
    category: "Bonding",
    gender: "Women",
    description: "Premium flat tip keratin bonds. Discreet attachment for natural movement."
  },
];

export const categories = ["All", "Topper", "Crown", "Fringe", "Extension", "Bonding", "Hair Piece"];
export const genderFilters = ["All", "Women", "Men"];

// WhatsApp configuration
export const WHATSAPP_NUMBER = "918124859037";

// UPI configuration
export const UPI_ID = "yourname@upi"; // Replace with your UPI ID
