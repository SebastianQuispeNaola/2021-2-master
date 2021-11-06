/*
Ejemplo de uso de FS
*/

const fs = require("fs");

console.log("* * * Inicio * * *");

fs.writeFile( './archivo1.txt',
    "pablito clavo un clavito\nmi mama me mima con mimi",
    function(e) {
        if (e) {
            console.log("OCurrio un error R/W" + e)
        } else {
            console.log("Se genero el archivo de texto")
        }
    }
)

console.log("* * * Fin * * *");
