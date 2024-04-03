export class Usuario {

    private _idUsuario: string;
    private _email: string;
    private _name: string;
    private _cromos: Array<Cromo>;
    private _valoracion: number;
    private _imagenPerfil: string;

    constructor(idUsuario: string, email: string, name: string, cromos: Array<Cromos>, valoracion: number, imagenPerfil: string) {
        this._idUsuario = idUsuario;
        this._email = email;
        this._name = name;
        this._cromos = cromos;
        this._valoracion = valoracion;
        this._imagenPerfil = imagenPerfil;
    }

    get idUsuario(): string {
        return this._idUsuario;
    }

    set idUsuario(value: string) {
        this._idUsuario = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get cromos(): Array<Cromos> {
        return this._cromos;
    }

    set cromos(value: Array<Cromos>) {
        this._cromos = value;
    }

    get valoracion(): number {
        return this._valoracion;
    }

    set valoracion(value: number) {
        this._valoracion = value;
    }

    get imagenPerfil(): string {
        return this._imagenPerfil;
    }

    set imagenPerfil(value: string) {
        this._imagenPerfil = value;
    }
}
