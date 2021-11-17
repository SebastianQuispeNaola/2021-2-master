var cabecera = document.head;
console.log(cabecera);

var cuerpo = document.body;
console.log(cuerpo);

var lpAntiguo = document.getElementById("antiguo")
console.log(lpAntiguo)

var nodos = lpAntiguo.childNodes;
var aa = [];

for (var i=0; i < nodos.length; i++) {
    if ( nodos[i].nodeType === document.ELEMENT_NODE) {
        aa.push( nodos[i].textContent )
    }
}

document.getElementById("rpta1").innerHTML = aa;

/* Lenguajes modernos */
var lpModerno = document.getElementById("moderno")

nodos = lpModerno.childNodes;
var am = [];

for (var i=0; i < nodos.length; i++) {
    if ( nodos[i].nodeType === document.ELEMENT_NODE) {
        am.push( nodos[i].textContent )
    }
}

document.getElementById("rpta2").innerHTML = am;