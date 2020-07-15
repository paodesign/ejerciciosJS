(function(){
    var contador = 0;
    //timeout
    var saludo = function(){
        contador++;
        console.log(contador);

        if(contador === 5){
            clearInterval(intervalo);
        }

    };
    //setTimeout(saludo, 1000);

    //interval
    var intervalo = setInterval(saludo, 1000);
}())