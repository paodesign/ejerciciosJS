document.getElementById("txtBtn").addEventListener("click", cargarTxt);
document.getElementById("jsonBtn").addEventListener("click", cargarJSON);
document.getElementById("apiBTN").addEventListener("click", cargarREST);

function cargarTxt() {
    //Fetch cargando archivos locales
    fetch("datos.txt")
        //Usamos promises,abrimos la conexión. y elegimos de que tipo sera los datos(res), para eso revisamos el proto
        .then(res => res.text())
        //Regresa los datos
        .then(data => document.getElementById("resultado").innerHTML = data)
        .catch(error => console.log(error));
}

function cargarJSON() {
    //Fetch cargdo Json local. fetch ("url")
    fetch("empleados.json")
        .then(res => res.json())
        .then(data => {
            let html = "";
            data.forEach(function (empleado) {
                html += `
                <li>${empleado.nombre}, ${empleado.puesto}</li>
                `;
            })
            document.getElementById("resultado").innerHTML = html;
        })
        .catch(error => console.log(error));
}

function cargarREST() {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(imagenes => {
            let html = "";
            imagenes.forEach(function (imagen) {
                html += `
                <li> <a target="_blank" href="${imagen.url}">Ver imagen</a>
                ${imagen.title}
                </li>
                `
            });
            document.getElementById("resultado").innerHTML = html;
        })
        .catch(error => console.log(error));

}