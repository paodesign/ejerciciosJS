//Destructuring arreglos
const ciudades = ["Londres", "New York", "Madrid", "Paris"];
//Primer ejemplo
/*const [primerCiudad, segundaCiudad] = ciudades;
console.log(primerCiudad);
console.log(segundaCiudad);*/
//Acceder  a un valor especifico del arreglo
/*const[ , , ,ciudad] = ciudades;
console.log(ciudad);*/

//Ejemplo Avanzado
const clientes = {
    tipo: "Premium",
    saldo: 10000,
    datos: {
        nombre: "Bruno",
        apellido: "Díaz",
        residencia: {
            ciudad: "Londres"
        }
    },
    movimientos: ['20/12/2019','25/10/2018','10/11/2017']
}

let {tipo,
    datos:{residencia},
    movimientos: [uno]
}= clientes;

console.log(tipo);
console.log(uno);