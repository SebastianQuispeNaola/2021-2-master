/* Demo de uso de modulos */

const calc = require("./matematicas/matematica");

console.log("SUMAR  : " + calc.suma(1,2) );
console.log("RESTAR : " + calc.resta(5,2) );
console.log("PI     : " + calc.PI);