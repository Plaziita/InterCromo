export class Cromo {

    private _nombre: string;
    private _categoria: string;
    private _descripcion: string;
    private _imagen: string;
    private _idUsuario: string;
    private _

    constructor(nombre: string, categoria: string, descripcion: string, imagen: string, idUsuario: string) {
        this._nombre = nombre;
        this._categoria = categoria;
        this._descripcion = descripcion;
        this._imagen = imagen;
        this._idUsuario = idUsuario;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    get categoria() {
        return this._categoria;
    }

    set categoria(categoria: string) {
        this._categoria = categoria;
    }

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

    get idUsuario() {
        return this._idUsuario;
    }

    set idUsuario(idUsuario: string) {
        this._idUsuario = idUsuario;
    }
}
