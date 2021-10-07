function mostrarReloj() {
    var fechaHora = new Date();
    var horas = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();
    var segundos = fechaHora.getSeconds();

    var ampm = "A.M.";
    if ( horas > 12 ) {
        ampm = "P.M.";
        horas = horas - 12;
    }

    if ( horas < 10 ) {
        horas = '0' + horas;
    }

    if ( minutos < 10 ) {
        minutos = '0' + minutos;
    }

    if ( segundos < 10 ) {
        segundos = '0' + segundos;
    }

    var cad = horas + ":" + minutos + ":" + segundos + " " + ampm;

    document.getElementById("reloj").innerHTML = cad;

}

function iniciar(e) {
    fid = setInterval(mostrarReloj,1000)

}

function detener(e) {
 clearInterval(fid);
}

/* MAIN PROGRAM */
var botonI = document.getElementById("btnIniciar");
var botonD = document.getElementById("btnDetener");
var fid;

// asociar handlers a eventos
botonI.addEventListener("click", function(e) {
    iniciar(e);
})

botonD.addEventListener("click", function(e) {
    detener(e);
})