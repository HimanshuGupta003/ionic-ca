import { FoodItem } from './food-item';

export interface CartItem {
  item: FoodItem;
  quantity: number;
}
