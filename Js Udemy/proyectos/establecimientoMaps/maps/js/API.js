class API {
    async obtenerDatos(){
        const total = 1000;
        //Obtener los datos desde la Api
        const datos = await fetch(`https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=${total}`);

        //Retornar datos como Json
        const respuestaJSON = await datos.json();
        
        return {
            respuestaJSON
        }
    }
}