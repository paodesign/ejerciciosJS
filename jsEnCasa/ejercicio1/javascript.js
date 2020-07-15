//alert("Hola Mundo!");
//var meses = ["Enero", "Febreo", "Marzo", "Abril", "Mayo","Junio", "Julio", "Agoste", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

//seccions variabes globales
var valores = [true, 5, false, "hola", "adios", 2];
let bools = [];
let strings = [];
let numbers = [];

valores.forEach(el => {    
    if (obtenerTipoFormatoString(el) == "boolean") {
        bools.push(el);
    }
    if (obtenerTipoFormatoString(el) == "string") {
        strings.push(el);
    }
    if (obtenerTipoFormatoString(el) == "number") {
        numbers.push(el);
    }
});


document.writeln("Resultado de los 2 booleans es: " + comparaDosBoolRetornarValor(bools[0], bools[1]) + "<br/>");
document.writeln("El mayor de los 2 strings es: " + retornarMaxLenghtString(strings)+ "<br/>");
//escribir aca en pantalla
document.writeln("El resultado de la suma es: " + obtenerResultadoDeLaopercionPorOperador(numbers[0], numbers[1], "+") + "<br/>" );
document.writeln("El resultado de la resta es: " + obtenerResultadoDeLaopercionPorOperador(numbers[0], numbers[1], "-") + "<br/>" );
document.writeln("El resultado de la multiplicación es: " + obtenerResultadoDeLaopercionPorOperador(numbers[0], numbers[1], "*") + "<br/>" );
document.writeln("El resultado de la división es: " + obtenerResultadoDeLaopercionPorOperador(numbers[0], numbers[1], "/") + "<br/>" );
document.writeln("El resultado de la resto es: " + obtenerResultadoDeLaopercionPorOperador(numbers[0], numbers[1], "%") + "<br/>" );
//metodo que retorna el valore de la operacion en base a 2 operadores y un oprendo +,-,*,/,%
function obtenerResultadoDeLaopercionPorOperador(op1, op2, operador){
    //resolver]
    let resultado;
    if(operador == "+"){
        let sumar = op1 + op2;
        resultado = sumar;
    }
    if(operador == "-"){
        let restar = op1 - op2;
        resultado = restar;
    }
    if(operador == "*"){
        let multiplicar = op1 * op2;
        resultado = multiplicar;
    }
    if(operador == "/"){
        let dividir = op1 / op2;
        resultado = dividir;
    }
    if(operador == "%"){
        let resto= op1 % op2;
        resultado = resto;
    }
    return resultado;
}

//metodo que compara 2 bool y retornar sin son iguales o no
function comparaDosBoolRetornarValor(bool1, bool2) {
    let resultado = (bool1 === bool2);
    return resultado;
}

//devuelve el string mas largo en un array de string
function retornarMaxLenghtString(stringArray) {
    var aux = "";
    for (let i = 0; i < stringArray.length; i++) {

        if (stringArray[i].length > aux.length) {
            aux = stringArray[i];
        };
    }
    return aux;
}

//retorna el tipo de de un objeto en formato strign 'boolena', 'number', 'string'
function obtenerTipoFormatoString(obj) {
    return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
}