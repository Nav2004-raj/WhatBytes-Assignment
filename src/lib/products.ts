export type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: "Electronics" | "Clothing" | "Home";
  brand: string;
  image: string;
};

export const products: Product[] = [
  {
    id: "1",
    title: "Running Shoes",
    price: 99,
    description: "Lightweight shoes designed for comfort and speed.",
    category: "Clothing",
    brand: "Sportic",
    image:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    title: "Wireless Headphones",
    price: 99,
    description: "Noise-canceling over-ear headphones with long battery life.",
    category: "Electronics",
    brand: "Soundly",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    title: "Backpack",
    price: 129,
    description: "Durable backpack with padded straps and organizer pockets.",
    category: "Home",
    brand: "Packly",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    title: "Smartwatch",
    price: 249,
    description: "Fitness tracking watch with heart-rate monitor.",
    category: "Electronics",
    brand: "TimeTech",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "5",
    title: "Sunglasses",
    price: 149,
    description: "Stylish polarized sunglasses for everyday wear.",
    category: "Electronics",
    brand: "SunSeer",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "6",
    title: "Digital Camera",
    price: 499,
    description: "High-resolution camera with optical zoom.",
    category: "Electronics",
    brand: "CapturePro",
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "7",
    title: "T-shirt",
    price: 29,
    description: "Soft cotton t-shirt with classic fit.",
    category: "Clothing",
    brand: "Cottonix",
    image:
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "8",
    title: "Smartphone",
    price: 699,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    category: "Electronics",
    brand: "PhoneMax",
    image:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
  },
];
