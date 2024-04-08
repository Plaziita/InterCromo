import { Routes } from '@angular/router';
import { LoginGoogleComponent } from './components/login-google/login-google.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';

export const routes: Routes = [
   {path:'barra', component: BarraNavegacionComponent},
    {path:'login-register', component: LoginGoogleComponent},
    {path: 'favoritos', component: FavoritosComponent},
    {path:':id', component: BarraNavegacionComponent},
];
