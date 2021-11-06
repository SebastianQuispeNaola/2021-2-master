/*
Ejemplo de uso de http + URL
*/

const http = require("http");
const url = require("url")

const port = process.env.port || 8085;

const server = http.createServer( function(req, res) {
    console.log("El path solicitado es " + req.url)
    var path = req.url.split("?")[0]

    if ( path == "/texto") {
        return responderTEXT(req,res)
    }

    if ( path == "/html") {
        return responderHTML(req,res)
    }

    if (path == "/json") {
        return responderJSON(req,res)
    }

    error404(req,res)

});

server.listen(port);
console.log("Servidor iniciado en el puerto " + port);
console.log(`Servidor iniciado en el puerto ${port}`);

function responderTEXT(req,res) {
    res.writeHead(200, {"Content-type": "text/plain" } )
    res.write("<h1>Hola MUndo NodeJS </h1>")
    res.end()
}

function responderHTML(req,res) {
    var URL = new url.URL("http://" + req.headers.host + req.url)
    res.writeHead(200, {"Content-type": "text/html" } )
    res.write("<h1>Hola MUndo NodeJS </h1>")
    res.write("<p>" +  URL.searchParams + "</p>")
    res.end()
}

function responderJSON(req,res) {
    res.writeHead(200, {"Content-type": "application/json" } )
    res.write(JSON.stringify( {a:"Hola", b: "Mundo", c:"NodeJS" } ))
    res.end()
}

function error404(req,res) {
    res.writeHead(404, {"Content-type": "text/plain" } )
    res.write("La ruta solicitada no existe !!!")
    res.end()    
}