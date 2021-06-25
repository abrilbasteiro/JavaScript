"use strict"

var foto = document.createElement("img");
foto.src = "img/foto1.jpg";
foto.name = "foto1";
foto.height= 600;
foto.width = 1000;
document.body.appendChild(foto);

foto.addEventListener("click", function() {

        if (this.name ==="foto1") {
            this.src ="img/foto2.jpg"; 
            this.name ="foto2";
        }else{
        this.src ="img/foto1.jpg"; 
        this.name ="foto1";
        }
        this.height = 600;
        this.width = 1000;
})