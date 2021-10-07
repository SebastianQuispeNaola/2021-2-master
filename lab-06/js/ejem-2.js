window.addEventListener("mousemove",mover);

function mover(e) {
    var x = e.clientX;
    var y = e.clientY;

    var coord = "Coordenadas del mouse X=" + x + " Y="+ y;

    var nodo = document.createElement("p");
    nodo.id = "coord";
    nodo.textContent = coord;

    var nodoC = document.getElementById("coord");
    if ( nodoC === null) {
        nodo.classList.add("agregado");
        document.getElementById("lateral").appendChild(nodo);
    } else {
        nodo.classList.add("reemplazo");
        document.getElementById("lateral").replaceChild(nodo, nodoC);
    }


}

/*
Ejemplo 2
*/
var duke = document.getElementById("duke");
// duke.addEventListener("click", click);
var seMira = true;

function click() {

    if ( seMira == true) {
        seMira = false;
        duke.style.opacity = 0.5;
    } else {
        seMira = true;
        duke.style.opacity = 1.0;        
    }
}

/*
Ejemplo 3 
*/
var rotado = false;

duke.addEventListener("dblclick", dobleclick);

function dobleclick() {
    if ( rotado == true) {
        rotado = false;
        duke.src = "img/duke.png"
    } else {
        rotado = true;
        duke.src = "img/duke_rotado.png"      
    }
}

/*
Evento de teclado
*/
document.body.addEventListener("keyup", desplazar);

function desplazar(e) {
    console.log("Tecla pusalda " +  e.keyCode);

    var imagen = document.getElementById("duke");
    var style = window.getComputedStyle(imagen);

    // las coordenadas
    var top = parseInt(style.top);
    var left = parseInt(style.left);

    switch( e.keyCode ) {
        // Arriba
        case 38:
            imagen.style.setProperty("top", top-10 + "px");
            break;

        // Abajo
        case 40:
            imagen.style.setProperty("top", top+10 + "px");
            break;

        // Izquierda
        case 37:
            imagen.style.setProperty("left", left-10 + "px");
            break;

        // Derecha
        case 39:
            imagen.style.setProperty("left", left+10 + "px");
            break;

    }

}