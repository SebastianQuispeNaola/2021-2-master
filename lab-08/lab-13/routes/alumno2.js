const express = require("express");

const ruta = express.Router();

// Setear a express
ruta.use( express.urlencoded( {extended: true }) )
ruta.use( express.json() )

ruta.route('/ejemplo1')
    .get( (req,res,next) => {
        res.render('welcome1')
    })

ruta.route('/ejemplo2')
    .get( (req,res,next) => {
        res.render('welcome2', { layout : '../layouts/plantilla2'})
    })

ruta.route('/ejemplo3')
    .get( (req,res,next) => {
        res.render('welcome3', { layout : '../layouts/plantilla3'})
    })    


ruta.route('/ejemplo4')
    .get( (req,res,next) => {
        // Vamos a suponer que hay un procesamiento  y btemos unos datos de algun lado
        var superh = [
            { name : "Tony Stark", organizacion: "Stark Industries", power: 5},
            { name : "Bruno Diaz", organizacion: "Batman Inc", power: 2},
            { name : "Bob Esponja", organizacion: "Nicklodeon", power: 0}
        ]
            res.json(superh);
    }) 

ruta.route('/ejemplo5')
    .get( (req,res,next) => {
        // Vamos a suponer que hay un procesamiento  y btemos unos datos de algun lado
        var superh = [
            { name : "Tony Stark", organizacion: "Stark Industries", power: 5},
            { name : "Bruno Diaz", organizacion: "Batman Inc", power: 2},
            { name : "Bob Esponja", organizacion: "Nicklodeon", power: 0}
        ]

        var frase = "Al infinito y mas alla ...";

        if ( !req.session.contador ) {
            req.session.contador = 1;
        } else {
            req.session.contador++;
        }

        res.locals.contadorVista = req.session.contador;

        res.render("welcome4", { p1: superh, p2: frase, layout : '../layouts/plantilla3' } );

    }) 

// NO OLVIDAR EXPORTAR
module.exports = ruta;