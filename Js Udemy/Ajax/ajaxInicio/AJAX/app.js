document.getElementById("cargar").addEventListener("click", cargaDatos);
//Llamado Ajax
function cargaDatos(){
    //Crear un objeto xmlhttprequest
    const xhr = new XMLHttpRequest();

    //Abrir una conexión
    xhr.open("GET", "datos.txt", true);

    //Una vez que se carga
    //forma nueva:
   /* xhr.onload = function(){
        //200 : Correcto |  403 : Prohibido  | 404 : No se encontro
        if(this.status === 200){
            document.getElementById("listado").innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }*/

    //otra forma antigua:
    xhr.onreadystatechange = function(){
        console.log(`Estado ${this.readyState}`);
        if(this.readyState === 4 && this.status ===200){
            //console.log(this.responseText);
        }
    }
    //Ready State
    /*
    0 - No inicializo
    1 - Conexión establecida
    2 - Recibido
    3 - Procesado
    4 - Respuesta lista
     */

    //Enviar el request
    xhr.send();
}