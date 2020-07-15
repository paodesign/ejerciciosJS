class Interfaz {
    constructor() {
        //Inicializa la app al instanciar
        this.init();
        //Leer el resultado
        this.listado = document.getElementById('resultado-eventos');
    }
    //Método para cuando inialicie la app
    init() {
        //Llamanos a imprimir categorias de la Rest api
        this.imprimirCategorias();
    }
    //Imprimir categorias
    imprimirCategorias() {
        const listadoCategorias = enventBrite.obtenerCategorias()
            .then(categorias => {
                const cats = categorias.categorias.categories;
                //Seleccionar el select de categorias
                const selectCategorias = document.getElementById('listado-categorias');

                cats.forEach(cat => {
                    const option = document.createElement('option');
                    option.value = cat.id;
                    option.appendChild(document.createTextNode(cat.name_localized));
                    selectCategorias.appendChild(option);
                });
            })
    }
    //Lee la respuesta de la Api e imprime los resultados
    mostrarEventos(eventos) {
        //Leer los eventos y agregarlo a una variable
        const listaEventos = eventos.events;

        //Recorrer los eventos y crear los template
        listaEventos.forEach(evento => {
            this.listado.innerHTML += `
            <div class="col-md-4 mb-4">
            <div class="card">
                <img class="img-fluid mb-2" scr="${evento.logo.url !== null ? evento.logo.original.url:''}">
            
                <div class="card-body">
                <div class="card-text">
                <h2 class="text-center">${evento.name.text}</h2>
                <p class="lead text-info">Información del evento</p>
                <p>${evento.description.text.substring(0,280)}...</p>
                <span class="badge badge-primary"> Capacidad: ${evento.capacity}</span>
                <span class="badge badge-secundary"> Fecha y Hora: ${evento.start.local}</span>
                <a href="${evento.url}" targert="_blank" class="btn btn-primary btn-block mt-4"> Comprar Boletos</a>
                </div>
                </div>
            </div>
            </div>
            `
        })
    }
    //Limpiar los resultados anteriores
    limpiarResultado(){
        this.listado.innerHTML = '';
    }
    //Método para imprimir mensaje: 2 parametros. Mensaje y clases
    mostrarMensaje(mensaje, clases) {
        const div = document.createElement('div');
        div.classList = clases;
        //Agregar un texto
        div.appendChild(document.createTextNode(mensaje));
        //Busco un padre
        const buscadorDiv = document.querySelector('#buscador');
        buscadorDiv.appendChild(div);
        //Quitar el alert despues de 3 segundos
        setTimeout(() => {
            this.limpiarMensaje();
        }, 3000);
    }
    //Desparece el mensje en caso de que exista
    limpiarMensaje() {
        const alert = document.querySelector('.alert');
        if (alert) {
            alert.remove();
        }
    }

}