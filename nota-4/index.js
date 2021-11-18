const http = require('http')

const hostname = 'localhost'

/*
La reglas:
1. Incluir modulos y depencias
2. COnfigurar express con el motor de plantillas
3. Definir los middleware
4. Definicion de rutas
5. COnectar a BD
6. Iniciar al app / servidor
*/

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const multer = require("multer");
const pg = require("pg");
const HSTORE= require("pg-hstore");
const sequelize = require("sequelize");


// Dependencias
const r1 = require("./routes/rptas.js");
const { HSTORE } = require('sequelize');


// instanciar Express
const app = express();
app.set('port', process.env.port || 5000);
app.set('env','development'); // test stage preview production

// Motor de plantillas
app.set('view cache', "false");
app.set("view engine", "ejs");
app.set("views",__dirname + "/views");
app.set("layout","../layouts/plantilla1");

// La aplicacion debe estar en ...
app.use("/", r1);

// Instanciar el server
const server = http.createServer(app);
server.listen( app.get('port') , hostname , () => {
    console.log(`Servidor iniciado en puerto ... ${app.get('port')}`);

})

