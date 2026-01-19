export interface WigProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

// Sample products - replace images with your actual wig images
export const products: WigProduct[] = [
  { id: "1", name: "Silky Straight Long", price: 4999, image: "/placeholder.svg", category: "Straight" },
  { id: "2", name: "Natural Wave Bob", price: 3499, image: "/placeholder.svg", category: "Wavy" },
  { id: "3", name: "Deep Curly Full Lace", price: 6999, image: "/placeholder.svg", category: "Curly" },
  { id: "4", name: "Body Wave HD Lace", price: 5499, image: "/placeholder.svg", category: "Wavy" },
  { id: "5", name: "Kinky Curly Natural", price: 4299, image: "/placeholder.svg", category: "Curly" },
  { id: "6", name: "Straight Bob Cut", price: 2999, image: "/placeholder.svg", category: "Straight" },
  { id: "7", name: "Loose Wave Premium", price: 5999, image: "/placeholder.svg", category: "Wavy" },
  { id: "8", name: "Water Wave Luxury", price: 6499, image: "/placeholder.svg", category: "Wavy" },
  { id: "9", name: "Yaki Straight Natural", price: 4499, image: "/placeholder.svg", category: "Straight" },
  { id: "10", name: "Deep Wave Full", price: 5799, image: "/placeholder.svg", category: "Wavy" },
  { id: "11", name: "Afro Kinky Coil", price: 3999, image: "/placeholder.svg", category: "Curly" },
  { id: "12", name: "Silky Closure Wig", price: 3299, image: "/placeholder.svg", category: "Straight" },
];

export const categories = ["All", "Straight", "Wavy", "Curly"];

// WhatsApp configuration
export const WHATSAPP_NUMBER = "919876543210"; // Replace with your WhatsApp number

// UPI configuration
export const UPI_ID = "yourname@upi"; // Replace with your UPI ID
