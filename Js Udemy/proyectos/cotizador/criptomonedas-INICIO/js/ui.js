class Interfaz{
    constructor(){
        this.init();
    }
    init(){
        this.contruirSelect();
    }

    contruirSelect(){
        cotizador.obtenerMonedasAPI()
        .then(monedas => {

            //Crear un select de opciones
            const select = document.querySelector('#criptomoneda');
            //Iterar por los resultados de la api
            for (const [key, value] of Object.entries(monedas.monedas.Data) ) {
              //Añadir el symbol y el nombre como opciones
              const opcion = document.createElement('option');
              opcion.value = value.Symbol;
              opcion.appendChild(document.createTextNode(value.CoinName));
              select.appendChild(opcion);
            }
            //console.log(Object.entries(monedas.monedas.Data));
            //object.entries tomo los objetos y los combierte en arreglos.Tomando su key y su valor.
        })
    }

    mostrarMensaje(mensaje, clases){
        const div = document.createElement("div");
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));

        //Seleccionar mensajes
        const divMensaje = document.querySelector('.mensajes');
        divMensaje.appendChild(div);
        //Mostrar contenido
        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 3000);
    }
    //Imprime el resultado de la cotización
    mostrarResultado(resultado, moneda, crypto){
        //En caso de un rasultado anterior, ocultar
        const resultadoAnterior = document.querySelector('#resultado > div');

        if(resultadoAnterior){
            resultadoAnterior.remove();
        }


        const datosMonedas = resultado[crypto][moneda];
        //Recortar digitos de precio
        let precio = datosMonedas.PRICE.toFixed(2);
        let porcentaje = datosMonedas.CHANGEPCTDAY.toFixed(2);
        let actualizado = new Date(datosMonedas.LASTUPDATE * 1000).toLocaleDateString('es-AR');

        //Construir el template
        let templateHtml = `
        <div class="card bg-warning">
            <div class="card-body text-linght">
            <h2 class="card-title">Resultado:</h2>
            <p>El Precio de ${datosMonedas.FROMSYMBOL} a moneda ${datosMonedas.TOSYMBOL} es de: $ ${precio} </p>
            <p>Variación último día: % ${porcentaje}</p>
            <p>Última actualización: ${actualizado}</p>
            </div>
        </div>
        `
        this.mostrarOcultarSpinner('block');
        //Insertar el resultado
        setTimeout(() => { 
            document.querySelector('#resultado').innerHTML = templateHtml;
            //Ocultar spinner
            this.mostrarOcultarSpinner('none');
        }, 3000);
        
       
    }
    //Mostrar un spinner de carga al mostrar la cotización
    mostrarOcultarSpinner(vista){
        const spinner = document.querySelector('.contenido-spinner');
        spinner.style.display = vista;
    }
}