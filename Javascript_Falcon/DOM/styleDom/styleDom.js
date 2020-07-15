//var encabezado = document.getElementById("encabezado");
//encabezado.style.color = "navy";
//encabezado.className = encabezado.className.replace(titulo,tituloGrande);

var zoom = function(){
    var thumb = document.getElementById("thumb");
    //thumb.setAttribute("class","Thumb grande");
    if (thumb.className == "thumb"){
        thumb.className = "thumb grande";
    }else{
        thumb.className = "thumb";
    }

}