export class Cromo {
  private _nombre: string;
  //private _categoria: string;
  private _descripcion: string;
  private _imagen: string;
  // private _idUsuario: string;
  private _favorito: boolean;

  constructor(
    nombre: string,
    descripcion: string,
    imagen: string,
    favorito: boolean = false
  ) {
    this._nombre = nombre;
    this._descripcion = descripcion;
    this._imagen = imagen;
    this._favorito = favorito;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre: string) {
    this._nombre = nombre;
  }
  /*
  get categoria() {
    return this._categoria;
  }

  set categoria(categoria: string) {
    this._categoria = categoria;
  }
*/
  get descripcion() {
    return this._descripcion;
  }

  set descripcion(descripcion: string) {
    this._descripcion = descripcion;
  }

  get imagen() {
    return this._imagen;
  }

  set imagen(imagen: string) {
    this._imagen = imagen;
  }
  /*
  get idUsuario() {
    return this._idUsuario;
  }

  set idUsuario(idUsuario: string) {
    this._idUsuario = idUsuario;
  }
*/
  set favorito(favorito: boolean) {
    this._favorito = favorito;
  }

  get favorito() {
    return this._favorito;
  }
}
