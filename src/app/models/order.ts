import { CartItem } from './cart-item';

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customer: {
    name: string;
    address: string;
    phone?: string;
    notes?: string;
  };
  createdAt: string; // ISO
}
