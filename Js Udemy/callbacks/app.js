//Callback en ForEach
//const ciudades = ["Londres","New York", "Madrid", "Paris", "Viena"];

//Inline callback
/*ciudades.forEach(function(ciudad){
    console.log(ciudad);
});*/

//Con funcion definida
/*function callback(ciudad){
    console.log(ciudad);
}
ciudades.forEach(callback);*/

//Listado de paises
const paises = ["Francia", "España", "Portugal", "Australia", "Inglaterra", "Irlanda"];
//Se agrega un país despúes de 2 segundos
function nuevoPais(pais, callback){
    setTimeout(function(){
        paises.push(pais);
        callback();
    }, 2000);
}


//Los paises se muestran despúes de 1 segundo
function mostrarPaises(){
    setTimeout(function(){
        let html = "";
        paises.forEach(function(pais){
            html += `<li>${pais}</li>`;
        })
        document.getElementById("app").innerHTML = html;
    }, 1000);
}
//Agregar un nuevo país
nuevoPais("Alemania", mostrarPaises);

//Mostrar paises
mostrarPaises();
