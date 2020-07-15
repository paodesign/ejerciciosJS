//Iteradores
// La ventaja del iterador es que se tiene contor total, vas viendo que susede en cada iteracion a diferenca del for

/*for(let i = 0; i < 10; i++){
    console.log(i);
}*/

/*function crearIterador(carrito){
    //Inicializamos
    let i = 0;

    return {
        siguiente: () =>{
            let fin = (i >= carrito.length);

            let valor = !fin ? carrito[i++] : undefined;

            return{
                fin: fin,
                valor: valor
            }
        }
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

const recorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());*/

//Generadores
//un generador es una función que va a regrasar un iterador.
//se indican con un asterisco despues de la palabra funcion*
//utilizando un generador la sintaxis es mas corta.

/*function *crearGenerador(){
    //yield se coloca yield y el valor que quieres que se ponga en el generador, puede ser cualquier dato primitivo.
    yield 1;
    yield 'nombre';
    yield 3 + 3;
}

const iterador = crearGenerador();

console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);*/

function *nuevoGenerador(carrito){
    for(let i = 0; i < carrito.length; i++){
        yield carrito[i];
    }
}
//Creamos el carrito
const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

//Recorremos el iterador
const iterador = nuevoGenerador(carrito);

console.log(iterador.next().value);
console.log(iterador.next().done);