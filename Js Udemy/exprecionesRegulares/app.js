//Expresiones Regulares
//Las expresiones regulares son patrones utilizados para encontrar una determinada combinación de caracteres dentro de una cadena de texto.
//las expresiones regulares también son objetos.
//cualquier cosa puede ser una expresion regualr
//Cosas básicas

//Existen dos formas de crear las expresiones regulares
/*const exp1 = new RegExp('/abc/');
const exp2 = /abc/;

console.log(exp1);
console.log(exp2);*/

//Para probar tu expresiones regulares tenemo un metodo test
/*let valor, expReg;

expReg = /[0-9]/;
valor = 1992;*/

// los numeros \d cada uno es un caracter; \D caracter que no es un numero.
//Una fecha en expresion regular 20-10-2018
expReg = /\d\d-\d\d-\d\d\d\d/;
valor ='20-10-2018';

//Hora 10:30
expReg = /\d\d:\d\d/;
valor = '10:30';

//Hora 10:30 AM
expReg = /\d\d:\d\d \D\D/;
valor = '10:30 AM';

//Para decirle que tiene más de un caracter se utiliza /\d+/
expReg = /\d+/;
valor = 12123214;

//Negar el número
expReg = /[^0-9]/;
valor = 1992;

//La sintaxis {1,2} ponerle rango a cada digito /\d{}
expReg = /\d{1,2}-\d{1,2}-\d{4}/;
valor = '10-10-2018';// true
valor = '1-1-2018'; // true
valor = '1-100-2018'; //false
valor = '10-04-203'; //false

//Letars o números
expReg = /\w+/;
valor = 'El mensaje es correcto'; //true
valor = 1234; //true
valor = ''; //false

//Revisar que sean puros números
expReg = /\d+/;
valor = 1234; //true
valor = 'Hola'; //false
// otra opción
expReg = /([0-9])\w+/;
valor =1234; //true
valor = 'Hola mundo'; //false

//Texto sea puras Mayúsculas
expReg = /([A-Z])\w+/;
valor = 'hola mundo'; //false
valor = 1234; //false
valor = 'MENSAJE EN MAYÚSCULAS';//true

//Texto en minúsculas
expReg = /([a-z])\w+/;
valor = 'hola mundo'; //true
valor = 1234; //false
valor = 'MENSAJE EN MAYÚSCULAS';//false

//Expresión regular de mail
expReg = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
valor = 'correo@correo.com'; //true
valor = 'ww.correo.com';



console.log(expReg.test(valor));

