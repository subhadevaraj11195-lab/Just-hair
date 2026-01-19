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
];

export const categories = ["All", "Topper", "Crown", "Fringe", "Hair Piece"];

// WhatsApp configuration
export const WHATSAPP_NUMBER = "919876543210"; // Replace with your WhatsApp number

// UPI configuration
export const UPI_ID = "yourname@upi"; // Replace with your UPI ID
