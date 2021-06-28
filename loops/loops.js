"use strict"

function imprimir(palabra) {
    console.log("______________\n\n " + palabra)
}


// FOR
console.log(" FOR Loop");

var productos = 5

for (let contador = 0; contador < productos; contador++){
    console.log("Producto #" + contador);
}


// FOR...in 
imprimir("FOR...In Loop")
var muebles = ["Mesa", "Silla", "Sillón"];
for (let mueble in muebles) {
    console.log(muebles[mueble])
} 


//ForEach
imprimir("ForEach Loop")
muebles.forEach(mueble=>console.log(mueble))


// While
imprimir("While Loop");

var productos = 5

while (productos > 0) {
    console.log("Producto vendido");
    productos--;
}

console.log("Sin stock");


// Do... While
imprimir("Do...While Loop");

var productos = 5

do {console.log("Producto vendido");
    productos--;}
while (productos >= 1);

// Some
imprimir("Some method")
var plantas = [
    {
    nombre: "Margarita",
    precio: 20
    },
    {
    nombre: "Rosa",
    precio: 40
    },
    {
    nombre: "Clavel",
    precio: 30
    }
];

var resultado = plantas.some( planta => planta.precio < 30);
console.log("¿Puedo comprar alguna planta con $30.-? ", resultado);

