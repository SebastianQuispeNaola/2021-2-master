const models = require("./models");
const usr = models.Usuario;

const inserta = () => {
    console.log("==> Inicio de insert")

    usr.create(
        {
            codigo: process.argv[2],
            nombre : process.argv[3],
            edad: process.argv[4]
        }
    )
    .then( (newUsr) => {
        console.log("Registro Insertado" + newUsr)
    } )

    console.log("==> Fin de insert")
}

// Invocar
const invoca = setTimeout(inserta, 1000)