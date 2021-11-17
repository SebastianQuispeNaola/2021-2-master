letra = " abcdefgh "

let tabla = document.createElement("table");

// Crear fila Superior
let filaArriba = document.createElement("tr");

for (let j = 0; j <= 9; j++) {
    // Cada columna
    let col = document.createElement("td");
    let p = document.createElement("p");
    p.textContent = letra[j]

    if (j == 0) {
        let img = document.createElement("img");
        img.src = "img/alfil-negro.jpg"
        img.width = "26"
        img.height = "26"
        col.classList.add("vacio");
        col.appendChild(img)
    } else {
        col.classList.add("vacio");
        p.classList.add("rotado");
        col.appendChild(p)
    }

    filaArriba.appendChild(col)
}

tabla.appendChild(filaArriba)


// TABLERO PRINCIPAL
for (let i=1; i <=8; i++ ) {
    // Crear fila
    let fila = document.createElement("tr");
    // Columna
    for (let j = 0; j <= 9; j++) {
        let col = document.createElement("td");

        // Primera o ultima columna: colocar numero
        if (j == 0 || j == 9) {
            let p = document.createElement("p");
            p.textContent =  9-i
            if ( j== 9 ) {
                p.classList.add("rotado");            
             }
 
            col.appendChild(p);
            col.classList.add("vacio");            

        } else {
            // Colocamos el valor de la celda pero no visible
            col.textContent = letra[j] + "-" + (9-i)

            // Fila impar
            if (i % 2 != 0) {
                if (j % 2 == 0) {
                    col.classList.add("negro");
                } else {
                    col.classList.add("blanco");
                }
            } else {
                if (j % 2 != 0) {
                    col.classList.add("negro");
                } else {
                    col.classList.add("blanco");
                }

            }

            // Estilos de los bordes
            if ( i == 1) {
                col.classList.add("bordearriba");
            }
            if ( i == 8) {
                col.classList.add("bordeabajo");
            }
            if ( j == 1) {
                col.classList.add("bordeizquierdo");
            }
            if ( j == 8) {
                col.classList.add("bordederecho");
            }


            // Evento Mouse
            col.addEventListener("mouseover" , function() {
                document.getElementById("datos").innerHTML = col.textContent
              });
    
        } // del else


        fila.appendChild(col)
    }

    tabla.appendChild(fila)
}

    // Crear fila inferior
    let filaAbajo = document.createElement("tr");
    // Columnas
    for (let j=0; j <=9; j++ ) {
        // 
        let col = document.createElement("td");
        col.textContent =  letra[j]
        col.classList.add("vacio");

        if ( j == 0 ) {
            col.classList.add("nombre");
            col.textContent = "J.I.N."
        }

        if ( j== 9 ) {
            let img = document.createElement("img");
            img.src = "img/alfil-blanco.png"
            img.width = "26"
            img.height = "26"
            col.classList.add("vacio");
            col.appendChild(img)
        }

        filaAbajo.appendChild(col)
    }   

    tabla.appendChild(filaAbajo)


document.getElementById("izquierdo").appendChild(tabla)


