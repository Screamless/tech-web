
export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  features: string[];
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}
