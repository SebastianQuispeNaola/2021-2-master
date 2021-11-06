const Sequelize = require("sequelize")
const Op = Sequelize.Op;

const models = require("./models");
const usr = models.Usuario;

const del = () => {
    console.log("==> INicio de delete")

    usr.destroy(
        {
            where : {
                codigo : "20229999"
            }
        }
    )
    .then( (resultado) => {
        console.log("Registro eliminado")
        console.log(resultado)
    })

    console.log("==> Fin de delete")
}

const invoca = setTimeout(del,1000)