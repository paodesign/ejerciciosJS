import { Cliente } from './cliente.js';
//Exportar variables
export const nombreEmpresa = "Udemy";
export let ahorro = 500000;
export const categoria = "Aprendizaje";

//Exportar funciones
export function mostrarInformacion(nombre, ahorro, categoria) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro} - Categoria: ${categoria}`;
}

//Utiliza la clase del modulo cliente
export class Empresa extends Cliente {
    constructor(nombre, ahorro, categoria) {
        super(nombre, ahorro);
        this.categoria = categoria;
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro ${this.ahorro} - Categoria: ${this.categoria}`;
    }
}