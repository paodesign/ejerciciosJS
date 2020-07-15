//Exportar variables
export const nombreCliente = "Bruno";
export let ahorro = 500;

//Exportar funciones
export function mostrarInformacion(nombre, ahorro){
    return `Cliente: ${nombre} - Ahorro ${ahorro}`;
}

/*export function mostrarNombre(nombre){
    return `Nombre del Cliente: ${nombre}`;
}*/

//Exportar clases
export class Cliente{
    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }
    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Ahorro ${this.ahorro}`;
}
}