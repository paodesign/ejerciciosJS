function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;

}

//Herencia prototype
//se hace un solo prototipo que se heredaria y seria mas facil de mantener


//Prototipo que imprime saldo y nombres
Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre}, tu Saldo es de ${this.saldo}`;
}

const cliente1 = new Cliente("Pedro", 100);

console.log(cliente1);

//Banca para empresas
function Empresas(nombre,saldo,telefono,tipo){
    Cliente.call(this,nombre,saldo);
    this.telefono = telefono;
    this.tipo = tipo;
}
// Para heredar proto
Empresas.prototype = Object.create(Cliente.prototype);
const empresa = new Empresas("Udemy", 100000, 92601702, "Educacion");

console.log(empresa.nombreClienteSaldo());

