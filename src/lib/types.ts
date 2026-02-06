export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  price?: string;
  features?: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  products: Product[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  hours: string;
}
