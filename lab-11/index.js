const http = require("http");
const fs = require("fs");
// Incoporar a Express
const express = require("express");

const hostname = "localhost";
const port     = process.env.port || 5000;

// Instanciar a Express
const app = new express();

// ... La ruta de la welcome page
app.get("/", (req,res) => {
    console.log( req.headers )

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Hola Mundo NodeJS + Express </h1>")

})

// La ruta para contenido estatico
app.get("/static/*" , (req,res) => {
    // aqui tenemos que leer el archivo desde el File System
    // http://localhost:5000/static/index.html
    const archivo = `${__dirname}/public/${req.params[0]}`

    fs.createReadStream(archivo)
        .on('error', () => error404(req,res) )
        .pipe(res)
})


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