import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { restaurant, fastFood, rocket, lockClosed, pizza, leaf, iceCream, search, cart, card, checkmarkCircle } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon],
})
export class Tab1Page {
  constructor(private router: Router) {
    addIcons({ 
      restaurant, 
      'fast-food': fastFood, 
      rocket, 
      'lock-closed': lockClosed, 
      pizza, 
      leaf, 
      'ice-cream': iceCream, 
      search, 
      cart, 
      card, 
      'checkmark-circle': checkmarkCircle 
    });
  }

  goToMenu() {
    this.router.navigateByUrl('/tabs/tab2');
  }
}
