async function leerTodos(){
    //Esperar la respuesta
    //await van a ir bloquendo que no se esjecute hasta que se cumpla la funcion anterior
    const respuesta = await fetch ('https://jsonplaceholder.typicode.com/todos');

    //Procede cuando la respuesta esta hecha
    const datos = await respuesta.json();
    return datos;
}
//Async Await siempre va a generar un Promises aunque no lo coloques
leerTodos()
    .then(usuarios => console.log(usuarios))
    .catch()
//La ventaja de usar Await es que no sabemos cuando tiempo va a tardar en cargar lo que traemos de la api, podemos esperar el tiempo que requiera mistra se ejecutan el resto de las cosas
//La ventaja de la programación asíncrona es que el código se sigue ejecutando, y no se van a estar bloqueando hasta que una se cumpla