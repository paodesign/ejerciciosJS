export class API {
    constructor(artista, cancion){
        this.artista = artista;
        this.cancion = cancion;
    }
    async consultarAPI(){
        const response = await fetch(`https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`);

        const respuesta = await response.json();
        
        return{
            respuesta
        }
    }
}