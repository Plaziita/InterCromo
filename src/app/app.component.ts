import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FavoritosComponent } from './components/favoritos/favoritos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FavoritosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cliente';
}
