//Destructuring en funciones
//Destructuring forma anterior
/*function reservacion(completo, opciones){
    opciones = opciones || {};
   
    let metodo = opciones.metodoPago;
    let cantidad = opciones.cantidad;
    let dias = opciones.dias;

    console.log(metodo);
    console.log(cantidad);
    console.log(dias);
}

reservacion(
    true,
    {
        metodoPago: "tarjeta",
        cantidad: 2000,
        dias: 3

    }
)*/

//con destructuring ahora
/*function reservacion(completo, opciones){
   let{metodoPago, cantidad, dias} = opciones;

    console.log(metodoPago);
    console.log(cantidad);
    console.log(dias);
}

reservacion(
    true,
    {
        metodoPago: "tarjeta",
        cantidad: 2000,
        dias: 3

    }
)*/
//Prametros por default en una funcion
function reservacion(completo,
 {
    metodoPago = "Efectivo",
    cantidad = 0,
    dias = 0
} = {}
)
{
   if(completo){
       console.log("Proceder a reservar...");
   }else{
       console.log("Abandonar");
   }
} 
reservacion(
    false,
    {
    }
);