//Función
let aprendiendo;

aprendiendo = function(){
    console.log("Aprendiendo Javascript");
}
aprendiendo();

//Arrow función
//Una linea no requiere llaves
aprendiendo = () => console.log("Aprendiento Javascript");
//Retorna valor
aprendiendo = () => "Aprendiento Javascript";
//Retorna objeto
aprendiendo = () => ({ aprendiendo: "Aprendiento Javascript"});
//Pasar parametros
aprendiendo = (tecnologia) => console.log( `Aprendiento ${tecnologia}` );
//Pasamos 1 parametro
aprendiendo = tecnologia => console.log( `Aprendiento ${tecnologia}` );
//Pasamos 2 parametros
aprendiendo = (tecn1,tecn2)=> console.log( `Aprendiento ${tecn1} y ${tecn2}` );


const productos = ["Disco", "Camisa", "Guitarra"];
//callback antes
/*let letrasProducto = productos.map(function(producto){
    return producto.length;
});*/
//callback con arrow
/*let letrasProducto = productos.map(producto => {
    return producto.length;
});*/
//callback en una sola linea
/*let letrasProducto = productos.map(producto => producto.length);
console.log(letrasProducto);*/

//forEach
//antes
/*productos.forEach(function(producto){
    console.log(producto);
});*/
//con Arrow
productos.forEach( producto => console.log(producto) );




