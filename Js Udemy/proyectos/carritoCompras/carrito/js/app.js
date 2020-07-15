//Variables
const carrito = document.getElementById("carrito");
const cursos = document.getElementById("lista-cursos");
const listaCursos = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");




//Listeners
cargarEventListener();

function cargarEventListener() {
    //Dispara cuando se presiona "Agregar carrito"
    cursos.addEventListener("click", comprarCurso);

    //Cuando se elimina el curso del carrito
    carrito.addEventListener("click", eliminarCurso);

    //Al vaciar el carrito
    vaciarCarritoBtn.addEventListener("click", vaciarCarrito);

    //Al cargar el documento, mostrar LocalStorage
    document.addEventListener("DOMContentLoaded",leerLocalStorage);
}



//Funciones
//Funcion que añade al carrito
function comprarCurso(e) {
    e.preventDefault();
    //Delegation para agregar-carrito
    if (e.target.classList.contains("agregar-carrito")) {
        const cursos = e.target.parentElement.parentElement;
        //Enviamos el curso seleccionado para tomar sus datos
        leerDatosCursos(cursos);
    }
}

//Lee los datos del curso
function leerDatosCursos(curso) {
    const infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span").textContent,
        id: curso.querySelector("a").getAttribute("data-id")
    }
    insertarCarrito(infoCurso);
}

//Muestra el curso seleccionado en el carrito
function insertarCarrito(curso) {
    const row = document.createElement("tr");
    row.innerHTML = `
<td> <img src="${curso.imagen}" width=100> </td>
<td>${curso.titulo}</td>
<td>${curso.precio}</td>
<td> <a href="#" class="borrar-curso" data-id="${curso.id}">X<a> </td>
`;
    listaCursos.appendChild(row);
    guardarCursoLocalStorage(curso);
}

//Elimina el curso del carrito en el DOM
function eliminarCurso(e) {
    e.preventDefault();

    let curso;
    let cursoId;
    if(e.target.classList.contains("borrar-curso")){
        e.target.parentElement.parentElement.remove();
        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector("a").getAttribute("data-id");
    }
    eliminarCursoLocalStorage(cursoId);
}

//Elimina los cursos del carrito en el DOM
function vaciarCarrito(e){
    e.preventDefault();
    //Forma más lenta
    //listaCursos.innerHTML = "";

    //Forma rapida (reccomendable)
    while(listaCursos.firstChild){
        listaCursos.removeChild(listaCursos.firstChild);

    }

    //Vaciar Local Storage
    vaciarLocalStorage();

    return false;
}

//Almacena cursos en el carrito a Local Storage
function guardarCursoLocalStorage(curso){
    let cursos;
    //Toma el valor de un arreglo con datos LS o vacio
    cursos = obtenerCursoLocalStorage();
    //El curso seleccionado se agrega al arreglo
    cursos.push(curso);

    localStorage.setItem("cursos", JSON.stringify(cursos));
}

//Comprueba que haya elementos en local storage
function obtenerCursoLocalStorage(){
    let cursosLS;

    //Comprobar si hay algo en local storage
    if(localStorage.getItem("cursos") === null){
        cursosLS = [];
    }else{
        cursosLS = JSON.parse(localStorage.getItem("cursos"));
    }
    return cursosLS;
}

//Imprime los cursos del LocalStorage en el carrito
function leerLocalStorage(){
    let cursosLS;
    cursosLS = obtenerCursoLocalStorage();
    cursosLS.forEach(function(curso){
        const row = document.createElement("tr");
        row.innerHTML = `
    <td> <img src="${curso.imagen}" width=100> </td>
    <td>${curso.titulo}</td>
    <td>${curso.precio}</td>
    <td> <a href="#" class="borrar-curso" data-id="${curso.id}">X<a> </td>
    `;
        listaCursos.appendChild(row);
    });
}

//Elimina el curso por Id en Local Storage
function eliminarCursoLocalStorage(curso){
let cursosLS;
//Obtenemos el arreglo de cursos
cursosLS = obtenerCursoLocalStorage();
//Iteramos comparando el Id del curso borrado con los del LS
cursosLS.forEach(function(cursoLS, index) {
   if(cursoLS.id === curso){
       cursosLS.splice(index, 1);
      
   }
});
//Añadimos el arreglo actual a storage
localStorage.setItem("cursos", JSON.stringify(cursosLS));
}

//Elimina todos los cursos del Local Storage
function vaciarLocalStorage(){
    localStorage.clear();
}