var cabecera = document.head;
console.log(cabecera);

var cuerpo = document.body;
console.log(cuerpo);

var lpAntiguo = document.getElementById("antiguo")
console.log(lpAntiguo)

var nodos = lpAntiguo.childNodes;
var aa= [];

for (var i=0; i<nodos.length;i++){
    if(nodos[i].nodeType === document.ELEMENT_NODE){// 3 iguales compara valores con tipo
        aa.push( nodos[i].textContent )
    }
}

document.getElementById("rpta1").innerHTML == aa;