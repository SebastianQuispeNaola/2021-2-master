/*
Ejemplo de uso de modulo OS
*/

const os = require("os");

console.log("Sistema Operativo : " + os.platform);
console.log("Version SO        : " + os.version);
console.log("Memoria total     : " + os.totalmem + " bytes");
console.log("Memoria libre     : " + os.freemem + " bytes");