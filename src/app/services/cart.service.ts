import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item';
import { FoodItem } from '../models/food-item';

const STORAGE_KEY = 'food-ordering-cart';

@Injectable({ providedIn: 'root' })
export class CartService {
  private itemsSubject = new BehaviorSubject<CartItem[]>(this.load());
  items$ = this.itemsSubject.asObservable();

  private load(): CartItem[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as CartItem[]) : [];
    } catch {
      return [];
    }
  }

  private persist(items: CartItem[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }

  get items(): CartItem[] {
    return this.itemsSubject.value;
  }

  clear() {
    this.itemsSubject.next([]);
    this.persist([]);
  }

  add(item: FoodItem, qty = 1) {
    const items = [...this.items];
    const idx = items.findIndex(ci => ci.item.id === item.id);
    if (idx > -1) {
      items[idx] = { ...items[idx], quantity: items[idx].quantity + qty };
    } else {
      items.push({ item, quantity: qty });
    }
    this.itemsSubject.next(items);
    this.persist(items);
  }

  remove(itemId: number) {
    const items = this.items.filter(ci => ci.item.id !== itemId);
    this.itemsSubject.next(items);
    this.persist(items);
  }

  setQuantity(itemId: number, qty: number) {
    let items = [...this.items];
    const idx = items.findIndex(ci => ci.item.id === itemId);
    if (idx > -1) {
      if (qty <= 0) {
        items = items.filter(ci => ci.item.id !== itemId);
      } else {
        items[idx] = { ...items[idx], quantity: qty };
      }
      this.itemsSubject.next(items);
      this.persist(items);
    }
  }

  get total(): number {
    return this.items.reduce((sum, ci) => sum + ci.item.price * ci.quantity, 0);
  }
}
