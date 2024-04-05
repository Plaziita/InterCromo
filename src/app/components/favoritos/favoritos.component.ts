import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css'],
})
export class FavoritosComponent {

  constructor() {}

  

  toggleFavorito(cromo: any) {
    cromo.favorito = !cromo.favorito;
    console.log(cromo.favorito);
  }
}
