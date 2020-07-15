//Variables
const listaTweets = document.getElementById("lista-tweets");


//Event listener
eventListeners();

function eventListeners(){
    //Cuando se envia el formulario
    document.getElementById("formulario").addEventListener("submit", agregarTweets)

    //Borrar tweets
    listaTweets.addEventListener("click", borrarTweet);

    //contenido cargado
    document.addEventListener("DOMContentLoaded", localStorageListo);
 
}



//Funciones

//Añadir tweets del formulario
function agregarTweets(e){
    e.preventDefault();
    //Crear boton borrar
    const botonBorrar = document.createElement("a");
    botonBorrar.classList = "borrar-tweet";
    botonBorrar.innerText = "x";
    
    //Leer el valor de textarea
    const tweet = document.getElementById("tweet").value;
    //Crear elemento y añdirlo a la lista
    const li = document.createElement("li");
    li.innerText = tweet;
    //Añade el boton de borrar al tweet
    li.appendChild(botonBorrar);
    //Añede el tweet a la lista
    listaTweets.appendChild(li);
   
    //Añadir al local storage
    agregarTweetAlLocalStorage(tweet);

}

//Elimina eltweet del DOM
function borrarTweet(e){
    e.preventDefault();
    if(e.target.className === "borrar-tweet"){
        e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.innerText);
    }
}

//Mostrar datos local storage en la lista
function localStorageListo(){
    //estoy asinando a let la lista de tweets del local storage
    let tweets = obtenerTweetsLocalStorage();
    tweets.forEach(function(tweet) {
    //Crear boton borrar
    const botonBorrar = document.createElement("a");
    botonBorrar.classList = "borrar-tweet";
    botonBorrar.innerText = "x";
     //Crear elemento y añdirlo a la lista
     const li = document.createElement("li");
     li.innerText = tweet;
     //Añade el boton de borrar al tweet
     li.appendChild(botonBorrar);
     //Añede el tweet a la lista
     listaTweets.appendChild(li);

    });
} 

//Agrega tweet al Local Storage
function agregarTweetAlLocalStorage(tweet){
    let tweets;
    tweets = obtenerTweetsLocalStorage();

    //Añadir el nuevo tweets
    tweets.push(tweet);

    //Convertir de string a arreglo para local storage
    localStorage.setItem("tweets", JSON.stringify(tweets));

}

//comprobar que haya elementos en local storage, retorna un arreglo
function obtenerTweetsLocalStorage(){
    let tweets;
    //Revisamos los valores de Local storage
    if(localStorage.getItem("tweets") === null){
        tweets = [];
    }else{
        tweets = JSON.parse(localStorage.getItem("tweets"));
    }
    return tweets;
}
//Eliminar tweet del locaal storage
function borrarTweetLocalStorage(tweet){
    let tweets, tweetBorrar;
    //Elimina la X del tweet
    tweetBorrar = tweet.substring(0,tweet.length - 1);

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet, index){
        if(tweetBorrar === tweet){
            tweets.splice(index, 1);
        }
    });
    localStorage.setItem("tweets", JSON.stringify(tweets));
}
