import { Component, OnInit } from '@angular/core';
import { CromoService } from '../../../../../server/src/app/data-access/cromos/cromo.service';
import { Cromo } from '../../models/Cromo';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css'],
})
export class FavoritosComponent implements OnInit {
  //cromos: any[];

  constructor(private cromoService: CromoService) {}

  ngOnInit() {
    this.cromoService.getCromos().subscribe((cromos) => {
      //  this.cromos = cromos;
    });
  }

  toggleFavorito(cromo: any) {
    cromo.favorito = !cromo.favorito;
    console.log(cromo.favorito);
  }
}
