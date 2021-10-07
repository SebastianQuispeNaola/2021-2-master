/*
EJEMPLO PARA JSON
*/
var btnSolicitar = document.getElementById("btnSolicitar");
var btnMostrar = document.getElementById("btnMostrar");

btnSolicitar.addEventListener("change", cargar);
btnMostrar.addEventListener("click", mostrar);

var contenido;

function cargar(event) {
    var f = event.target.files[0];
    // Validar el tipo de archivo

    if ( f.type.indexOf("json") === -1) {
        alert("El tipo del archivo no puede procesarse !!");
        return;
    }

    var reader = new FileReader();
    // Eventos asociados
    reader.onloadstart = function(event) {
        console.log("en loadstart ...");
    }

    reader.onprogress = function(event) {
        console.log("en progress ...");
    }

    reader.onload = function(event) {
        contenido = reader.result;
        console.log("en load ... " + contenido);
    }

    reader.onloadend = function(event) {
        console.log("en loadend ...");
    }

    reader.onerror = function(event) {
        console.log("OCURRIO UN ERROR " + this.result.error);
    }

    // Indicar la lectura
    reader.readAsText(f);

}

function mostrar() {

    // Convertir la cadena a ... json
    var objetoJSON = JSON.parse(contenido);

    // AHora hay que mostrar
    var parrafo = document.createElement("p");
    var titulo = document.createElement("h1");
    var imagen = document.createElement("img");

    // Asignar valores a cada nodo
    titulo.id = "superheroe";
    titulo.textContent = objetoJSON.nombre;
    titulo.classList.add("h1");

    parrafo.textContent = objetoJSON.descripcion;

    imagen.src = objetoJSON.imagen;

    // Agregar al DOM
    document.getElementById("contenido").appendChild(titulo);
    document.getElementById("contenido").appendChild(imagen);
    document.getElementById("contenido").appendChild(parrafo);


}