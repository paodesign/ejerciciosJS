function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;

}

//Crear un prototype
//razones para crear un prototype:
//1- los objetos no quedan cargados.
//2- la organizacion, ayuda a que el código quede mas organizado.
//3- si creas muchas funciones pueden ser utilizadas en cualquier tipo de datos.

Cliente.prototype.tipoCliente = function () {
    let tipo;
    if (this.saldo > 1000) {
        tipo = "Gold";
    } else if (this.saldo > 500) {
        tipo = "Platinum";
    } else {
        tipo = "Normal";
    }
    return tipo;
}

//console.log(cliente1);

//Prototipo que imprime saldo y nombres
Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre}, tu Saldo es de ${this.saldo}.Tipo de cliente ${this.tipoCliente()}`;
}

//Retiro saldo
Cliente.prototype.retirarSaldo = function(retiro){
    return this.saldo -= retiro;
}

const cliente1 = new Cliente("Pedro", 100);
const cliente2 = new Cliente("Karen", 600);
const cliente3 = new Cliente("Miguel", 1200);

cliente2.retirarSaldo(300);

console.log(cliente1.nombreClienteSaldo());
console.log(cliente2.nombreClienteSaldo());
console.log(cliente3.nombreClienteSaldo());

