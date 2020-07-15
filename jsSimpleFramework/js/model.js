export class BaseModel {
    constructor(id) {
        this.id = id;
    }

    toRow() { throw new Error("Not yet implemented") }
}
export class People extends BaseModel {
    constructor(id, nombre, apellido){
        super(id);
        this.nombre = nombre;
        this.apellido = apellido;
        this.email;
    }
    crearEmail(email){
        this.email = email;
    }

    toRow(){
        return `${this.nombre}, ${this.apellido.toUpperCase()}`
    }
}