const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("sequelize")
const models = require("../models")

// Modulos de acceso a BD
const query = require("../persistencia/sql_base")
const upd = require("../persistencia/sql_update")

const rutas = express.Router();

// Setear a express
rutas.use( express.urlencoded( {extended: true }) )
rutas.use( express.json() )

/******************************************
 *  P R A C T I C A    C A L I F I C A D A
 *  E V A L U A C I O N #4
 * 
 * Nombre :  Ricardo Sebastian Quispe Naola 
 * Codigo :  20161177
 ******************************************/

// La ruta consulta
//Consultar el promedio obtenido por un alumno y obtener un JSON de repuesta
rutas.route("/Consultar el promedio")
    .get( async (req,res,next) => {
        // Aqui debo leer la BD y mostrar los datos en la vista principal
        await query()
            .then( (listado) => {
                res.status(200).send(listado)
            } )
            .catch( (error) => {
                console.log("Ocurrio un error en el query", error)
            })

    })


//actualizar una nota

rutas.route("actualizar una nota")
    .patch( async (req,res,next) => {
    // Aqui debo leer la BD y mostrar los datos en la vista principal
        await query()
            .then( (listado) => {
                res.status(200).send(listado)
            } )
            .catch( (error) => {
                console.log("Ocurrio un error en el query", error)
            })

})
//"Calcular cuantos puntos faltarian para aprobar el curso y obtener un JSON de respuesta
//Si esta aprobado mostrar  { ""Aprobado"" : ""Felicitaciones"" }
//En caso contrario mostrar { ""Faltan"" : xxxx } donde xxxx son los puntos"
//Dado un alumno, mostrar los datos del alumno y sus notas. Obtener un JSON de respuesta

rutas.route("Actualiza una nota")
//Dado un alumno, mostrar los datos del alumno y sus notas. Obtener un JSON de respuesta
rutas.route("/actualizar")
    .put( async (req,res,next) => {
        // Debo actualizar la data en la BD
        // Mostrar la vista principal
        
        await actualiza(
            req.body.codigo,
            req.body.nombre,
            req.body.edad
            )
            .then( async () =>{
                res.sendStatus(204)
            })
            .catch( (error) => {
                console.log("error en actualiza ...")
            })
    })



    rutas.route("/actualizar")
    .put( async (req,res,next) => {
        // Debo actualizar la data en la BD
        // Mostrar la vista principal
        
        await upd(
            req.body.codigo,
            req.body.nombre,
            req.body.edad
            )
            .then( async () =>{
                res.sendStatus(204)
            })
            .catch( (error) => {
                console.log("error en actualiza ...")
            })
    })

module.exports = rutas