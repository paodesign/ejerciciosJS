//Variables
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const btnEnviar = document.getElementById("enviar");
const formularioEnviar = document.getElementById("enviar-mail");
const resetBtn = document.getElementById("resetBtn");

//Event Listeners
eventListener();

function eventListener() {
    //Iniciar la aplicacion y deshabilitar submit
    document.addEventListener("DOMContentLoaded", inicioApp);

    //campos del formulario
    email.addEventListener("blur", validarCampo);
    asunto.addEventListener("blur", validarCampo);
    mensaje.addEventListener("blur", validarCampo);

    //Boton enviar en el submit
    formularioEnviar.addEventListener("submit",enviarEmail);

    //Boton de reset
    resetBtn.addEventListener("click", resetFormulario);
}


//Funciones
function inicioApp() {
    //Deshabilitar el envio

    btnEnviar.disabled = true;
}

//Valida que el campo tenga algo escrito
function validarCampo() {

    //se valida la logitud del texto y que  no este vacio
    validarLongitud(this);

    //Validar unicamente el email
    if (this.type === "email") {
        ValidarEmail(this);
    }

    let errores = document.querySelectorAll(".error");

    if (email.value !== "" && asunto.value !== "" && mensaje.value !== "") {
        if (errores.length === 0) {
            btnEnviar.disabled = false;
        }
    }
}
//Resetear formulario
function resetFormulario(e){
    formularioEnviar.reset();
    e.preventDefault();
}

//Cuando se envia un correo
function enviarEmail(e){
    //Spinner al presionar enviar
    const spinnerGif = document.querySelector("#spinner");
    spinnerGif.style.display = "block";

    //Gif que envia el email
    const enviado = document.createElement("img");
    enviado.src = "img/mail.gif";
    enviado.style.display = "block";

    //Ocultar spinner y mostrar gif de enviado
    setTimeout(function(){
        spinnerGif.style.display = "none";

        document.querySelector("#loaders").appendChild(enviado);
        setTimeout(function(){
            enviado.remove();
            formularioEnviar.reset();
        }, 5000);
    }, 3000);

    e.preventDefault()
}



//Verifica la longitud de los textos en los campos
function validarLongitud(campo) {
    console.log(campo.value.length);
    if (campo.value.length > 0) {
        campo.style.borderBottomColor = "green";
        campo.classList.remove("error");
    } else {
        campo.style.borderBottomColor = "red";
        campo.classList.add("error");
    }
}

function ValidarEmail(campo){
    const mensaje = campo.value;

    if(mensaje.indexOf("@") !== -1){
        campo.style.borderBottomColor = "green";
        campo.classList.remove("error");
    }else{
        campo.style.borderBottomColor = "red";
        campo.classList.add("error");
    }
}