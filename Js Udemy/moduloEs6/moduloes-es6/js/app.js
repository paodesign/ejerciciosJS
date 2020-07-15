import {nombreCliente, ahorro, mostrarInformacion,/* mostrarNombre*/Cliente} from './cliente.js';
import {nombreEmpresa, ahorro as ahorroEmpresa, categoria, mostrarInformacion as informacionEmpresa, Empresa } from './empresa.js';

//otra forma de importar muchos valores
//import *as cliente from './cliente.js'
/* console.log(nombreCliente);
console.log(nombreEmpresa);

console.log(ahorro);
console.log(ahorroEmpresa);

console.log(categoria); */

let empresa = new Empresa(nombreEmpresa, ahorroEmpresa, categoria);
console.log(empresa.mostrarInformacion());

/* //Info cliente
const info = mostrarInformacion(nombreCliente, ahorro);
console.log(info);

//Info empresa
const infoEmpresa = informacionEmpresa(nombreEmpresa, ahorroEmpresa, categoria);
console.log(infoEmpresa); */

/*const mostrarNombreCliente = mostrarNombre(nombreCliente);
console.log(mostrarNombreCliente);*/

//Utilizar la clase
/*let cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente.mostrarInformacion());*/