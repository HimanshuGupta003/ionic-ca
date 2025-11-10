import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: 'checkout',
        loadComponent: () =>
          import('../checkout/checkout.page').then((m) => m.CheckoutPage),
      },
      {
        path: 'order-confirmation',
        loadComponent: () =>
          import('../order-confirmation/order-confirmation.page').then((m) => m.OrderConfirmationPage),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
  { path: 'checkout', redirectTo: '/tabs/checkout', pathMatch: 'full' },
  { path: 'order-confirmation', redirectTo: '/tabs/order-confirmation', pathMatch: 'full' },
];
