//Async Await
async function obtenerClientes(){
    //Crear un Promises
    const clientes = new Promise((resolve, rejetc) => {
        setTimeout(() => {
            resolve('Clientes descargados...');
        },2000);
    });
    //Erros o no...
    const error = false;

    if(!error){
        const respuesta = await clientes;
        return respuesta;
    }else{
        await Promise.reject('Hubo un error...');
    }
}
obtenerClientes()
    .then(res => console.log(res))
    .catch(error => console.log(error));