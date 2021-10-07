window.onload = function() {
    console.log("Evento LOAD de la pagina")
}

/*
window.onunload = 
window.onbeforeunload = 
*/

window.onfocus = function() {
    console.log("Evento FOCUS ");
}

window.onblur = function() {
    console.log("Evento BLUR perdida de foco ");
}

window.onresize =function() {
    console.log("Evento resize");
}

window.onscroll=function() {
    console.log("Evento Scroll");
}

window.onmousemove = function(e) {
    console.log("Movimiento del mouse ...")
}