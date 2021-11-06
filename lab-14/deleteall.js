const Sequelize = require("sequelize")
const Op = Sequelize.Op;

const models = require("./models");
const usr = models.Usuario;

const del = () => {
    console.log("==> INicio de delete ALL")

    usr.destroy(
        {
            where : {
               
            },
            truncate: true
        }
    )
    .then( (resultado) => {
        console.log("Registro eliminado")
        console.log(resultado)
    })

    console.log("==> Fin de delete ALL")
}

const invoca = setTimeout(del,1000)