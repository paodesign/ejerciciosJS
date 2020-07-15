const comprarBoleto = (function () {

    //Privado
    let evento = "Conferencia JS 2020";
    const adquirirBoletos = () =>{
        const elemento = document.createElement('p');
        elemento.textContent = `Comprar boletos para ${evento}`;
        document.querySelector('#app').appendChild(elemento);

    }


    //Público
    return {
        mostrarBoleto: function () {
            adquirirBoletos();

        }
    }

})();

comprarBoleto.mostrarBoleto();
console.log()