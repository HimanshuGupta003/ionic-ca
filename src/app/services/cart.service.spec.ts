import { TestBed } from '@angular/core/testing';
import { CartService } from './cart.service';
import { FoodItem } from '../models/food-item';

describe('CartService', () => {
  let service: CartService;
  const pizza: FoodItem = { id: 1, name: 'Test Pizza', price: 10 };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
    // Make sure tests start clean
    service.clear();
  });

  it('adds items and computes total', () => {
    service.add(pizza, 2);
    expect(service.items.length).toBe(1);
    expect(service.total).toBe(20);
  });

  it('updates quantity and removes when set to zero', () => {
    service.add(pizza, 1);
    service.setQuantity(1, 3);
    expect(service.items[0].quantity).toBe(3);
    service.setQuantity(1, 0);
    expect(service.items.length).toBe(0);
  });

  it('clears the cart', () => {
    service.add(pizza, 1);
    service.clear();
    expect(service.items.length).toBe(0);
    expect(service.total).toBe(0);
  });
});
