class EventBrite {
    constructor() {
        this.token_auth = 'J6Z43K33UXCODTNFIJGJ';
        this.ordenar = 'date';
    }
    //Mostrar los resultados de la busqueda
    async obtenerEventos(evento, categoria){
        const respuestaEvento = await fetch(`https://www.eventbriteapi.com/v3/venues/44266739/events/?token=${this.token_auth}`);

        //Esperar la respuesta del evento y devolverlo como Json
        const eventos = await respuestaEvento.json();
        return {
            eventos
        }
    }
    //Obtener las categorias en init()
    async obtenerCategorias() {
        //Consultar las categorias a la REST API de event brite
        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);
        //Esperar las respuestas de las categorias y devolver un Json
        const categorias = await respuestaCategorias.json();
        //Devolvemos el resultado
        return {
            categorias
        }

    }
}