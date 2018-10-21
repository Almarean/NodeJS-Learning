let http = require('http')
let fs = require('fs')
let url = require('url')
const EventEmitter = require('events')

let App = {
    start: function(port) {
        let emitter = new EventEmitter()
        let server = http.createServer((req, res) => {
            res.writeHead(200, {
                'Content-type': 'text/html; charset=utf-8'
            })
            if (req.url === '/') {
                emitter.emit('root', res)
            }
            res.end()
        }).listen(port)
        return emitter
    }
}

let app = App.start(8080)
app.on('root', function(res) {
    res.write('Je suis à la racine')
})

/*let server = http.createServer()
server.on('request', (req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html; charset=utf-8'
    })
    let query = url.parse(req.url, true).query
    let name = query.name === undefined ? 'anonyme' : query.name
    let age = query.age === undefined ? '0' : query.age
    fs.readFile('index.html', 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(404)
            res.end('Ce fichier n\'existe pas.')
        } else {
            res.writeHead(200, {
                'content-type': 'text/html; charset=utf-8' 
            })
            data = data.replace('{{ name }}', name)
            data = data.replace('{{ age }}', age)
            res.end(data)
        }
    })
})
server.listen(8080)*/