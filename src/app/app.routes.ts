import { Routes } from '@angular/router';
import { LogoComponent } from './components/logo/logo.component';
import path from 'path';
import { AppComponent } from './app.component';
import { LoginGoogleComponent } from './components/login-google/login-google.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';

export const routes: Routes = [
    {path:'login-register', component: LoginGoogleComponent},
    {path: 'favoritos', component: FavoritosComponent},
    {path:':id', component: BarraNavegacionComponent}
];
