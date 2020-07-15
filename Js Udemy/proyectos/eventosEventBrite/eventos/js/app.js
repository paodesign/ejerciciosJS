//Instanciar ambas clases
const enventBrite = new EventBrite();
const ui = new Interfaz();

//Listener al buscador
document.getElementById('buscarBtn').addEventListener("click", (e) => {
    e.preventDefault();

//Leer el texto del imput buscar
const textoBuscador = document.getElementById('evento').value;

//Leer el select
const categorias = document.getElementById('listado-categorias');
const categoriasSeleccionadas = categorias.options[categorias.selectedIndex].value;

//Revisar que haya algo escrito en el buscador
if(textoBuscador !== ""){
    enventBrite.obtenerEventos(textoBuscador, categoriasSeleccionadas)
        .then(eventos =>{
           if(eventos.eventos.events.length > 0){
               //Si hay eventos mostrar resultado
               ui.limpiarResultado();
               ui.mostrarEventos(eventos.eventos);
           }else{
              //NO hay eventos enviar una alerta
              ui.mostrarMensaje("No hay resultados", 'alert alert-danger mt-4');
           }
        })
}else{
    //Mostrar mensaje para que imprima algo
    ui.mostrarMensaje("Escribe algo en el Buscador",'alert alert-danger mt-4');
}

})