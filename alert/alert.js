"use strict"

// Notificación en ventana
alert ("Hola");


// Ventana para ingreso de datos
window.addEventListener("load", function (){
    let email = prompt("¿Quieres recibir nuestras novedades?", "tuemail@correo.com");
    if (email == null || email == "") {
        console.log("Sin datos")
    } else {
        console.log(email);
    }
});

// Ventana de confirmación
window.addEventListener("load", function () {
    let resultado = confirm ("¿Redireccionar al buscador?");
    console.log(resultado);
    if (resultado){
        window.location= "https://google.com"
    } else {
        window.location.href
    }
});