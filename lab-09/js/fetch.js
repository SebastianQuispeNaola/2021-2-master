/*
Los URLS
*/
const url_qry = "http://demoulima2.000webhostapp.com/ulima/expense/list?code=202120001"
const url_add = "http://demoulima2.000webhostapp.com/ulima/expense/add"

/*
Crear los nodos necesarios y retornar una fila HTML
*/
function crearFila(descripcion, monto , fecha) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");

    td1.innerHTML = descripcion;
    td2.innerHTML = monto;
    td3.innerHTML = fecha;

    // Crear el boton
    let bt = document.createElement("button");
    bt.setAttribute("type", "button");
    bt.setAttribute("class","btn btn-danger btn-sm");
    bt.innerHTML = " -- ";
    bt.addEventListener("click", eliminar);

    td4.appendChild(bt);

    // CRear la fila
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    return tr;
}

/*
Obtener los datos
*/
var obtenerDatos = () => {

    // Definir el URL
    var promesa = fetch(url_qry, 
                  {
                    method : 'GET'
                  }
                )

    // Definir el callback
    promesa.then( (response) => {
        response.json().then( (data) => {
                // Mostrar la data en el DOM
                for ( var g of data) {
                    let descripcion = g.description;
                    let monto       = g.amount;
                    let fecha       = g.date;
                    // CRear la fila y colocarla en el DOM
                    const f = crearFila(descripcion, monto , fecha);
                    document.getElementById("datos").appendChild(f);
                } // end del for
        })

    })

    promesa.catch( (error) => {
        console.log("Ocurrio un error " + error )
    })




}


/*
 Agregar registro
 */
function agregar() {
    // Recuperar lo que se ha digitado en el formulario
    let descripcion = document.getElementById("gastos-descripcion").value ;
    let monto = document.getElementById("gastos-monto").value ;
    let fecha = document.getElementById("gastos-fecha").value ;

    // Validar si todos los campos tienen datos
    if ( descripcion === "" || monto === "" || fecha === "" ) {
        let msg = document.getElementById("mensaje");
        msg.setAttribute("style","display:block");

        document.getElementById("but-cerrar").addEventListener("click", () => {
            document.getElementById("mensaje").setAttribute("style","display:none")
        })
    } else {
        // Procesar el formulario
        let form = new FormData();
        form.append("description", descripcion);
        form.append("amount", monto);
        form.append("date", fecha);
        form.append("code", "202120001"); // Aqui colocar su propio codigo
        // Y recordar cambiar el codigo del URL_QRY

        fetch(url_add, 
            {
                method : 'POST',
                body   : form
            }
            )
        .then(refrescar)
        .catch( (error) => {
            console.error(error);
        })

        // Limpiar el FORM
        document.getElementById("gastos-descripcion").value = "";
        document.getElementById("gastos-monto").value  = "";
        document.getElementById("gastos-fecha").value  = "";   

    } // del else


}

/*
 Eliminar nodo solo en el DOM
 */
var eliminar = (event) => {
    event.target.parentNode.parentNode.remove();

}

/*
Refrescar pantalla 
*/
var refrescar = () => {
    // Limpiar esa zona de la pantalla
    document.getElementById("datos").innerHTML = "";
    // Volver a cargar
    obtenerDatos();
}

/***************************************/
/* PROGRAMA PRINCIPAL */
/***************************************/
var main = () => {
    obtenerDatos();
    // evento de click en el boton agregar
    document.querySelector("#but-agregar").addEventListener("click",agregar)

}

window.addEventListener("load",main);