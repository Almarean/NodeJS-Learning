let http = require('http')
let file = require('./file')
let url = require('url')

let App = {
    start: function(port) {
        http.createServer((req, res) => {
            let query = url.parse(req.url, true).query
            let name = query.name === undefined ? 'anonyme' : query.name
            file.read('index.html', 'utf-8', (err, data) => {
                if (err) {
                    res.writeHead(404, { 'Content-type': 'text/html; charst=utf-8' })
                    res.end("Le fichier n'existe pas")
                } else {
                    res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' })
                    data = data.replace('{{ name }}', name)
                    res.end(data)
                }
            })
        }).listen(port)
    }
}

module.exports.start = App.start