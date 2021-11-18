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
 * Nombre :  xxxxxx
 * Codigo :  xxxxxx
 ******************************************/
