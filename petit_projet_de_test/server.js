let http = require('http')
let url = require('url')
let fs = require('fs')
let mod = require('./monmodule')
/*
http.createServer('request', (req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' })
    let query = url.parse(req.url, true).query
    let name = query.name === undefined ? 'anonyme' : query.name
    fs.readFile('./view/index.html', 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-type': 'text/html; charset=utf-8' })
            res.end("Ce fichier n'existe pas.")
        } else {
            res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' })
            data = data.replace('{{ name }}', name)
            res.end(data)
        }
    })
}).listen(8080)*/

//app.hello()

mod.start(8080)