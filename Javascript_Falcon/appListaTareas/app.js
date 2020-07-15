(function () {
    //variables
    var lista = document.getElementById("lista");
    var tareaInput = document.getElementById("tareaInput");
    var btnNuevatarea = document.getElementById("btnAgregar");

    //funciones
    var agregarTarea = function () {
        var tarea = tareaInput.value;
        var nuevaTarea = document.createElement("li");
        var enlace = document.createElement("a");
        var contenido = document.createTextNode(tarea);
        console.log(contenido);

        if (tarea === "") {
            tareaInput.setAttribute("placeholder", "Agregar una tarea valida");
            tareaInput.className = "error";
            return false;
        }
        //agregar el contenido al enlace
        enlace.appendChild(contenido);
        //le agregamos el atributo href
        enlace.setAttribute("href", "#");
        //agregamos el enlace (a) a la nueva tarea (li)
        nuevaTarea.appendChild(enlace);
        //agregamos ala nueva tarea a la lita
        lista.appendChild(nuevaTarea);

        tareaInput.value = ""

        for (var i = 0; i <= lista.children.length - 1; i++) {
            lista.children[i].addEventListener("click", eleminarTarea);
        }
    };

    var comprobarInput = function () {
        tareaInput.className = "";
        tareaInput.setAttribute("placeholder", "Agrega tu tarea");
    };

    var eleminarTarea = function () {
        this.parentNode.removeChild(this);
    };

    //eventos:
    //agregar tarea
    btnNuevatarea.addEventListener("click", agregarTarea);

    //comprobar input
    tareaInput.addEventListener("click", comprobarInput);

    // eliminar tarea de la lista
    for (var i = 0; i <= lista.children.length - 1; i++) {
        lista.children[i].addEventListener("click", eleminarTarea);
    }
}());