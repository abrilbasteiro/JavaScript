"use strict"
// Multidimensional array
var platillos = ["Arroz", "Pasta", "Asado"]
var bebidas = ["Agua", "Vino", "Jugo"]
var menu = [platillos, bebidas]

console.log("Selección: ", menu[0][1]);

// Push
platillos.push("Ceviche", "Pollo");
console.log("Platillos: ", platillos);

// Pop
platillos.pop();
console.log("Platillos: ", platillos);

// Array.from
var frutasHTML = Array.from(document.querySelectorAll(".frutas p "))
var frutas = frutasHTML.map(fruta =>fruta.textContent)

console.log("Frutas: ", frutas)

// Sort
frutas.sort();
console.log("Frutas en orden alfabético: ", frutas);

// Reverse
frutas.reverse();
console.log("Frutas en orden invertido: ", frutas);
