import { Routes } from '@angular/router';
import { LoginGoogleComponent } from './components/login-google/login-google.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { SubirCromoComponent } from './components/subir-cromo/subir-cromo.component';

export const routes: Routes = [
  { path: 'login-register', component: LoginGoogleComponent },
  { path: 'subir-cromo', component: SubirCromoComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: ':id', component: BarraNavegacionComponent },
];
