let DB;

const form = document.querySelector('form'),
    nombreMascotas = document.querySelector('#mascota'),
    nombreCliente = document.querySelector('#cliente'),
    telefono = document.querySelector('#telefono'),
    fecha = document.querySelector('#fecha'),
    hora = document.querySelector('#hora'),
    sintomas = document.querySelector('#sintomas'),
    citas = document.querySelector('#citas'),
    headingAdministracion = document.querySelector('#administra');

//Esperar por el DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    //Crear la Base de Datos
    let crearDB = window.indexedDB.open('citas', 1);

    //Si hay un error eviarlo a la consola
    crearDB.onerror = function () {
        console.log('Hubo un error.');
    }

    //Si todo esta bien se muestra en consola, y asignar a la base de datos
    crearDB.onsuccess = function () {
        console.log('Todo está bien!');

        //Asignar a la base de datos
        DB = crearDB.result;

        mostrarCitas();
    }

    //Este método sólo corre una vez y es ideal para crear el schema
    crearDB.onupgradeneeded = function (e) {
        //El evento es la misma base de datos
        let db = e.target.result;

        //Define el objectstore, toma 2 parametros: el nombre de la base de datos y las opciones
        //keyParth es el indice de la base de datos, opciones de pasa {como objeto}
        let objectStore = db.createObjectStore('citas', { keyPath: 'key', autoIncrement: true });

        //Crear los indices y campos de la base de datos, createIndex : 3 parametros, nombre, keyPath y opciones.
        objectStore.createIndex('mascotas', 'mascotas', { unique: false });
        objectStore.createIndex('cliente', 'cliente', { unique: false });
        objectStore.createIndex('telefono', 'telefono', { unique: false });
        objectStore.createIndex('fecha', 'fecha', { unique: false });
        objectStore.createIndex('hora', 'hora', { unique: false });
        objectStore.createIndex('sintomas', 'sintomas', { unique: false });
        console.log('Base de datos creada y lista!');
    }
    //Cuando el formulario se  envia
    form.addEventListener('submit', agregarDatos);

    function agregarDatos(e) {
        e.preventDefault();

        const nuevaCita = {
            mascota: nombreMascotas.value,
            cliente: nombreCliente.value,
            telefono: telefono.value,
            fecha: fecha.value,
            hora: hora.value,
            sintomas: sintomas.value,
        }

        //en IndexedDB se utilizan las transacciones
        let transaction = DB.transaction(['citas'], 'readwrite');
        let objectStore = transaction.objectStore('citas');
        //console.log(objectStore)
        let peticion = objectStore.add(nuevaCita);

        peticion.onsuccess = () => {
            form.reset();
        }
        transaction.oncomplete = () => {
            console.log('Cita agregada.');
            mostrarCitas();
        }
        transaction.onerror = () => {
            console.log('Hubo un error');
        }
        
    }

    function mostrarCitas() {
        //Limpiar  las citas anteriores 
        while (citas.firstChild) {
            citas.removeChild(citas.firstChild);
        }
        //Crear un objectStore
        let objectStore = DB.transaction('citas').objectStore('citas');

        //Esto retorna una peticion
        objectStore.openCursor().onsuccess = function (e) {
            //Cursor se va ubicar en el registro indicado para acceder a los datos.
            let cursor = e.target.result;

            if(cursor){
                let citaHTML = document.createElement('li');
                citaHTML.setAttribute('data-cita-id', cursor.value.key);
                citaHTML.classList.add('list-group-item');

                citaHTML.innerHTML = `
                <p class="font-weight-bold">Mascota:<span class="font-weight-normal"> ${cursor.value.mascota}</span>
                </p>
                <p class="font-weight-bold">Cliente:<span class="font-weight-normal"> ${cursor.value.cliente}</span>
                </p>
                <p class="font-weight-bold">Teléfono:<span class="font-weight-normal"> ${cursor.value.telefono}</span>
                </p>
                <p class="font-weight-bold">Fecha:<span class="font-weight-normal"> ${cursor.value.fecha}</span>
                </p>
                <p class="font-weight-bold">Hora:<span class="font-weight-normal"> ${cursor.value.hora}</span>
                </p>
                <p class="font-weight-bold">Síntomas:<span class="font-weight-normal"> ${cursor.value.sintomas}</span>
                </p>
                `;
                //Botón de borrar
                const botonBorrar = document.createElement('button');
                botonBorrar.classList.add('borrar', 'btn', 'btn-danger');
                botonBorrar.innerHTML = '<span aria-hidden="true">x</span> Borrar';
                botonBorrar.onclick = borrarCita;
                citaHTML.appendChild(botonBorrar);

                //append al padre
                citas.appendChild(citaHTML);
                //consultar los prósimos registros
                cursor.continue();
            }else{
                if(!citas.firstChild){
                    //Cuando no hay registros
                    headingAdministracion.textContent ='Agrega tu cita para comenzar.';
                    let listado = document.createElement('p');
                    listado.classList.add('text-center');
                    listado.textContent = 'No hay citas.';
                    citas.appendChild(listado);
                }else{
                    headingAdministracion.textContent = 'Administra tus citas:';
                }

            }
        }
    }
    function borrarCita(e){
       console.log(e.target.parentElement);
    }
})

