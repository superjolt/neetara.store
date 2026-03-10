export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  details: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Kanchipuram Silk Saree",
    price: 12500,
    image: "/placeholder.svg",
    category: "Sarees",
    description: "Elegant Kanchipuram silk saree with intricate zari work and traditional temple border design.",
    details: ["Pure silk fabric", "Handwoven zari border", "6.3 meters with blouse piece", "Dry clean only"],
  },
  {
    id: "2",
    name: "Banarasi Silk Saree",
    price: 9800,
    image: "/placeholder.svg",
    category: "Sarees",
    description: "Beautiful Banarasi silk saree featuring rich brocade patterns and a luxurious finish.",
    details: ["Banarasi silk", "Gold zari weaving", "6.3 meters with blouse piece", "Dry clean only"],
  },
  {
    id: "3",
    name: "Cotton Churidar Set",
    price: 3200,
    image: "/placeholder.svg",
    category: "Churidar",
    description: "Comfortable cotton churidar set with elegant embroidery and matching dupatta.",
    details: ["Pure cotton fabric", "Machine embroidery", "Top, bottom & dupatta included", "Machine washable"],
  },
  {
    id: "4",
    name: "Designer Anarkali Suit",
    price: 6500,
    image: "/placeholder.svg",
    category: "Churidar",
    description: "Stunning designer Anarkali suit with floral prints and flared silhouette.",
    details: ["Georgette fabric", "Digital print", "Semi-stitched", "Dry clean recommended"],
  },
  {
    id: "5",
    name: "Organza Silk Saree",
    price: 7800,
    image: "/placeholder.svg",
    category: "Sarees",
    description: "Lightweight organza silk saree with delicate floral embroidery and scalloped border.",
    details: ["Organza silk", "Hand embroidered", "5.5 meters with blouse piece", "Dry clean only"],
  },
  {
    id: "6",
    name: "Palazzo Kurta Set",
    price: 4500,
    image: "/placeholder.svg",
    category: "Churidar",
    description: "Trendy palazzo kurta set with block print design, perfect for casual and festive wear.",
    details: ["Rayon fabric", "Block print", "Kurta & palazzo included", "Machine washable"],
  },
  {
    id: "7",
    name: "Mysore Silk Saree",
    price: 5600,
    image: "/placeholder.svg",
    category: "Sarees",
    description: "Classic Mysore silk saree with rich color palette and traditional kasuti embroidery.",
    details: ["Mysore silk", "Kasuti embroidery", "6.3 meters with blouse piece", "Dry clean only"],
  },
  {
    id: "8",
    name: "Embroidered Salwar Suit",
    price: 3800,
    image: "/placeholder.svg",
    category: "Churidar",
    description: "Elegant embroidered salwar suit with chiffon dupatta, ideal for festive occasions.",
    details: ["Cotton blend", "Thread embroidery", "Top, bottom & dupatta", "Hand wash recommended"],
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
