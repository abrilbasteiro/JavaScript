"use strict"
console.log(" Función básica")
function saludar(nombre, edad) {
    var resultado = nombre + " tiene " + edad + " años";
    return resultado;
}

var mensaje = saludar ("Juan", 30);
console.log(mensaje);

// Arrow Function
console.log("\n Arrow Function")
var saludar = nombre => "Hola " + nombre;
console.log(saludar("Juan"));

// REST
console.log("\n Parámetros REST")
function cocinar (ingrediente1, ingrediente2, ingrediente3, ...masIngredentes) {
    console.log("Para hacer una pizza necesito");
    console.log("Ingrediente 1: ", ingrediente1);
    console.log("Ingrediente 2: ", ingrediente2);
    console.log("Ingrediente 3: ", ingrediente3);
    console.log("Ingredientes opcinales: ", masIngredentes);
}

cocinar("Harina", "Salsa", "Queso", "Huevo", "Jamón", "Morrón", "Cebolla");

// SPREAD
console.log("\n Parámetros SPREAD")
function pizza (ingrediente1, ingrediente2, ingrediente3) {
    console.log("Para hacer una pizza necesito");
    console.log("Ingredientes principales: ", ingrediente1);
    console.log("Opcion 1: ", ingrediente2);
    console.log("Opcion 2: ", ingrediente3);
}
var ingredientesBase = ["Harina", "Salsa", "Queso"]
pizza(ingredientesBase, "Jamón y Huevo", "Jamón y Morrones");


// CallBacks
console.log("\n CallBacks")
function calcular(datoA, datoB, sumarCB) {
    var suma = datoA + datoB;
    sumarCB(suma);
}

calcular(2, 3, function(resultado){
    console.log("El resultado de la suma es ", resultado)
})