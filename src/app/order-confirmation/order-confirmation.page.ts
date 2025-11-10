import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { NgIf, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.page.html',
  styleUrls: ['./order-confirmation.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, NgIf, CurrencyPipe]
})
export class OrderConfirmationPage {
  order: any;

  constructor(private router: Router) {
    const raw = localStorage.getItem('last-order');
    this.order = raw ? JSON.parse(raw) : null;
  }

  backToHome() {
    this.router.navigateByUrl('/tabs/tab1');
  }
}
