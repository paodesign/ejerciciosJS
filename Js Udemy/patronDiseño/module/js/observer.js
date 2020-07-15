//Observer: es un patrón de comportamiento. se lo conoce por observer o suscriptor-publicador
let observer = {
    obtenerOferta: function(callback){
        if(typeof callback === "function"){
            this.subscribers[this.subscribers.length] = callback;
        }
    },
    cancelarOferta: function(callback){
        for(let i = 0; i < this.subscribers.length; i++){
            if(this.subscribers[i] === callback){
                delete this.subscribers[i];
            }
        }
    },
    publicarOferta: function(oferta){
        for(let i = 0; i < this.subscribers.length; i++ ){
            if(typeof this.subscribers[i] === 'function'){
                this.subscribers[i](oferta);
            }
        }
    },
    crear: function(objeto){
        for(let i in this){
            if(this.hasOwnProperty(i)){
                objeto[i] = this[i];
                objeto.subscribers = [];
            }
        }
    }
}
//Vendedores
const udemy = {
    nuevoCurso: function(){
        const curso = 'Nuevo curso de JavaScript';
        this.publicarOferta(curso);
    }
}
const facebook = {
    nuevoAnuncio: function(){
        const oferta = 'Compra un celular';
        this.publicarOferta(oferta);
    }
}
//Crear los publicadores
observer.crear(udemy);
observer.crear(facebook);

const mirko = {
    compartir: function(oferta){
        console.log('Mirko dice: Excelente oferta! ' + oferta);
    }
};

const branca = {
    interesa: function(oferta){
        console.log('Branca dice: Me interesa la oferta. ' + oferta);
    }
}

udemy.obtenerOferta( mirko.compartir);
udemy.obtenerOferta( branca.interesa);
udemy.nuevoCurso();
udemy.cancelarOferta( branca.interesa);
udemy.nuevoCurso();