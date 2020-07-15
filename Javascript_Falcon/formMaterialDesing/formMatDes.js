(function () {
    var formulario = document.formulario_registro;
    var elementos = formulario.elements;
    console.log(formulario);

    //functions
    var validarInputs = function () {
        for (var i = 0; i < elementos.length; i++) {
            if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password") {
                let small = document.getElementById(`alerta_${elementos[i].name}`);
                if (elementos[i].value == 0) {
                    small.className += " mostrar";
                    elementos[i].className = elementos[i].className + " error";
                    return false;
                } else {
                    elementos[i].className = elementos[i].className.replace(" error", "");
                    small.className = small.className.replace(" mostrar", "");
                }
            }
        }
        return true;
    };

    var validarPassword = function () {
        let small = document.getElementById("alerta_repetir");
        if (elementos.pass.value !== elementos.pass2.value) {
            small.className += " mostrar";
            elementos.pass.value = "";
            elementos.pass2.value = "";
            elementos.pass.className = elementos.pass.className + " error";
            elementos.pass2.className = elementos.pass2.className + " error";
            return false;
        } else {
            elementos.pass.className = elementos.pass.className.replace(" error", "");
            elementos.pass2.className = elementos.pass2.className.replace(" error", "");
            small.className = small.className.replace(" mostrar", "");
            return true;
        };
    }

    var validarRadios = function () {
        var opciones = document.getElementsByName("sexo");
        var resultados = false;

        for (var i = 0; i < elementos.length; i++) {
            if (elementos[i].type == "radio" && elementos[i].name == "sexo") {
                for (var o = 0; o < opciones.length; o++) {
                    if (opciones[o].checked) {
                        resultados = true;
                        break;
                    }
                }
                if (resultados == false) {
                    elementos[i].parentNode.className += " error";
                    console.log("El campo sexo esta incompleto");
                    return false;
                } else {
                    elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
                    return true;
                }
            }
        }
    };
    var validarCheckbox = function () {
        var opciones = document.getElementsByName("terminos");
        var resultados = false;

        for (var i = 0; i < elementos.length; i++) {
            if (elementos[i].type == "checkbox") {
                for (var o = 0; o < opciones.length; o++) {
                    if (opciones[o].checked) {
                        resultados = true;
                        break;
                    }
                }
                if (resultados == false) {
                    elementos[i].parentNode.className += " error";
                    console.log("No aceptate los tereminos y condiciones");
                    return false;
                } else {
                    elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
                    return true;
                }
            }
        }
    };


    var enviar = function (e) {
        if (!validarInputs()) {
            console.log('Falto validar los Input');
            e.preventDefault();
        } else if (!validarPassword()) {
            console.log("Las contraseñas no coinciden");
            e.preventDefault();
        }
        else if (!validarRadios()) {
            console.log('Falto validar los Radio Button');
            e.preventDefault();
        } else if (!validarCheckbox()) {
            console.log('Falto validar Checkbox');
            e.preventDefault();
        } else {
            console.log('Envia');
            e.preventDefault();
            //comentar linea cuando tengamos el formulario listo

        }
    };
    //funciones blur y focus
    var focusInput = function () {
        this.parentElement.children[1].className = "label active";
        this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
        //this.parentElement.children[1].className = this.parentElement.children[0]
    }
    var blurInput = function () {
        if (this.value <= 0) {
            this.parentElement.children[1].className = "label";
            this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
        }
    }

    //eventns
    formulario.addEventListener("submit", enviar);

    for (var i = 0; i < elementos.length; i++) {
        if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password") {
            elementos[i].addEventListener("focus", focusInput);
            elementos[i].addEventListener("blur", blurInput);
        }
    }
}())