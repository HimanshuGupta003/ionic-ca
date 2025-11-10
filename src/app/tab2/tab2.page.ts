import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton, IonThumbnail, IonImg, IonBadge, IonCard, IonIcon } from '@ionic/angular/standalone';
import { MenuService } from '../services/menu.service';
import { CartService } from '../services/cart.service';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { addCircle, removeCircle, cart as cartIcon } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton, IonThumbnail, IonImg, IonBadge, IonCard, IonIcon, CurrencyPipe, NgFor, NgIf]
})
export class Tab2Page {
  showAddedFeedback = false;

  constructor(public menu: MenuService, public cart: CartService, private router: Router) {
    addIcons({ 'add-circle': addCircle, 'remove-circle': removeCircle, cart: cartIcon });
  }

  addToCart(id: number) {
    const item = this.menu.getById(id);
    if (item) {
      this.cart.add(item, 1);
      // Show brief feedback animation
      this.showAddedFeedback = true;
      setTimeout(() => {
        this.showAddedFeedback = false;
      }, 500);
    }
  }

  getItemQuantity(id: number): number {
    const cartItem = this.cart.items.find(ci => ci.item.id === id);
    return cartItem ? cartItem.quantity : 0;
  }

  increaseQuantity(id: number) {
    const currentQty = this.getItemQuantity(id);
    this.cart.setQuantity(id, currentQty + 1);
    this.showAddedFeedback = true;
    setTimeout(() => {
      this.showAddedFeedback = false;
    }, 500);
  }

  decreaseQuantity(id: number) {
    const currentQty = this.getItemQuantity(id);
    if (currentQty > 0) {
      this.cart.setQuantity(id, currentQty - 1);
    }
  }

  goToCart() {
    this.router.navigateByUrl('/tabs/tab3');
  }

  handleImageError(event: any) {
    // Fallback to a simple food icon using data URI
    event.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MiIgaGVpZ2h0PSI3MiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMzODgwZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMyAyaDEzYTUgNSAwIDAgMSA1IDV2MTRhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJWN2E1IDUgMCAwIDEgNS01eiIvPjxwYXRoIGQ9Ik0zIDdoMTgiLz48cGF0aCBkPSJNOCAxNWg4Ii8+PC9zdmc+';
  }

  getCategoryIcon(category?: string): string {
    switch ((category || '').toLowerCase()) {
      case 'pizza': return 'pizza';
      case 'burgers': return 'fast-food';
      case 'pasta': return 'restaurant';
      case 'salad': return 'leaf';
      case 'indian': return 'flame';
      case 'japanese': return 'fish';
      case 'dessert': return 'ice-cream';
      case 'snacks': return 'fast-food';
      default: return 'nutrition';
    }
  }
}
