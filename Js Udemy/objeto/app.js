//Metodo CLasico
/*const cliente = {
    nombre: "Juan",
    saldo: 1200,
    tipoCliente: function(){
        let tipo;
        if(this.saldo > 1000){
            tipo = "Gold";
        }else if(this.saldo > 500){
            tipo = "Platinun";
        }
        else {
            tipo = "Normal"; 
        }
        return tipo;
    }
}
console.log(cliente.tipoCliente());*/
// con punto(.) se accede al contenio de un objeto

//Metodo alternativo
/*function Cliente(nombre, saldo){//conrtractor (nombre,saldo) son estos parametros que se pasan para crear el objeto
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente = function(){
        let tipo;

        if(this.saldo > 1000){
            tipo = "Gold";
        }else if(this.saldo > 500){
            tipo ="Platinum";

        }else {
            tipo = "Normal";
        }
        return tipo;
    }
}
const persona1 = new Cliente("Pedro", 20000);
const persona 2 = new Cliente("Maria", 6000);*/

//String
//new String es la version en objeto del string
const nombre1 = "Pedro";
console.log(typeof nombre1); //eso nos regresa que es de tipo string

const nombre2 = new String("Pedro");// NEW siempre crea un nuevo objeto,
console.log(nombre2);// esto nos regresa que es de tipo objeto
//regresan el mismo valor pero de diferente tipo.

//Numeros
//new Number es la version en objeto del numero
const numero1 = 20; //esto de de tipo numero //primitivo
const numero2= new Number(20);//esto es de tipo objeto

//Boolean
//new Boolean es la version en objeto del boolean
const boolean1 = "true";
const boolean2 = new Boolean(true);

//funciones
//new Funcion es la version en objeto de la funcion algo que es muy poco cumun de ver
const funcion1 = function(a,b){
    return a+b;
}

const funcion2 = new Function("a","b","return 1 + 2"); 

//Objetos
//new Objeto se usa para crear un nuevo objeto. Acá las dos constante son iguales. Objetos
const persona1 = {
    nombre: "Juan"
}

const persona2 = new Object({nombre: "Juan"});

//Arreglos
//son iguales
const arreglo1 = [1,2,3,4];
const arreglo2 = new Array(1,2,3,4);

//los valores primitivos string, numeros, booleans, funciones, objetos todos tienen su version en objetos, utilizando la palabra new.


