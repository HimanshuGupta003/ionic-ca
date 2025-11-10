import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonList } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonList, FormsModule, CurrencyPipe]
})
export class CheckoutPage {
  name = '';
  address = '';
  phone = '';

  constructor(private router: Router, public cart: CartService) {}

  placeOrder() {
    // Minimal validation
    if (!this.name || !this.address) return;
    const order = {
      id: Date.now().toString(),
      items: this.cart.items,
      total: this.cart.total,
      customer: { name: this.name, address: this.address, phone: this.phone },
      createdAt: new Date().toISOString(),
    };
    // Persist a simple last-order for confirmation page
    localStorage.setItem('last-order', JSON.stringify(order));
    this.cart.clear();
    this.router.navigateByUrl('/order-confirmation');
  }
}
