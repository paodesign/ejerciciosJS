const cotizador = new API('156e56c929c3bd80590a6fce28f62819df21a13ed7b6b1458a2fbcc4db4db6e7');
const ui = new Interfaz();



//Leer el formulario
const formulario = document.querySelector('#formulario');
//enventListener
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    //Leer la moneda seleccionada
    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

    //Leer la criptomoneda seleccionada
    const criptoMonedaSelect = document.querySelector('#criptomoneda');
    const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

    //Comprobar que ambos campos tengan algo
    if (monedaSeleccionada === "" || criptoMonedaSeleccionada === "") {
        //Arrojar un error
        ui.mostrarMensaje('Ambos campos son Obligatorios', 'alert bg-danger text-center');
    } else {
        //Todo bien, consulta api
        cotizador.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada)
            .then(data => {
                ui.mostrarResultado(data.resultado.RAW, monedaSeleccionada, criptoMonedaSeleccionada);
            })
    }
})