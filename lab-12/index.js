const http = require("http");

// Incoporar a Express
const express = require("express");
const bodyParser = require("body-parser");

const hostname = "localhost";
const port     = process.env.port || 3000;

// Instanciar a Express
const app = new express();

// Setear a express
app.use( express.urlencoded( {extended: true }) )
app.use( express.json() )

// Otra forma de leer los archivos estaticos
app.use( express.static( __dirname + '/public'))

//----- DEFINICION DE RUTAS
app.post('/alumno' , (req,res,next) => {
    res.end("Recibi un POST y obtuve " + req.body.codigo + " " + req.body.nombre);
}) 

app.get('/alumno' , (req,res,next) => {
    res.end("Recibi un GET y obtuve " + req.query.codigo + " " + req.query.nombre);
}) 

app.get('/alumno/:codigo/:nombre', (req,res,next) => {
    res.end("Recibi un GET v2 y obtuve " + req.params.codigo + " " + req.params.nombre);

})

app.put("/alumno", (req,res,next) => {
    res.statusCode = 405
    res.end("Metodo no implementado aun ...")
})

app.delete("/alumno", (req,res,next) => {
    res.statusCode = 405
    res.end("Metodo no implementado aun ...")
})

//--- FIN DE DEFINICION DE RUTAS


// Definir el servidor
const server = http.createServer( app )

// Iniciar el servidor
server.listen( port, hostname, () => {
    console.log(`servidor iniciado en port ${port} ...`)
})


function error404(req,res) {
    res.writeHead(404, {'Content-Type' : 'text/html'})
    res.write("<h2>El recurso que deseas no existe !!! </h2>")
    res.end("<h3> Sorry ....</h3>")
}