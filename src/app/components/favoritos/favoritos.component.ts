import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { CromosService } from '../../models/data-access/cromos.service';
import { Cromo } from '../../models/Cromo';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule, AsyncPipe, NgFor],
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css'],
})
export class FavoritosComponent {

  cromos : Cromo[] = [];
  private _cromosService = inject(CromosService);

  lista = this._cromosService.getCromos().subscribe(data =>{
    this.cromos = data;
    console.log(data)
  });

  toggleFavorito(cromo: any) {
    cromo.favorito = !cromo.favorito;
    console.log(cromo.favorito);
  }
}
