"use strict"

class Producto {
    constructor(numSerie){
        this.numSerie = numSerie;
        this.tiempoGarantia = 100;
    }

    static get infoTienda(){
        console.log(`Productos de la tienda Patito Inc.`)
    }

    set garantia(value){
        this.tiempoGarantia -= value;
    }

    get garantia(){
        return this.tiempoGarantia;
    }
}

class Pantalla extends Producto{
    constructor(numSerie, marca, modelo, pulgadas) {
        super(numSerie);
        this.marca = marca;
        this.modelo = modelo;
        this.pulgadas = pulgadas;
    }
    
    encendido() {
        console.log(`La pantalla ${this.marca} se ha encendido`);
        this.garantia = 1;
    }

    info() {
        console.log(`La pantalla ${this.marca} de modelo ${this.modelo} es de ${this.pulgadas} pulgadas.`);
    }

}

const tvSala = new Pantalla ("13579", "Master", "Oasis", 55);
const tvHabitacion = new Pantalla ("24680", "Origin", "Artemis", 80)

