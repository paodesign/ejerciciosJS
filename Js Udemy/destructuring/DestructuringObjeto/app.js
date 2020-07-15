//Destructuring siempre busca el objeto o el arreglo
/*const cliente = {
    nombre : "Alejndra",
    tipo : "Premium"
}
//Antes
let nombre = cliente.nombre;
let tipo = cliente.tipo;
//Ahora. lo va mapeando
let{nombre,tipo} = cliente;

console.log(nombre);
console.log(tipo);*/

//Como acceder a un objeto dentro de un objeto
/*const cliente = {
    nombre : "Juan",
    tipo : "Gold",
    datos : {
        ubicacion:{
            ciudad: "Jalisco",
            pais: "Mexico"
        },
        cuenta : {
            desde : "27/12/2015",
            saldo : 4000
        }
    }
}

let {datos: {ubicacion} = cliente;
console.log(ubicacion.ciudad);
console.log(ubicacion.pais);*/
//Dar un valor de default 
const cliente = {
    nombre : "Juan",
    //saldo : 2000
}
let {nombre, tipo = "Basico", saldo = 200} = cliente;

console.log(nombre);
console.log(tipo);
console.log(saldo);