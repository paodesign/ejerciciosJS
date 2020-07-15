class Clienes {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    imprimirSaldo(){
        return `Hola ${this.nombre}, tu saldo es ${this.saldo}`;
    }

    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}
//extends para heredar mètodos y atributos
class Empresa extends Clienes {
    constructor(nombre, saldo, telefono, tipo){
        //super va a ir al constructor padre de dende hereda los atrubutos
        super(nombre, saldo);
        //no existen en el constructor padre
        this.telefono = telefono;
        this.tipo = tipo;
    }
}
 const empresa = new Empresa("Empresa1", 10000, 092601702, "Construccion");

 console.log(empresa.imprimirSaldo());