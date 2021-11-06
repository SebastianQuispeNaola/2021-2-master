/*
Select con filtro
*/
const Sequelize = require("sequelize")
const Op = Sequelize.Op;

const models = require("./models");
const usr = models.Usuario;

const query1 = () => {
    console.log("==> Inicio de query1");

    usr.findAll(
        {
            where : {
                edad : process.argv[2]
            }
        }

    )
        .then( (listado) => {
            // Mostrar los datos
            listado.forEach( elem => {
                jsonObject = elem.get( {raw: true} )
                console.log( jsonObject )
            })
        } )

        .catch( (error) => {
            console.log("Error en el acceso a BD")
        })

    console.log("==> Final de query1");
}

const query2 = () => {
    console.log("==> Inicio de query2");

    usr.findAll(
        {
            where : {
                edad : process.argv[2],
                codigo: process.argv[3]
            }
        }

    )
        .then( (listado) => {
            // Mostrar los datos
            listado.forEach( elem => {
                jsonObject = elem.get( {raw: true} )
                console.log( jsonObject )
            })
        } )

        .catch( (error) => {
            console.log("Error en el acceso a BD")
        })

    console.log("==> Final de query2");
}

const query3 = () => {
    console.log("==> Inicio de query3");

    usr.findAll(
        {
            where : {
                [Op.or] : [
                    { edad : process.argv[2]  },
                    { codigo: process.argv[3] }    
                    ]
            }
        }

    )
        .then( (listado) => {
            // Mostrar los datos
            listado.forEach( elem => {
                jsonObject = elem.get( {raw: true} )
                console.log( jsonObject )
            })
        } )

        .catch( (error) => {
            console.log("Error en el acceso a BD")
        })

    console.log("==> Final de query3");
}


// Invocar
const invoca = setTimeout(query3, 1000);