document.querySelector("#generar-nombre").addEventListener("submit", cargarNombres);

function cargarNombres(e){
    e.preventDefault();

   //Leer las variables
   const origen = document.getElementById("origen");
   const origenSeleccionado = origen.options[origen.selectedIndex].value;
 
   const genero = document.getElementById("genero");
   const generoSeleccionado = genero.options[genero.selectedIndex].value;

   const cantidad = document.getElementById("numero").value;
   
   let url = "";
   url += "https://randomuser.me/api/?";
   //Si hay origen agregar a la URL
   if(origenSeleccionado !== ""){
    url += "nat=${origenSeleccionado}&";
   }
   //Si hay genero agregar a la URL
   if(generoSeleccionado !== ""){
    url += "gender=${gereroSeleccionado}&";
   }
   //Si hay cantidad agregar a la URL
   if(cantidad !== ""){
    url += "results=${cantidad}&";
   }

   //Conectar con AJAX
   //Iniciar XMLHttpRequest
   const xhr = new XMLHttpRequest();
   //Abrir conexion
   xhr.open("GET", url, true);
   //Datos e impresion
   xhr.onload = function(){
        if(this.status === 200){
            const nombres= JSON.parse(this.responseText);
            //Generar el Html
            let htmlNombres = "<h2>Nombres Generados</h2>";
            htmlNombres += '<ul class="lista">';
            //Imprimir cada nombre
            nombres.forEach(function(nombre) {
                htmlNombres += `
                    <li>${nombres.name}</li>
                `
            });

            htmlNombres += '</ul>'

            document.getElementById("resultado").innerHTML = htmlNombres;

        }
   }
   //Enviar el request
   xhr.send();
}