class Articulo {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
        this.precio = 0;
    }
    fijarPrecio(precio) {
        this.precio = precio;
    }
}

class Catalogo {
    constructor() {
        this.articulos = [];
        this.suscriptores = [];
    }
    agregarArticulo(articulo) {
        this.articulos.push(articulo);
        this.publicarNotificacion();
    }
    agregarSuscriptor(callback) {
        this.suscriptores.push(callback);
    }
    publicarNotificacion() {
        this.suscriptores.forEach((suscriptor) => {
            //publicando
            suscriptor(this.articulos);
        })
    }
    eliminarArticulo(id) {
        this.articulos.forEach((articulo) => {
            if (articulo.id === id) {
                const index = this.articulos.indexOf(articulo);
                this.articulos.splice(index, 1);
                this.publicarNotificacion();
            }
        })
    }

}

class Vista {
    constructor() {
        this.catalogo = new Catalogo();
        //suscribiendo
        this.catalogo.agregarSuscriptor(this.render);
        this.contador = 0;
        this.crearEventoAgregar();
        //this.crearEventoEliminar();
    }

    crearEventoAgregar() {

        document.getElementById("agregar").addEventListener("click", () => {
            const input = document.getElementById("texto");
            let articulo = new Articulo(++this.contador, input.value);
            this.catalogo.agregarArticulo(articulo);
            input.value = "";
        });

    }

    crearEventoEliminar() {
        if (document.getElementById("eliminar") !== null) {
            document.getElementById("eliminar").addEventListener("click", () => {
                const boton = document.getElementById("eliminar");
                let articuloId = boton.getAttribute('data-id');
                this.catalogo.eliminarArticulo(articuloId);
            });
        }
    }

    render(articulos) {
        console.log(articulos);
        document.querySelector("ul").innerHTML =
            articulos
                .map((articulo) => `<li>${articulo.nombre}  <span><button data-id="${articulo.id}" id="eliminar">X</button></span> </li>`)
                .join("");
        crearEventoEliminar();
    }
}

new Vista();

