import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonList, IonItem, IonLabel, IonButton, IonBadge, IonInput, IonIcon } from '@ionic/angular/standalone';
import { CartService } from '../services/cart.service';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton, IonBadge, IonIcon, CurrencyPipe, NgFor, NgIf]
})
export class Tab3Page {
  constructor(public cart: CartService, private router: Router) {
    addIcons({ trash });
  }

  inc(id: number) {
    const ci = this.cart.items.find(c => c.item.id === id);
    if (ci) this.cart.setQuantity(id, ci.quantity + 1);
  }

  dec(id: number) {
    const ci = this.cart.items.find(c => c.item.id === id);
    if (ci) this.cart.setQuantity(id, ci.quantity - 1);
  }

  remove(id: number) {
    this.cart.remove(id);
  }

  checkout() {
    this.router.navigateByUrl('/checkout');
  }
}
