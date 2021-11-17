var lpAntiguo = document.getElementById("antiguo")

var nodos = lpAntiguo.childNodes;
var aa = [];

for (var i=0; i < nodos.length; i++) {
    if ( nodos[i].nodeType === document.ELEMENT_NODE) {
        aa.push( nodos[i].textContent )
    }
}

/* Lenguajes modernos */
var lpModerno = document.getElementById("moderno")

nodos = lpModerno.childNodes;
var am = [];

for (var i=0; i < nodos.length; i++) {
    if ( nodos[i].nodeType === document.ELEMENT_NODE) {
        am.push( nodos[i].textContent )
    }
}

/*
var total = aa.concat(am)
document.getElementById("rpta2").innerHTML = total;
*/

/*
COSAS DIFICILES
*/

// No quiero Eliminar y quiero agregar
/*
document.getElementById("rpta1").innerHTML = am;
am.splice(1,0,"Unlambda","Malbourg")
document.getElementById("rpta2").innerHTML = am;
*/

// quiero Eliminar y quiero agregar
/*
document.getElementById("rpta1").innerHTML = am;
am.splice(3,1,"Ooak!", "Unlambda","Malbourg")
document.getElementById("rpta2").innerHTML = am;
*/

// Quiero eliminar sin agregar
/*
document.getElementById("rpta1").innerHTML = am;
am.splice(3,2)
document.getElementById("rpta2").innerHTML = am;
*/

// Puedo agregar al inicio
document.getElementById("rpta1").innerHTML = am;
am.unshift("Zimbu")
document.getElementById("rpta2").innerHTML = am;

// Quiero agregar al final
am.push("Zimbu2")
document.getElementById("rpta2").innerHTML = am;

// Colas y Pilas
/*
document.getElementById("rpta1").innerHTML = am;
var x = am.pop();
document.getElementById("rpta2").innerHTML = am;
*/

document.getElementById("rpta1").innerHTML = am;
var y = am.shift();
document.getElementById("rpta2").innerHTML = am;
