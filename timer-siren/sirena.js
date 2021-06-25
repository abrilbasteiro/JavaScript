"use strict"

var temporizador = setInterval(function () {
    setColor();
}, 500)

function setColor() {
    var pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "red" : "blue";
}