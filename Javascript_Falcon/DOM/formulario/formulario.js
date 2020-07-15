(function(){
var formulario = document.getElementById("formulario");
var elementos = formulario.elements;
var boton = document.getElementById("btn");

var validarNombre = function(e){
    if (formulario.nombre.value == 0) {
        alert("completa el campo Nombre");
        e.preventDeFault();
    }
}
var validarRadio = function(e){
    if(formulario.sexo[0].checked == true || formulario.sexo[1].checked == true){
    }else {
        alert("Completa el campo sexo");
        e.preventDeFault();
    }
}
var validarCheckbox = function(e){
    if(formulario.terminos.checked == false){
        alert("Acepta los terminos y condiciones");
        e.preventDeFault();
    }
}
var validar = function(e){
    validarNombre(e);
    validarRadio(e);
    validarCheckbox(e);
}

formulario.addEventListener("submit",validar);
} ())