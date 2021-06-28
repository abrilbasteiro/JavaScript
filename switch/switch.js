"use strict"

var precio = 20;
var resultado = "";
switch (precio) {
    case 10:
        resultado = "El producto cuesta $10.-"
        break;
    
    case 20:
        resultado = "El producto cuesta $20.-"
        break;

    case 30:
        resultado = "El producto cuesta $30.-"
        break;

    default:
        resultado = "Ningún precio corresponde al valor del producto"
        break;
}

console.log(resultado)