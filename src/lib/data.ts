import { Product, Category, ContactInfo } from './types';

export type { Product, Category, ContactInfo };

export const categories: Category[] = [
  {
    id: 'god-idols',
    name: 'God Idols',
    description: 'Divine idols of various deities crafted with precision and devotion',
    image: '/images/categories/god-idols.jpg',
    products: [
      {
        id: 'krishna-idol-1',
        name: 'Banke Bihari Ji Marble Idol',
        category: 'god-idols',
        description: 'Beautiful white marble idol of Banke Bihari Ji with intricate details',
        image: '/images/products/krishna-idol-1.jpg',
        features: ['Pure White Marble', 'Handcrafted', '24-inch height']
      },
      {
        id: 'radha-krishna-idol-1',
        name: 'Radha Krishna Marble Idol',
        category: 'god-idols',
        description: 'Divine Radha Krishna pair in loving embrace',
        image: '/images/products/radha-krishna-idol-1.jpg',
        features: ['Marble Dust Material', 'Hand Painted', '18-inch height']
      }
    ]
  },
  {
    id: 'marble-murtis',
    name: 'Marble Dust Murtis',
    description: 'Exquisite marble dust murtis for home and temple decoration',
    image: '/images/categories/marble-murtis.jpg',
    products: [
      {
        id: 'ganesh-murti-1',
        name: 'Lord Ganesha Marble Murti',
        category: 'marble-murtis',
        description: 'Blessed Ganesha murti in sitting posture',
        image: '/images/products/ganesh-murti-1.jpg',
        features: ['Marble Dust', 'Antique Finish', '12-inch height']
      }
    ]
  },
  {
    id: 'ittars',
    name: 'Premium Ittars',
    description: 'Traditional and exotic fragrances for spiritual and daily use',
    image: '/images/categories/ittars.jpg',
    products: [
      {
        id: 'rose-ittar-1',
        name: 'Premium Rose Ittar',
        category: 'ittars',
        description: 'Pure rose extract itt ar with long-lasting fragrance',
        image: '/images/products/rose-ittar-1.jpg',
        features: ['Natural Ingredients', 'Alcohol Free', '15ml bottle']
      },
      {
        id: 'sandal-ittar-1',
        name: 'Sandalwood Ittar',
        category: 'ittars',
        description: 'Authentic sandalwood ittar for meditation',
        image: '/images/products/sandal-ittar-1.jpg',
        features: ['Pure Sandalwood', 'Spiritual Fragrance', '10ml bottle']
      }
    ]
  },
  {
    id: 'agarbatti',
    name: 'Premium Agarbattis',
    description: 'High-quality incense sticks for daily worship and meditation',
    image: '/images/categories/agarbatti.jpg',
    products: [
      {
        id: 'champa-agarbatti-1',
        name: 'Champa Agarbatti',
        category: 'agarbatti',
        description: 'Traditional champa fragrance incense sticks',
        image: '/images/products/champa-agarbatti-1.jpg',
        features: ['Natural Ingredients', 'Long Burning', '120 sticks pack']
      }
    ]
  },
  {
    id: 'poshak-jewellery',
    name: 'Laddu Gopal Poshak & Jewellery',
    description: 'Beautiful dresses and jewellery for Laddu Gopal and Radha Rani',
    image: '/images/categories/poshak-jewellery.jpg',
    products: [
      {
        id: 'laddu-gopal-poshak-1',
        name: 'Silk Poshak for Laddu Gopal',
        category: 'poshak-jewellery',
        description: 'Elegant silk dress with intricate embroidery',
        image: '/images/products/laddu-gopal-poshak-1.jpg',
        features: ['Pure Silk', 'Hand Embroidered', 'Available in multiple sizes']
      },
      {
        id: 'radha-rani-jewellery-1',
        name: 'Radha Rani Jewellery Set',
        category: 'poshak-jewellery',
        description: 'Complete jewellery set for Radha Rani idol',
        image: '/images/products/radha-rani-jewellery-1.jpg',
        features: ['Artificial Jewellery', 'Traditional Design', 'Complete Set']
      }
    ]
  },
  {
    id: 'pooja-items',
    name: 'Pooja Path Items',
    description: 'Essential items for daily pooja and spiritual ceremonies',
    image: '/images/categories/pooja-items.jpg',
    products: [
      {
        id: 'pooja-thali-1',
        name: 'Brass Pooja Thali Set',
        category: 'pooja-items',
        description: 'Complete brass thali set with all essentials',
        image: '/images/products/pooja-thali-1.jpg',
        features: ['Pure Brass', 'Complete Set', 'Traditional Design']
      }
    ]
  },
  {
    id: 'vastu-items',
    name: 'Vastu Items',
    description: 'Vastu-compliant items for positive energy and prosperity',
    image: '/images/categories/vastu-items.jpg',
    products: [
      {
        id: 'vastu-pyramid-1',
        name: 'Vastu Energy Pyramid',
        category: 'vastu-items',
        description: 'Energy pyramid for vastu correction',
        image: '/images/products/vastu-pyramid-1.jpg',
        features: ['Crystal Material', 'Energy Balancing', 'Multi-purpose']
      }
    ]
  }
];

export const contactInfo: ContactInfo = {
  phone: '+91 98765 43210',
  email: 'info@bankebiharicreations.com',
  address: 'Shop No. 123, Main Market, Vrindavan, Mathura, Uttar Pradesh - 281121',
  hours: 'Monday - Saturday: 9:00 AM - 8:00 PM, Sunday: 10:00 AM - 6:00 PM'
};

export const featuredProducts: Product[] = [
  categories[0].products[0], // Banke Bihari Ji Marble Idol
  categories[2].products[0], // Premium Rose Ittar
  categories[4].products[0], // Silk Poshak for Laddu Gopal
  categories[6].products[0], // Vastu Energy Pyramid
];
