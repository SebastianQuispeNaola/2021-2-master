const express = require("express");

const ruta = express.Router();

// Setear a express
ruta.use( express.urlencoded( {extended: true }) )
ruta.use( express.json() )

//----- DEFINICION DE RUTAS
ruta.route('/')
    .post( (req,res,next) => {
       res.end("Recibi un POST y obtuve " + req.body.codigo + " " + req.body.nombre);
}) 

ruta.route('/')
    .get( (req,res,next) => {
    res.end("Recibi un GET y obtuve " + req.query.codigo + " " + req.query.nombre);
}) 

ruta.route('/:codigo/:nombre')
    .get( (req,res,next) => {
    res.end("Recibi un GET v2 y obtuve " + req.params.codigo + " " + req.params.nombre);
})

ruta.route("/")
    .put( (req,res,next) => {
    res.statusCode = 405
    res.end("Metodo no implementado aun ...")
})

ruta.route("/")
    .delete( (req,res,next) => {
    res.statusCode = 405
    res.end("Metodo no implementado aun ...")
})


// NO OLVIDAR QUE HAY QUE EXPORTAR
module.exports = ruta;