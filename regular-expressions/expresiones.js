 //"use strict"

var expresion = new RegExp ("como");
console.log(expresion.test("Hola, como estas?"));

var expresion2 = /[0-9]/;
console.log(expresion2.test("Tengo 2 perros"));

var parrafo = /hola \/n como andas/;
console.log(parrafo.test("hola como andas"));

var fecha = /\d\d-\d\d-\d\d\d/;
console.log(fecha.test("14-07-1991"));

var fecha1 = /[\w]/;
console.log(fecha1.test("14-jun-1991"));

var negacion = /[^01]/;
console.log(negacion.test("0100110001010"));

var hora = /\d{2}:\d{2}/;
console.log(hora.test("18:45"));

var unsensitive = /Hola Mundo/i;
console.log(unsensitive.test("Hola mundo!"));

var subexpresion = /Whoo+(hoo+)+/i;
console.log(subexpresion.test("Whoohoooo"));

var subexpresion2 = /(20|21)\d{2}/;
console.log(subexpresion2.test("2018"));

// Otra forma de escribirlo
// var subexpresion2 = /(20|21)\d{2}/.test("2018");
// console.log(subexpresion2);

var ejecutar = /\d+/.exec("En el año 2009");
console.log(ejecutar);

// Ejecutar directo desde console.log
console.log("En el año 2009".match(/\d+/));

var limite = /\bcat\b/.test("categoria");
console.log(limite);

var expresionInicio = /^Hola/.test("Hola amigos");
console.log(expresionInicio);

var expresionFin = /amigos$/.test("Hola amigos");
console.log(expresionFin);

var remplazo = "El cliente pidió pastas";
console.log(remplazo.replace(/pastas/, "pollo"));

var remplazo2 = "El cliente pidió pollo y comió su pollo";
console.log(remplazo2.replace(/pollo/g, "pescado"));

var busqueda = "Esta historia continuará...";
console.log(busqueda.search(/\W/));

//-- LastIndex --
var ultimo = /a/g;
console.log(ultimo.lastIndex);

var coincidencia = ultimo.exec("Hola como estas");
console.log(coincidencia);

ultimo.lastIndex = 5
console.log(ultimo.lastIndex);

var coincidencia = ultimo.exec("Hola como estas");
console.log(coincidencia);
console.log(ultimo.lastIndex);

var coincidencia = ultimo.exec("Hola como estas");
console.log(coincidencia);
console.log(ultimo.lastIndex);
//----------------------------------------------------

var mensaje = "Juan tiene 36 años, Luna tiene 33 años, Ana tiene 26 años y León tiene 21 años.";
var patron = /\b(\d+)\b/g;
var match;

while (match = patron.exec(mensaje)) {
    console.log(match);
    console.log("Se encontró ", match[1], " en ", match.index);
};


//-- Evaluar correo electrónico --
$(function () {
    var contactForm = document.getElementById("contactForm");
    contactForm.onsubmit = function (e) {
        e.preventDefault();
        console.log("¿El correo es válido?", isValidEmail());
    }
   
    var isValidEmail = function(){
        var email = document.getElementById("email");
        return /^\w+([\.\+\-]?\w+)*@([\.-]?\w+)*(\.\w{2,4})+$/.test(email.value);
    
    }
});
//----------------------------------------------------