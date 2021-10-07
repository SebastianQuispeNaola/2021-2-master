var btnSolicitar = document.getElementById("btnSolicitar");
var btnMostrar = document.getElementById("btnMostrar");

btnSolicitar.addEventListener("change", cargar);
btnMostrar.addEventListener("click", mostrar);

var contenido;

function cargar(event) {
    var f = event.target.files[0];
    // Validar el tipo de archivo

    if ( f.type.indexOf("xml") === -1) {
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
    var parser = new DOMParser();

    // Convertir la cadena a ...xml
    var cadenaXML = parser.parseFromString(contenido,"text/xml");

    // AHora hay que mostrar
    var parrafo = document.createElement("p");
    var titulo = document.createElement("h1");
    var imagen = document.createElement("img");

    // Asignar valores a cada nodo
    titulo.id = "superheroe";
    titulo.textContent = cadenaXML.getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
    titulo.classList.add("h1");

    parrafo.textContent = cadenaXML.getElementsByTagName("descripcion")[0].childNodes[0].nodeValue;

    imagen.src = cadenaXML.getElementsByTagName("imagen")[0].childNodes[0].nodeValue;

    // Agregar al DOM
    document.getElementById("contenido").appendChild(titulo);
    document.getElementById("contenido").appendChild(imagen);
    document.getElementById("contenido").appendChild(parrafo);


}