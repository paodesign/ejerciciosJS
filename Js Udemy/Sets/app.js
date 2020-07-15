//Sets te permite crear una lista de valores y es similar a un arreglo, solamente que no va a tener dupluicados
//Lo que ya existe simplimente no se agrega en el set.
//.add para añadir algo, .size para saber la longitud, ([]) agregar un array dentro del set
let carrito = new Set();
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');

// Array : let numeros = new Set([1,2,3,4,5,5,6,7]);
//console.log(numeros);

//Comprobar que los valores existan se usa .has()
//console.log(carrito.has('Camisa'));

//Como eliminar algo del set se usa .delete()
//console.log(carrito.delete('Camisa'));
//Limpiar el carrito se usa .clear()
//carrito.clear();

//Se pueden iterar con foreach
//La llave(key) y el valor son iguales en un set
/*carrito.forEach((producto, index) =>{
    console.log(`${index} : ${producto}`);
})*/

//Como convertir se set a arreglo
const arregloCarrito = [...carrito];
console.log(arregloCarrito);


//console.log(carrito.size);
//console.log(carrito);