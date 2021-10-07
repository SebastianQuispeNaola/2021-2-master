/* Obtener los valores del formulario */
function agregar() {
    var valor = document.getElementById("lengpro").value;

    var radios = document.getElementsByName("tipo");
    var opcion = '';
    for (var i=0; i < radios.length; i++ ) {
        if ( radios[i].checked ) {
            opcion = radios[i].value;
        }
    }

    /* Validar que se haya seleccionado algo */

    /*
    PASO 1: Crear un nodo
    */
    var nodo = document.createElement("li");

    /*
    PASO 2: Setear algunos atributos
    */
    nodo.id = "XYZ-1";
    nodo.textContent = valor;
    nodo.classList.add("agregado");

    /*
    PASO 3: Agregar el nodo al DOM
    */
    document.getElementById("antiguo").appendChild(nodo);


}

function agregarAntes() {
    /*
    PASO 1: Crear un nodo
    */
    var nodo = document.createElement("li");

    /*
    PASO 2: Setear algunos atributos
    */
    nodo.id = "XYZ-2";
    nodo.textContent = "Java 17 ...";
    nodo.classList.add("agregado");

    /*
    PASO 3: Agregar el nodo al DOM
    Primero hay que obtener el nodo de referencia
    */
    var nodobase = document.getElementById("F");

    document.getElementById("moderno").insertBefore(nodo, nodobase);    
}


function reemplazar() {
    /*
    PASO 1: Crear un nodo
    */
    var nodo = document.createElement("li");

    /*
    PASO 2: Setear algunos atributos
    */
    nodo.id = "XYZ-3";
    nodo.textContent = "Modula-2";
    nodo.classList.add("reemplazo");

    /*
    PASO 3: Reemplazo el nodo en el DOM
    NEcesito un nodo de referencia al cual voy a reemplazar
    */
    var nodoareemplazar = document.getElementById("F");

    document.getElementById("moderno").replaceChild(nodo, nodoareemplazar); 
}

function eliminar() {
    var nodoaeliminar = document.getElementById("F");
    document.getElementById("moderno").removeChild(nodoaeliminar)

}

/* PROGRAMA PRINCIPAL */

document.getElementById("antiguo").innerHTML = "<li class='agregado'>Culprit</li>"