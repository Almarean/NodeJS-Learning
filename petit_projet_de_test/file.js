let fs = require('fs')

let File = {
    read: function(err, data, fileName) {
        fs.readFile(fileName, 'utf-8', (err, data))
    }
}

module.exports.read = File.read