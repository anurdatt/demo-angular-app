import { Routes } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'callback',
    component: OktaCallbackComponent,
  },
  {
    path: 'notes',
    loadChildren: () =>
      import('./notes/notes.routes').then((mod) => mod.NOTE_ROUTES),
  },
];
