import { Routes } from '@angular/router';
import { LiveMatchesComponent } from './live-matches/live-matches.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'live', component: LiveMatchesComponent },
  { path: 'home', component: HomeComponent}
];
