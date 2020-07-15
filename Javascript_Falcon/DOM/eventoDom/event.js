//modelos de eventos estandar
(function(){
    var saludo = function(e){
        console.log("oh yeah!");
        e.preventDefault();//para prevenir que vaya a un pagina
        //console.log("este evento es de tipo: " + e.target);  //e.type se usa para saber el tipo de evento//e.target se usa para saber a que objeto se esta aplicando el  evento.
    }

    //var input = document.getElementById("input");
    /* 1- opcion:
    boton.addEventListener("click",function()//al llamar al evento tenemos  que colocar dos parametro (tipo de evento, funcion)
    {
        console.log("funciona!");*/
    //input.addEventListener("focus",saludo); 
    //input.removeEventListener("focus",saludo);para eliminar
   //var boton = document.getElementById("boton");
    boton.addEventListener("click",saludo);
}())
