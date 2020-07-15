/* Primer clase DOM 
 var elemtosP = document.getElementsByTagName("p");
var segundoParrafo = document.getElementById("dos");
//1-crear un elemento
var elemento = document.createElement("h2");
//2-crear un nodo de texto
var contenido = document.createTextNode("Este es el titular");
//3-añadir el nodo de texto al elemento
elemento.appendChild(contenido);
//4-agregar atributos al elemento
elemento.setAttribute("align", "center");
//5- agregar el elemento al documento
document.getElementById("subtitulo").appendChild(elemento);*/
 //var elemento = document.createElement("li");
 //var contenido = document.createTextNode("Nuevo Texto."); 
 //elemento.appendChild(contenido);

 /*cuando conocemos el padre:(elemento colocado al final)
 var padre = document.getElementById("lista");
 padre.appendChild(elemento);*/

 /*cuando no conocemos el padre del elemento:(elemento colocado al final)
 var padre = document.getElementsByTagName("li")[0].parentNode;*/

/* colocar un elemento al inicio del elemento padre:
var padre = document.getElementsByTagName("li")[0].parentNode;
var primerhijo = document.getElementsByTagName ("li")[0];
padre.insertBefore(elemento,primerhijo);*/

// Como modificar, remplazar y eliminar Nodos
//var primerElemento = document.getElementById("primero");
//agregar texto o modificar texto
//primerElemento.innerHTML = "Contenido";//se puede acceder a todo el Html oseo se pueden agregar etiquetas dentro
//primerElemento.textContent = "Nuevo contendo"; //se puede agregar solo texto.

/*//como reemplazar nodos del DOM:
var elemento = document.createElement("li");
var contenido = document.createTextNode("Nuevo Texto."); 
elemento.appendChild(contenido);
var padre = document.getElementsByTagName("li")[0].parentNode;
var referencia =document.getElementsByTagName("li")[0];
padre.replaceChild(elemento,referencia)//padre.replaceChild(nueno elemento, elemnto reemplazado)*/

//Eliminar elementos del DOM:
var elemento = document.createElement("li");
var contenido = document.createTextNode("Nuevo Texto."); 
elemento.appendChild(contenido);
var padre = document.getElementsByTagName("li")[0].parentNode;
var referencia =document.getElementsByTagName("li")[0];
padre.removeChild(referencia);




