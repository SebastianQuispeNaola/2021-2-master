const Sequelize = require("sequelize")
const Op = Sequelize.Op;

const models = require("./models");
const usr = models.Usuario;

const upd = () => {
    console.log("==> INicio de update")

    usr.update(
        {
            nombre : "Capitan Futuro"
        },
        {
            where : {
                codigo : "20229999"
            }
        }
    )
    .then( (resultado) => {
        console.log("Registro actualizado")
        console.log(resultado)
    })

    console.log("==> Fin de update")
}

const invoca = setTimeout(upd,1000)