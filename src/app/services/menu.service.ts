import { Injectable } from '@angular/core';
import { FoodItem } from '../models/food-item';

@Injectable({ providedIn: 'root' })
export class MenuService {
  private items: FoodItem[] = [
    {
      id: 1,
      name: 'Margherita Pizza',
      description: 'Classic pizza with tomato, mozzarella, and basil.',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=400&q=80',
      category: 'Pizza',
    },
    {
      id: 2,
      name: 'Veggie Burger',
      description: 'Grilled veggie patty with lettuce, tomato, and sauce.',
      price: 7.49,
      image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=400&q=80',
      category: 'Burgers',
    },
    {
      id: 3,
      name: 'Pasta Alfredo',
      description: 'Creamy alfredo sauce with fettuccine.',
      price: 9.5,
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=400&q=80',
      category: 'Pasta',
    },
    {
      id: 4,
      name: 'Caesar Salad',
      description: 'Fresh romaine, parmesan, croutons, and Caesar dressing.',
      price: 6.99,
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=400&q=80',
      category: 'Salad',
    },
    {
      id: 5,
      name: 'Chicken Tikka',
      description: 'Spicy grilled chicken pieces served with chutney.',
      price: 10.99,
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=400&q=80',
      category: 'Indian',
    },
    {
      id: 6,
      name: 'Sushi Platter',
      description: 'Assorted sushi rolls with wasabi and soy sauce.',
      price: 14.99,
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=400&q=80',
      category: 'Japanese',
    },
    {
      id: 7,
      name: 'Chocolate Cake',
      description: 'Rich chocolate cake with creamy frosting.',
      price: 5.99,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80',
      category: 'Dessert',
    },
    {
      id: 8,
      name: 'French Fries',
      description: 'Crispy golden fries with ketchup.',
      price: 3.99,
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80',
      category: 'Snacks',
    },
  ];

  getMenu(): FoodItem[] {
    return this.items;
  }

  getById(id: number): FoodItem | undefined {
    return this.items.find(i => i.id === id);
  }
}
