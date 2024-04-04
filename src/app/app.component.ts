import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoComponent } from './components/logo/logo.component';
import { BtnLogInComponent } from './components/btn-log-in/btn-log-in.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LogoComponent, BtnLogInComponent, RouterOutlet,FavoritosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cliente';
}
