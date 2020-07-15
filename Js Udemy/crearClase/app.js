class Cliente{
    constructor(nombre, apellido, saldo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;
    }
    imprimirSaldo(){
        return `Hola ${this.nombre}, tu saldo es ${this.saldo}`;
    }

    tipoCliente(){
        let tipo;

        if(this.saldo > 1000){
            tipo = "Gold";
        }else if(this.saldo > 500){
            tipo = "Platinum";
        }else{
            tipo = "Normal";
        }
        return tipo;
    }

    retirarSaldo(retiro){
        return this.saldo -= retiro;
    }
    //static mo tienen que instanciarse o es necesario que agrege new. es un mètodo estatico.
    //es necesario pasarle el nombre de la clase luego el punto(.) con el nombre del metodo.
    static bienvenida(){ 
        return `Bienvenido al cajero`;
    }
}
//const maria = new Cliente("Maria", "Perez", 10000);
//maria.retirarSaldo(3000);

console.log(Cliente.bienvenida());