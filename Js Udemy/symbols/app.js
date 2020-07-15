//SYMBOL
//Js tiene 5 datos primitivos, y ahora agregaaron el symbol. Que permite crear propiedades únicas
//Symbol es un primitivo de js
/*const simbolo = Symbol();
const simbolo2 = Symbol("Descripcion aquí");

console.log(simbolo2);*/

let nombre = Symbol();
let apellido = Symbol();

//Crear una persona
let persona = {};
persona.nombre ="Bruno";
persona[nombre] = "Bruno";
persona[apellido] = "Diaz";
persona.saldo = 200;
persona.tipo = "Normal";

//console.log(persona[nombre]);

for(let i in persona){
    console.log(` ${i} : ${persona[i]}`);
}
console.log(persona);