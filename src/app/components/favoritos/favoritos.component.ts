import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css',
})
export class FavoritosComponent {
  cromos = [
    {
      nombre: 'Gyarados',
      imagen:
        'https://firebasestorage.googleapis.com/v0/b/intercromo-6a7d7.appspot.com/o/images%2FGyarados_Cromo.jpg?alt=media&token=d4986c90-978e-45e5-a756-54dfb05e8dac',
      descripcion:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, adipisci asperiores, odit nobis voluptate sint quis illum consequatur eius voluptas, libero labore quae aliquid quasi? Mollitia dolorum facere libero iure!',
      favorito: false,
    },
    {
      nombre: 'Pikachu',
      imagen:
        'https://firebasestorage.googleapis.com/v0/b/intercromo-6a7d7.appspot.com/o/images%2FGyarados_Cromo.jpg?alt=media&token=d4986c90-978e-45e5-a756-54dfb05e8dac',
      descripcion:
        'Pikachu es un Pokémon de tipo eléctrico introducido en la primera generación. Es el Pokémon número 25 en la Pokédex Nacional.',
      favorito: false,
    },
    {
      nombre: 'Charizard',
      imagen:
        'https://firebasestorage.googleapis.com/v0/b/intercromo-6a7d7.appspot.com/o/images%2FGyarados_Cromo.jpg?alt=media&token=d4986c90-978e-45e5-a756-54dfb05e8dac',
      descripcion:
        'Charizard es un Pokémon de tipo fuego/volador introducido en la primera generación. Es la evolución de Charmeleon.',
      favorito: false,
    },
    {
      nombre: 'Bulbasaur',
      imagen:
        'https://firebasestorage.googleapis.com/v0/b/intercromo-6a7d7.appspot.com/o/images%2FGyarados_Cromo.jpg?alt=media&token=d4986c90-978e-45e5-a756-54dfb05e8dac',
      descripcion:
        'Bulbasaur es un Pokémon de tipo planta/veneno introducido en la primera generación. Es el Pokémon número 1 en la Pokédex Nacional.',
      favorito: false,
    },
    {
      nombre: 'Mewtwo',
      imagen:
        'https://firebasestorage.googleapis.com/v0/b/intercromo-6a7d7.appspot.com/o/images%2FGyarados_Cromo.jpg?alt=media&token=d4986c90-978e-45e5-a756-54dfb05e8dac',
      descripcion:
        'Mewtwo es un Pokémon legendario de tipo psíquico introducido en la primera generación. Es el Pokémon número 150 en la Pokédex Nacional.',
      favorito: false,
    },
    {
      nombre: 'Squirtle',
      imagen:
        'https://firebasestorage.googleapis.com/v0/b/intercromo-6a7d7.appspot.com/o/images%2FGyarados_Cromo.jpg?alt=media&token=d4986c90-978e-45e5-a756-54dfb05e8dac',
      descripcion:
        'Squirtle es un Pokémon de tipo agua introducido en la primera generación. Es el Pokémon número 7 en la Pokédex Nacional.',
      favorito: false,
    },
    {
      nombre: 'Juanito',
      imagen:
        'https://firebasestorage.googleapis.com/v0/b/intercromo-6a7d7.appspot.com/o/images%2FGyarados_Cromo.jpg?alt=media&token=d4986c90-978e-45e5-a756-54dfb05e8dac',
      descripcion:
        'Squirtle es un Pokémon de tipo agua introducido en la primera generación. Es el Pokémon número 7 en la Pokédex Nacional.',
      favorito: false,
    },
    {
      nombre: 'Pepon',
      imagen:
        'https://firebasestorage.googleapis.com/v0/b/intercromo-6a7d7.appspot.com/o/images%2FGyarados_Cromo.jpg?alt=media&token=d4986c90-978e-45e5-a756-54dfb05e8dac',
      descripcion:
        'Squirtle es un Pokémon de tipo agua introducido en la primera generación. Es el Pokémon número 7 en la Pokédex Nacional.',
      favorito: false,
    },
  ];

  toggleFavorito(cromo: any) {
    cromo.favorito = !cromo.favorito;
  }
}
