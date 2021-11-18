const Sequelize = require("sequelize")
const Op = Sequelize.Op;

const models = require("../models");
const nota = models.Nota;

/******************************************
 *  P R A C T I C A    C A L I F I C A D A
 *  E V A L U A C I O N #4
 * 
 * Nombre :  Ricardo Sebastian Quispe Naola
 * Codigo :  20161177
 ******************************************/

const actualiza = async (req, res) =>{
    console.log ("Inicio de update")

    return nota.update(
        {
            Alumno = alun,
            Nota = not,
            Peso = pes,
            //No se muestra campos de fecha
        },
        {
            where : {
                codigo : cod
            }
        }
    )
    .then( (resultado) => {
        console.log("Registro actualizado")
        console.log(resultado)
    })
    console.log("==> Fin de update")
}

module.exports = actualiza
